const fs=require('fs'),path=require('path');
let ts;
try{ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript')}catch{ts=require('typescript')}
const roots=['app','components','lib'];const issues=[];let count=0;
function go(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,d.name);if(d.isDirectory())go(f);else if(/\.(tsx?|mts)$/.test(f)){count++;const input=fs.readFileSync(f,'utf8');const output=ts.transpileModule(input,{fileName:f,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}});for(const e of output.diagnostics||[]){if(e.category===ts.DiagnosticCategory.Error)issues.push(`${f}: ${ts.flattenDiagnosticMessageText(e.messageText,' ')}`);}}}}
for(const root of roots)go(root);
if(issues.length){console.error(issues.join('\n'));process.exitCode=1;}else console.log(`Syntax transpilation passed for ${count} TypeScript/TSX files. Note: full typechecking needs npm install.`);
