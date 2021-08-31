export declare function swiWaitForVBlank(): void;

declare function _print(ptr: usize, x: u32): void;

export function print(str: string): void {
  const buffer = String.UTF8.encode(str);
  _print(changetype<usize>(buffer), 0);
}

export function println(str: string): void {
  print(str);
  print('\n');
}

const encode = (str: string): usize => changetype<usize>(String.UTF8.encode(str + "\0"));

export declare function NF_Set2D(a: u32, b: u32): void;

export declare function _NF_SetRootFolder(a: usize, x: u32): void;
export function NF_SetRootFolder(root: string): void {
  _NF_SetRootFolder(encode(root), 0);
}

export declare function NF_InitTiledBgBuffers(): void;
export declare function NF_InitTiledBgSys(a: u32): void;

declare function _NF_LoadTiledBg(a: usize, x: u32, b: usize, y: u32, c: u32, d: u32): void;
export function NF_LoadTiledBg(a: string, b: string, c: u32, d: u32): void {
  _NF_LoadTiledBg(encode(a), 0, encode(b), 0, c, d);
}

export declare function _NF_CreateTiledBg(a: u32, b: u32, c: usize, x: u32): void;
export function NF_CreateTiledBg(a: u32, b: u32, c: string): void {
  _NF_CreateTiledBg(a, b, encode(c), 0);
}


export declare function NF_InitSpriteBuffers(): void;
export declare function NF_InitSpriteSys(a: u32): void;
export declare function NF_InitTextSys(a: u32): void;

declare function _NF_LoadTextFont(c: u32, d: u32, e: u32, a: usize, x: u32, b: usize, y: u32): void;
export function NF_LoadTextFont(a: string, b: string, c: u32, d: u32, e: u32): void {
  _NF_LoadTextFont(c, d, e, encode(a), 0, encode(b), 0);
}

declare function _NF_CreateTextLayer(a: u8, b: u8, c: u8, d: usize, x: u32): void;
export function NF_CreateTextLayer(a: u8, b: u8, c: u8, d: string): void {
  _NF_CreateTextLayer(a, b, c, encode(d), 0);
}

declare function _NF_WriteText(a: u8, b: u8, c: u8, d: u8, e: usize, x: u32): void;
export function NF_WriteText(a: u8, b: u8, c: u8, d: u8, e: string): void {
  _NF_WriteText(a, b, c, d, encode(e), 0);
}

export declare function NF_UpdateTextLayers(): void;

export declare function consoleDemoInit(): void;
export declare function consoleClear(): void;

declare function _NF_LoadSpriteGfx(a: usize, x: u32, b: u8, c: u8, d: u8): void;
export function NF_LoadSpriteGfx(a: string, b: u8, c: u8, d: u8): void {
  _NF_LoadSpriteGfx(encode(a), 0, b, c, d);
}

declare function _NF_LoadSpritePal(a: usize, x: u32, b: u8): void;
export function NF_LoadSpritePal(a: string, b: u8): void {
  _NF_LoadSpritePal(encode(a), 0, b);
}

export declare function NF_VramSpriteGfx(a: u8, b: u8, c: u8, d: boolean): void;
export declare function NF_VramSpritePal(a: u8, b: u8, c: u8): void;

export declare function NF_CreateSprite(a: u8, b: u8, c: u8, d: u8, e: u8, f: u8): void;
export declare function NF_SpriteOamSet(a: u8): void;
export declare function oamUpdate(): void;
export declare function NF_ClearTextLayer(a: u8, b: u8): void;
export declare function NF_DeleteSprite(a: u8, b: u8): void;
export declare function keysHeld(): u32;
export declare function scanKeys(): void;

export enum KEYS {
  START = 1 << 3,
  RIGHT = 1 << 4,
  LEFT= 1 << 5,
  UP = 1 << 6,
  DOWN = 1 << 7,
}

export declare function rand(): u8;