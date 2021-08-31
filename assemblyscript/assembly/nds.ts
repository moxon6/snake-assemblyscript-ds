export declare function swiWaitForVBlank(): void;

declare function _print(ptr: ArrayBuffer): void;

export function print(str: string): void {
  const buffer = String.UTF8.encode(str + "\0");
  _print(changetype<ArrayBuffer>(buffer));
}

export function println(str: string): void {
  print(str + "\n");
}

const encode = (str: string): ArrayBuffer => changetype<ArrayBuffer>(String.UTF8.encode(str + "\0"));

export declare function NF_Set2D(screen: u8, model: u8): void;

export declare function _NF_SetRootFolder(a: ArrayBuffer): void;
export function NF_SetRootFolder(root: string): void {
  _NF_SetRootFolder(encode(root));
}

export declare function NF_InitTiledBgBuffers(): void;
export declare function NF_InitTiledBgSys(screen: u8): void;

declare function _NF_LoadTiledBg(a: ArrayBuffer, b: ArrayBuffer, c: u32, d: u32): void;
export function NF_LoadTiledBg(a: string, b: string, c: u32, d: u32): void {
  _NF_LoadTiledBg(encode(a), encode(b), c, d);
}

export declare function _NF_CreateTiledBg(a: u32, b: u32, c: ArrayBuffer, ): void;
export function NF_CreateTiledBg(a: u32, b: u32, c: string): void {
  _NF_CreateTiledBg(a, b, encode(c));
}


export declare function NF_InitSpriteBuffers(): void;
export declare function NF_InitSpriteSys(screen: u8): void;
export declare function NF_InitTextSys(screen: u8): void;

declare function _NF_LoadTextFont(file: ArrayBuffer, name: ArrayBuffer, width: u32, height: u32, rotation: u32): void;
export function NF_LoadTextFont(file: string, name: string, width: u32, height: u32, rotation: u32): void {
  _NF_LoadTextFont(encode(file), encode(name), width, height, rotation);
}

declare function _NF_CreateTextLayer(a: u8, b: u8, c: u8, d: ArrayBuffer): void;
export function NF_CreateTextLayer(a: u8, b: u8, c: u8, d: string): void {
  _NF_CreateTextLayer(a, b, c, encode(d));
}

declare function _NF_WriteText(a: u8, b: u8, c: u8, d: u8, e: ArrayBuffer): void;
export function NF_WriteText(a: u8, b: u8, c: u8, d: u8, e: string): void {
  _NF_WriteText(a, b, c, d, encode(e));
}

export declare function NF_UpdateTextLayers(): void;

export declare function consoleDemoInit(): void;
export declare function consoleClear(): void;

declare function _NF_LoadSpriteGfx(a: ArrayBuffer, b: u8, c: u8, d: u8): void;
export function NF_LoadSpriteGfx(a: string, b: u8, c: u8, d: u8): void {
  _NF_LoadSpriteGfx(encode(a), b, c, d);
}

declare function _NF_LoadSpritePal(a: ArrayBuffer, b: u8): void;
export function NF_LoadSpritePal(a: string, b: u8): void {
  _NF_LoadSpritePal(encode(a), b);
}

export declare function NF_VramSpriteGfx(screen: u8, vram: u16, ram: u16, keepframes: boolean): void;
export declare function NF_VramSpritePal(screen: u8, id: u8, slot: u8): void;

export declare function NF_CreateSprite(screen: u8 , id: u8 , gfx: u16 , pal: u8 , x: i16 , y: i16): void;
export declare function NF_SpriteOamSet(screen: u8): void;
export declare function oamUpdate(): void;
export declare function NF_ClearTextLayer(screen: u8, layer: u8): void;
export declare function NF_DeleteSprite(screen: u8, layer: u8): void;
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