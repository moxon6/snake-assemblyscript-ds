import Apple from "./apple";
import * as nds from "./nds";
import { Snake, SnakeDirection } from "./snake";

const SCREEN_TOP: u8 = 0;

function drawScore(score: u32): void {
  nds.NF_ClearTextLayer(SCREEN_TOP, 0);
  nds.NF_WriteText(SCREEN_TOP, 0, 2, 2, `SCORE: ${score}`);
  nds.NF_UpdateTextLayers();
}

function getDirectionFromKeys(direction: SnakeDirection): SnakeDirection {
  if (nds.keysHeld() & nds.KEYS.LEFT && direction !== SnakeDirection.RIGHT) {
    return SnakeDirection.LEFT;
  } else if (
    nds.keysHeld() & nds.KEYS.RIGHT &&
    direction !== SnakeDirection.LEFT
  ) {
    return SnakeDirection.RIGHT;
  } else if (
    nds.keysHeld() & nds.KEYS.UP &&
    direction !== SnakeDirection.DOWN
  ) {
    return SnakeDirection.UP;
  } else if (
    nds.keysHeld() & nds.KEYS.DOWN &&
    direction !== SnakeDirection.UP
  ) {
    return SnakeDirection.DOWN;
  } else {
    return direction;
  }
}

function updateDisplay(): void {
  nds.NF_SpriteOamSet(SCREEN_TOP);
  nds.swiWaitForVBlank();
  nds.oamUpdate();
}

const shouldQuit = (): boolean => (nds.keysHeld() & nds.KEYS.SELECT) !== 0;

export function start(): void {
  nds.consoleDemoInit();
  nds.consoleClear();
  nds.NF_Set2D(SCREEN_TOP, 0);
  nds.NF_SetRootFolder("NITROFS");

  nds.NF_InitTiledBgBuffers();
  nds.NF_InitTiledBgSys(SCREEN_TOP);

  nds.NF_LoadTiledBg("backgrounds/bg", "bg", 256, 256);
  nds.NF_CreateTiledBg(SCREEN_TOP, 3, "bg");

  nds.NF_InitSpriteBuffers();
  nds.NF_InitSpriteSys(SCREEN_TOP);

  nds.NF_LoadSpriteGfx("sprites/tile", 0, 8, 8);

  nds.NF_LoadSpritePal("palettes/segment", 0);
  nds.NF_LoadSpritePal("palettes/apple", 1);

  nds.NF_VramSpriteGfx(SCREEN_TOP, 0, 0, true);
  nds.NF_VramSpritePal(SCREEN_TOP, 0, 0);
  nds.NF_VramSpritePal(SCREEN_TOP, 1, 1);

  nds.NF_InitTextSys(SCREEN_TOP);

  nds.NF_LoadTextFont("fonts/font", "default", 256, 256, 0);
  nds.NF_CreateTextLayer(SCREEN_TOP, 0, 0, "default");

  let snake = new Snake(0);
  let apple = new Apple(1);

  let frame: u8 = 0;
  let score: u32 = 0;

  let done: bool = false;

  let direction: SnakeDirection = SnakeDirection.RIGHT;

  while (1) {
    if (!done) {
      frame += 1;
      nds.scanKeys();

      nds.NF_CreateSprite(SCREEN_TOP, 0, 0, 1, apple.x, apple.y);
      for (let i: i32 = 0; i < snake.segments.length; i++) {
        const seg = snake.segments[i];
        nds.NF_CreateSprite(SCREEN_TOP, (i as u8) + 1, 0, 2, seg.x, seg.y);
      }

      direction = getDirectionFromKeys(direction);

      if (shouldQuit()) {
        break;
      }

      if (frame === 5) {
        frame = 0;

        if (!snake.advanceHead(direction)) {
          done = true;
          nds.print("Game Over. \nPress start to continue.\n");
        }

        if (snake.hasEatenApple(apple)) {
          apple.shuffle();
          score++;
        } else {
          snake.removeTail();
        }

        drawScore(score);
      }

      updateDisplay();
    } else {
      nds.scanKeys();
      if (nds.keysHeld() & nds.KEYS.START) {
        nds.NF_DeleteSprite(SCREEN_TOP, 0);
        for (let i: i32 = 0; i < snake.segments.length; i++) {
          nds.NF_DeleteSprite(SCREEN_TOP, (i + 1) as u8);
        }
        snake = new Snake(0);
        apple = new Apple(1);
        score = 0;
        frame = 0;
        done = false;
        direction = SnakeDirection.RIGHT;
        nds.consoleClear();
      }
      updateDisplay();
    }
  }
}
