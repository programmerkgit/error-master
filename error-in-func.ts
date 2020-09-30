function error() {
    throw new Error('error in func');
}

function outer() {
    error();
}

outer();

/**
 * Top is where error is occurred.
 * Bellow is outer function where code is calling.
 * Object.<anonymous>... is ts-node.
 *
 * /Users/admin/WebstormProjects/error-master/error-in-func.ts:2
 * throw new Error('error in func');
 * ^
 Error: error in func
 at error (/Users/admin/WebstormProjects/error-master/error-in-func.ts:2:11)
 at outer (/Users/admin/WebstormProjects/error-master/error-in-func.ts:5:5)
 at Object.<anonymous> (/Users/admin/WebstormProjects/error-master/error-in-func.ts:7:1)
 at Module._compile (internal/modules/cjs/loader.js:701:30)
 at Module.m._compile (/usr/local/lib/node_modules/ts-node/src/index.ts:493:23)
 at Module._extensions..js (internal/modules/cjs/loader.js:712:10)
 at Object.require.extensions.(anonymous function) [as .ts] (/usr/local/lib/node_modules/ts-node/src/index.ts:496:12)
 at Module.load (internal/modules/cjs/loader.js:600:32)
 at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
 at Function.Module._load (internal/modules/cjs/loader.js:531:3)

 * */
