import Apple from './apple';
import * as nds from './nds';
import { Snake, SnakeDirection } from './snake';

export function start(): void {

    nds.consoleDemoInit();	
    nds.consoleClear();
    nds.NF_Set2D(0,0);
    nds.NF_SetRootFolder("NITROFS");
    
    nds.NF_InitTiledBgBuffers();
    nds.NF_InitTiledBgSys(0);
    
    nds.NF_LoadTiledBg("backgrounds/bg", "bg", 256, 256);
    nds.NF_CreateTiledBg(0, 3, "bg");
    
    nds.NF_InitSpriteBuffers();
    nds.NF_InitSpriteSys(0);
    
    nds.NF_LoadSpriteGfx("sprites/tile", 0, 8, 8); 
    nds.NF_LoadSpritePal("palettes/segment", 0);
    nds.NF_LoadSpritePal("palettes/apple", 1);
    nds.NF_LoadSpritePal("palettes/segment_dropshadow", 2);
    nds.NF_LoadSpritePal("palettes/apple_dropshadow", 3);
    
    nds.NF_VramSpriteGfx(0, 0, 0, true);
    nds.NF_VramSpritePal(0, 0, 0);
    nds.NF_VramSpritePal(0, 1, 1);
    nds.NF_VramSpritePal(0, 2, 2);
    nds.NF_VramSpritePal(0, 3, 3);
    
    nds.NF_InitTextSys(0);
    
    nds.NF_LoadTextFont("fonts/font", "default", 256, 256, 0);
    nds.NF_CreateTextLayer(0, 0, 0, "default");

    let snake = new Snake();
    let apple = new Apple();

    let frame: u8 = 0;
    let score = 0;
    
    let done: bool = false;

    while(1)
    {   
        if (!done)  {
            frame += 1;
            nds.scanKeys();
    
            if(nds.keysHeld() & nds.KEYS.LEFT && snake.direction !== SnakeDirection.RIGHT) {
                snake.direction = SnakeDirection.LEFT
            } 
            if(nds.keysHeld() & nds.KEYS.RIGHT && snake.direction !== SnakeDirection.LEFT) {
                snake.direction = SnakeDirection.RIGHT
            } 
            if(nds.keysHeld() & nds.KEYS.UP && snake.direction !== SnakeDirection.DOWN) {
                snake.direction = SnakeDirection.UP
            } 
            if(nds.keysHeld() & nds.KEYS.DOWN && snake.direction !== SnakeDirection.UP) {
                snake.direction = SnakeDirection.DOWN
            }
    
            if (frame === 5) {
                frame = 0;
                for (let i: i32 = 0; i < snake.segments.length; i++) {
                    const seg = snake.segments[i];
                    nds.NF_CreateSprite(0, (i as u8) + 1, 0, 2, seg.x, seg.y);
                }
                snake.advanceHead();
                const head = snake.segments[0];
                if (head.x === apple.x && head.y === apple.y) {
                    apple.shuffle();
                    score++;
                } else {
                    snake.removeTail();
                }
                for (let i: i32 = 1; i < snake.segments.length; i ++) {
                    const seg = snake.segments[i];
                    if (head.x === seg.x && head.y === seg.y) {
                        done = true;
                        nds.println("Game Over. \nPress start to continue.");
                    }
                }
                nds.NF_ClearTextLayer(0, 0);
                nds.NF_WriteText(0, 0, 2, 2, `SCORE: ${score}`);
                nds.NF_UpdateTextLayers();
                nds.NF_CreateSprite(0, 0, 0, 1, apple.x, apple.y);
            }
            nds.NF_SpriteOamSet(0);
            nds.swiWaitForVBlank();
            nds.oamUpdate();
        } else {
            
            nds.scanKeys();
            if (nds.keysHeld() & nds.KEYS.START) {
                nds.NF_DeleteSprite(0, 0);
                for (let i: i32 = 0; i < snake.segments.length; i ++) {
                    nds.NF_DeleteSprite(0, i + 1 as u8);
                }
                snake = new Snake();
                apple = new Apple();
                score = 0;
                frame = 0;
                done = false;
                nds.consoleClear();
            }
            nds.NF_SpriteOamSet(0);
            nds.swiWaitForVBlank();
            nds.oamUpdate();
        }
        
  }
}
