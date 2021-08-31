#include <nds.h>
#include <nf_lib.h>
#include <fat.h>

#include <math.h>
#include <stdio.h>
#include <time.h>
#include <fstream>

#include "wasm3.h"
#include "m3_env.h"	
#include "app.wasm.h"
#include "nds.h"

int main(void) {
    IM3Environment env = m3_NewEnvironment ();
    IM3Runtime runtime = m3_NewRuntime (env, 1024, NULL);
    IM3Module module;
    m3_ParseModule (env, &module, build_optimized_wasm, build_optimized_wasm_len);
    m3_LoadModule (runtime, module);
    LinkNDSFunctions(module);
    IM3Function f;
    m3_FindFunction (&f, runtime, "start");
    m3_CallV (f, 10);
    return 0;
}
