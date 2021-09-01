export declare function swiWaitForVBlank(): void;

const encode = (str: string): ArrayBuffer => String.UTF8.encode(str + "\0");

declare function _print(ptr: ArrayBuffer): void;
export function print(str: string): void {
  _print(encode(str));
}

export declare function NF_Set2D(screen: u8, model: u8): void;

export declare function _NF_SetRootFolder(a: ArrayBuffer): void;
export function NF_SetRootFolder(root: string): void {
  _NF_SetRootFolder(encode(root));
}

export declare function NF_InitTiledBgBuffers(): void;
export declare function NF_InitTiledBgSys(screen: u8): void;

declare function _NF_LoadTiledBg(
  file: ArrayBuffer,
  name: ArrayBuffer,
  width: u32,
  height: u32
): void;
export function NF_LoadTiledBg(
  file: string,
  name: string,
  width: u32,
  height: u32
): void {
  _NF_LoadTiledBg(encode(file), encode(name), width, height);
}

export declare function _NF_CreateTiledBg(
  screen: u32,
  layer: u32,
  name: ArrayBuffer
): void;
export function NF_CreateTiledBg(screen: u32, layer: u32, name: string): void {
  _NF_CreateTiledBg(screen, layer, encode(name));
}

export declare function NF_InitSpriteBuffers(): void;
export declare function NF_InitSpriteSys(screen: u8): void;
export declare function NF_InitTextSys(screen: u8): void;

declare function _NF_LoadTextFont(
  file: ArrayBuffer,
  name: ArrayBuffer,
  width: u32,
  height: u32,
  rotation: u32
): void;
export function NF_LoadTextFont(
  file: string,
  name: string,
  width: u32,
  height: u32,
  rotation: u32
): void {
  _NF_LoadTextFont(encode(file), encode(name), width, height, rotation);
}

declare function _NF_CreateTextLayer(
  screen: u8,
  layer: u8,
  rotation: u8,
  name: ArrayBuffer
): void;
export function NF_CreateTextLayer(
  screen: u8,
  layer: u8,
  rotation: u8,
  name: string
): void {
  _NF_CreateTextLayer(screen, layer, rotation, encode(name));
}

declare function _NF_WriteText(
  screen: u8,
  layer: u8,
  x: u16,
  y: u16,
  text: ArrayBuffer
): void;
export function NF_WriteText(
  screen: u8,
  layer: u8,
  x: u16,
  y: u16,
  text: string
): void {
  _NF_WriteText(screen, layer, x, y, encode(text));
}

export declare function NF_UpdateTextLayers(): void;

export declare function consoleDemoInit(): void;
export declare function consoleClear(): void;

declare function _NF_LoadSpriteGfx(
  file: ArrayBuffer,
  id: u16,
  width: u16,
  height: u16
): void;
export function NF_LoadSpriteGfx(
  file: string,
  id: u16,
  width: u16,
  height: u16
): void {
  _NF_LoadSpriteGfx(encode(file), id, width, height);
}

declare function _NF_LoadSpritePal(file: ArrayBuffer, id: u8): void;
export function NF_LoadSpritePal(file: string, id: u8): void {
  _NF_LoadSpritePal(encode(file), id);
}

export declare function NF_VramSpriteGfx(
  screen: u8,
  vram: u16,
  ram: u16,
  keepframes: boolean
): void;
export declare function NF_VramSpritePal(screen: u8, id: u8, slot: u8): void;

export declare function NF_CreateSprite(
  screen: u8,
  id: u8,
  gfx: u16,
  pal: u8,
  x: i16,
  y: i16
): void;
export declare function NF_SpriteOamSet(screen: u8): void;
export declare function oamUpdate(): void;
export declare function NF_ClearTextLayer(screen: u8, layer: u8): void;
export declare function NF_DeleteSprite(screen: u8, layer: u8): void;
export declare function keysHeld(): u32;
export declare function scanKeys(): void;

export enum KEYS {
  SELECT = 1 << 2,
  START = 1 << 3,
  RIGHT = 1 << 4,
  LEFT = 1 << 5,
  UP = 1 << 6,
  DOWN = 1 << 7,
}

export declare function rand(): u8;
