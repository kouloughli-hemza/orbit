(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1869:function(module,exports){module.exports=function(hljs){var IDENT_RE="[A-Za-z$_][0-9A-Za-z$_]*",KEYWORDS={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},NUMBER={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:hljs.C_NUMBER_RE}],relevance:0},SUBST={className:"subst",begin:"\\$\\{",end:"\\}",keywords:KEYWORDS,contains:[]},HTML_TEMPLATE={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"xml"}},CSS_TEMPLATE={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[hljs.BACKSLASH_ESCAPE,SUBST],subLanguage:"css"}},TEMPLATE_STRING={className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE,SUBST]};SUBST.contains=[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,NUMBER,hljs.REGEXP_MODE];var PARAMS_CONTAINS=SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE,hljs.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:KEYWORDS,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,HTML_TEMPLATE,CSS_TEMPLATE,TEMPLATE_STRING,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,NUMBER,{begin:/[{,]\s*/,relevance:0,contains:[{begin:IDENT_RE+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:IDENT_RE,relevance:0}]}]},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS,contains:PARAMS_CONTAINS}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{begin:/</,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,subLanguage:"xml",contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},{begin:/<[A-Za-z0-9\\._:-]+/,end:/(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,skip:!0,contains:[{begin:/<[A-Za-z0-9\\._:-]+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:IDENT_RE}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:PARAMS_CONTAINS}],illegal:/\[|%/},{begin:/\$[(.]/},hljs.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},hljs.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_javascript.ea1b9492078493ecad31.bundle.js.map