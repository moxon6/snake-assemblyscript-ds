#include "m3_env.h"	
#include <nds.h>
#include <nf_lib.h>

m3ApiRawFunction(m3_swiWaitForVBlank) {
    swiWaitForVBlank();
    m3ApiSuccess();
}

m3ApiRawFunction(_print)
{
    m3ApiGetArgMem (const uint8_t *, buf)
    iprintf((char *)buf);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_Set2D) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, model)
    NF_Set2D(screen, model);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_SetRootFolder) {
    m3ApiGetArgMem (const uint8_t *, root)
    NF_SetRootFolder((char*) root);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_InitTiledBgBuffers) {
    NF_InitTiledBgBuffers();
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_InitTiledBgSys) {
    m3ApiGetArg (uint8_t, screen)
    NF_InitTiledBgSys(screen);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_LoadTiledBg) {
    m3ApiGetArgMem (const uint8_t *, path)
    m3ApiGetArgMem (const uint8_t *, name)
    m3ApiGetArg (uint32_t, width)
    m3ApiGetArg (uint32_t, height)
    NF_LoadTiledBg((char*)path, (char*)name, width, height);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_CreateTiledBg) {
    m3ApiGetArg (uint32_t, a)
    m3ApiGetArg (uint32_t, b)
    m3ApiGetArgMem (const uint8_t *, c)
    NF_CreateTiledBg(a,b,(char*)c);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_InitSpriteBuffers) {
    NF_InitSpriteBuffers();
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_InitSpriteSys) {
    m3ApiGetArg (uint8_t, screen)
    NF_InitSpriteSys(screen);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_InitTextSys) {
    m3ApiGetArg (uint8_t, screen)
    NF_InitTextSys(screen);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_LoadTextFont) {
    m3ApiGetArgMem (const uint8_t *, file)
    m3ApiGetArgMem (const uint8_t *, name)
    m3ApiGetArg (uint32_t, width)
    m3ApiGetArg (uint32_t, height)
    m3ApiGetArg (uint32_t, rotation)
    NF_LoadTextFont((char*)file, (char*)name, width, height, rotation);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_CreateTextLayer) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, layer)
    m3ApiGetArg (uint8_t, rotation)
    m3ApiGetArgMem (const uint8_t *, name)
    NF_CreateTextLayer(screen, layer, rotation, (char*)name);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_WriteText) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, layer)
    m3ApiGetArg (uint8_t, x)
    m3ApiGetArg (uint8_t, y)
    m3ApiGetArgMem (const uint8_t *, text)
    NF_WriteText(screen, layer, x, y, (char*)text);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_UpdateTextLayers) {
    NF_UpdateTextLayers();
    m3ApiSuccess();
}

m3ApiRawFunction(m3_consoleDemoInit) {
    consoleDemoInit();
    m3ApiSuccess();
};

m3ApiRawFunction(m3_consoleClear) {
    consoleClear();
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_LoadSpriteGfx) {
    m3ApiGetArgMem (const uint8_t *, a)
    m3ApiGetArg (uint8_t, b)
    m3ApiGetArg (uint8_t, c)
    m3ApiGetArg (uint8_t, d)
    NF_LoadSpriteGfx((char*)a, b, c, d); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_LoadSpritePal) {
    m3ApiGetArgMem (const uint8_t *, a)
    m3ApiGetArg (uint8_t, b)
    NF_LoadSpritePal((char*)a, b); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_VramSpriteGfx) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint16_t, ram)
    m3ApiGetArg (uint16_t, vram)
    m3ApiGetArg (bool, keepframes)
    NF_VramSpriteGfx(screen, ram, vram, keepframes); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_VramSpritePal) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, id)
    m3ApiGetArg (uint8_t, slot)
    NF_VramSpritePal(screen, id, slot); 
    m3ApiSuccess();
};


m3ApiRawFunction(m3_NF_CreateSprite) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, id)
    m3ApiGetArg (uint8_t, gfx)
    m3ApiGetArg (uint8_t, pal)
    m3ApiGetArg (uint8_t, x)
    m3ApiGetArg (uint8_t, y)
    NF_CreateSprite(screen, id, gfx, pal, x, y); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_SpriteOamSet) {
    m3ApiGetArg (uint8_t, screen)
    NF_SpriteOamSet(screen); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_oamUpdate) {
    oamUpdate(&oamMain);
    m3ApiSuccess();
}

