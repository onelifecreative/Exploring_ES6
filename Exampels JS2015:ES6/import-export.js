// Es6 engine not support natively export/import
// U can use tools ike webpack, jspm, browserify.


// lib/jquery.js
import "module/jquery";


/* import object */

// module/files.js
export function files(files){return file;}

// app.js
// import only files fn
import {files} from "module/files.js";


/* import only selected */

// module/files.js
export function files(files){return file;}
export function users(users){return user;}

// app.js
// import only files fn
import {files,users} from "module/files.js";



/* import all exports fn */

// module/files.js
export function files(files){return file;}
export function users(users){return user;}
export 

// app.js
// import all the exported bindings
import * as files from "module/files.js";