m3ApiRawFunction(m3_NF_ClearTextLayer) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, layer)
    NF_ClearTextLayer(screen, layer); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_NF_DeleteSprite) {
    m3ApiGetArg (uint8_t, screen)
    m3ApiGetArg (uint8_t, layer)
    NF_DeleteSprite(screen, layer); 
    m3ApiSuccess();
};

m3ApiRawFunction(m3_keysHeld) {
    m3ApiReturnType (uint32_t)
    m3ApiReturn(keysHeld());
};

m3ApiRawFunction(m3_rand) {
    m3ApiReturnType (uint32_t)
    m3ApiReturn(rand());
};

m3ApiRawFunction(m3_scanKeys) {
    scanKeys();
    m3ApiSuccess();
};

void LinkNDSFunctions(IM3Module module) {
    m3_LinkRawFunction (module, "nds", "swiWaitForVBlank", "v()", &m3_swiWaitForVBlank);
    m3_LinkRawFunction (module, "nds", "_print", "v(i)", &_print);
    m3_LinkRawFunction (module, "nds", "NF_Set2D", "v(ii)", &m3_NF_Set2D);
    m3_LinkRawFunction (module, "nds", "_NF_SetRootFolder", "v(i)", &m3_NF_SetRootFolder);
    m3_LinkRawFunction (module, "nds", "NF_InitTiledBgBuffers", "v()", &m3_NF_InitTiledBgBuffers);
    m3_LinkRawFunction (module, "nds", "NF_InitTiledBgSys", "v(i)", &m3_NF_InitTiledBgSys);
    m3_LinkRawFunction (module, "nds", "_NF_LoadTiledBg", "v(iiii)", &m3_NF_LoadTiledBg);
    m3_LinkRawFunction (module, "nds", "_NF_CreateTiledBg", "v(iii)", &m3_NF_CreateTiledBg);
    m3_LinkRawFunction (module, "nds", "NF_InitSpriteBuffers", "v()", &m3_NF_InitSpriteBuffers);
    m3_LinkRawFunction (module, "nds", "NF_InitSpriteSys", "v(i)", &m3_NF_InitSpriteSys);
    m3_LinkRawFunction (module, "nds", "NF_InitTextSys", "v(i)", &m3_NF_InitTextSys);
    m3_LinkRawFunction (module, "nds", "_NF_LoadTextFont", "v(iiiii)", &m3_NF_LoadTextFont);
    m3_LinkRawFunction (module, "nds", "_NF_CreateTextLayer", "v(iiii)", &m3_NF_CreateTextLayer);
    m3_LinkRawFunction (module, "nds", "_NF_WriteText", "v(iiiii)", &m3_NF_WriteText);
    m3_LinkRawFunction (module, "nds", "NF_UpdateTextLayers", "v()", &m3_NF_UpdateTextLayers);
    m3_LinkRawFunction (module, "nds", "consoleDemoInit", "v()", &m3_consoleDemoInit);
    m3_LinkRawFunction (module, "nds", "consoleClear", "v()", &m3_consoleClear);
    m3_LinkRawFunction (module, "nds", "_NF_LoadSpriteGfx", "v(iiii)", &m3_NF_LoadSpriteGfx);
    m3_LinkRawFunction (module, "nds", "_NF_LoadSpritePal", "v(ii)", &m3_NF_LoadSpritePal);
    m3_LinkRawFunction (module, "nds", "NF_VramSpriteGfx", "v(iiii)", &m3_NF_VramSpriteGfx);
    m3_LinkRawFunction (module, "nds", "NF_VramSpritePal", "v(iii)", &m3_NF_VramSpritePal);
    m3_LinkRawFunction (module, "nds", "NF_CreateSprite", "v(iiiiii)", &m3_NF_CreateSprite);
    m3_LinkRawFunction (module, "nds", "NF_SpriteOamSet", "v(i)", &m3_NF_SpriteOamSet);
    m3_LinkRawFunction (module, "nds", "oamUpdate", "v()", &m3_oamUpdate);
    m3_LinkRawFunction (module, "nds", "NF_ClearTextLayer", "v(ii)", &m3_NF_ClearTextLayer);
    m3_LinkRawFunction (module, "nds", "NF_DeleteSprite", "v(ii)", &m3_NF_DeleteSprite);
    m3_LinkRawFunction (module, "nds", "keysHeld", "i()", &m3_keysHeld);
    m3_LinkRawFunction (module, "nds", "scanKeys", "v()", &m3_scanKeys);
    m3_LinkRawFunction (module, "nds", "rand", "i()", &m3_rand);
}