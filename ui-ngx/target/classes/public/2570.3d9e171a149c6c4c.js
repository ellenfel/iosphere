(self.webpackChunkthingsboard=self.webpackChunkthingsboard||[]).push([[2570],{42570:(P,Q,j)=>{P=j.nmd(P),ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],function(b,L,F){"use strict";var $=b("./lib/dom"),E=b("./lib/oop"),N=b("./lib/event_emitter").EventEmitter,k=b("./lib/lang"),M=b("./range").Range,x=b("./range_list").RangeList,R=b("./keyboard/hash_handler").HashHandler,_=b("./tokenizer").Tokenizer,S=b("./clipboard"),s={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,r){var i=e.session.getTextRange();return r?i.replace(/\n\r?([ \t]*\S)/g,"\n"+r+"$1"):i},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return S.getText&&S.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){return(e.session.$mode||{}).lineCommentStart||""},CURRENT_YEAR:n.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:n.bind(null,{year:"2-digit"}),CURRENT_MONTH:n.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:n.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:n.bind(null,{month:"short"}),CURRENT_DATE:n.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:n.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:n.bind(null,{weekday:"short"}),CURRENT_HOUR:n.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:n.bind(null,{minute:"2-digit"}),CURRENT_SECOND:n.bind(null,{second:"2-digit"})};function n(e){var t=(new Date).toLocaleString("en-us",e);return 1==t.length?"0"+t:t}s.SELECTED_TEXT=s.SELECTION;var f=function(){this.snippetMap={},this.snippetNameMap={}};(function(){E.implement(this,N),this.getTokenizer=function(){return f.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(i){return i=i.substr(1),/^\d+$/.test(i)?[{tabstopId:parseInt(i,10)}]:[{text:i}]}function t(i){return"(?:[^\\\\"+i+"]|\\\\.)"}var r={regex:"/("+t("/")+"+)/",onMatch:function(i,a,l){var o=l[0];return o.fmtString=!0,o.guard=i.slice(1,-1),o.flag="",""},next:"formatString"};return f.$tokenizer=new _({start:[{regex:/\\./,onMatch:function(i,a,l){var o=i[1];return("}"==o&&l.length||-1!="`$\\".indexOf(o))&&(i=o),[i]}},{regex:/}/,onMatch:function(i,a,l){return[l.length?l.shift():i]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(i,a,l){var o=e(i.substr(1));return l.unshift(o[0]),o},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(i,a,l){var o=i.slice(1,-1).replace(/\\[,|\\]|,/g,function(d){return 2==d.length?d[1]:"\0"}).split("\0").map(function(d){return{value:d}});return l[0].choices=o,[o[0]]},next:"start"},r,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(i,a,l){return l.length&&l[0].expectElse?(l[0].expectElse=!1,l[0].ifEnd={elseEnd:l[0]},[l[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(i,a,l){var o=i[1];return"}"==o&&l.length||-1!="`$\\".indexOf(o)?i=o:"n"==o?i="\n":"t"==o?i="\t":-1!="ulULE".indexOf(o)&&(i={changeCase:o,local:o>"a"}),[i]}},{regex:"/\\w*}",onMatch:function(i,a,l){var o=l.shift();return o&&(o.flag=i.slice(1,-1)),this.next=o&&o.tabstopId?"start":"",[o||i]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(i,a,l){return[{text:i.slice(1)}]}},{regex:/\${\w+/,onMatch:function(i,a,l){var o={text:i.slice(2)};return l.unshift(o),[o]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(i,a,l){var o=l.shift();return this.next=o&&o.tabstopId?"start":"",[o||i]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(i,a,l){return l[0].formatFunction=i.slice(2,-1),[l.shift()]},next:"formatString"},r,{regex:/:[\?\-+]?/,onMatch:function(i,a,l){"+"==i[1]&&(l[0].ifEnd=l[0]),"?"==i[1]&&(l[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]}),f.$tokenizer},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map(function(r){return r.value||r})},this.getVariableValue=function(e,t,r){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var i=this.variables[t];return"function"==typeof i&&(i=this.variables[t](e,t,r)),i??""},this.variables=s,this.tmStrFormat=function(e,t,r){if(!t.fmt)return e;var i=t.flag||"",a=t.guard;a=new RegExp(a,i.replace(/[^gim]/g,""));var l="string"==typeof t.fmt?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,o=this,d=e.replace(a,function(){var c=o.variables.__;o.variables.__=[].slice.call(arguments);for(var g=o.resolveVariables(l,r),u="E",m=0;m<g.length;m++){var w=g[m];if("object"==typeof w)if(g[m]="",w.changeCase&&w.local){var y=g[m+1];y&&"string"==typeof y&&("u"==w.changeCase?g[m]=y[0].toUpperCase():g[m]=y[0].toLowerCase(),g[m+1]=y.substr(1))}else w.changeCase&&(u=w.changeCase);else"U"==u?g[m]=w.toUpperCase():"L"==u&&(g[m]=w.toLowerCase())}return o.variables.__=c,g.join("")});return d},this.tmFormatFunction=function(e,t,r){return"upcase"==t.formatFunction?e.toUpperCase():"downcase"==t.formatFunction?e.toLowerCase():e},this.resolveVariables=function(e,t){for(var r=[],i="",a=!0,l=0;l<e.length;l++){var o=e[l];if("string"!=typeof o){if(o){if(a=!1,o.fmtString){var d=e.indexOf(o,l+1);-1==d&&(d=e.length),o.fmt=e.slice(l+1,d),l=d}if(o.text){var c=this.getVariableValue(t,o.text,i)+"";o.fmtString&&(c=this.tmStrFormat(c,o,t)),o.formatFunction&&(c=this.tmFormatFunction(c,o,t)),c&&!o.ifEnd?(r.push(c),g(o)):!c&&o.ifEnd&&g(o.ifEnd)}else o.elseEnd?g(o.elseEnd):(null!=o.tabstopId||null!=o.changeCase)&&r.push(o)}}else r.push(o),"\n"==o?(a=!0,i=""):a&&(i=/^\t*/.exec(o)[0],a=/\S/.test(o))}function g(u){var m=e.indexOf(u,l+1);-1!=m&&(l=m)}return r},this.insertSnippetForSelection=function(e,t){var r=e.getCursorPosition(),i=e.session.getLine(r.row),a=e.session.getTabString(),l=i.match(/^\s*/)[0];r.column<l.length&&(l=l.slice(0,r.column)),t=t.replace(/\r/g,"");var o=this.tokenizeTmSnippet(t);o=(o=this.resolveVariables(o,e)).map(function(C){return"\n"==C?C+l:"string"==typeof C?C.replace(/\t/g,a):C});var d=[];o.forEach(function(C,O){if("object"==typeof C){var H=C.tabstopId,A=d[H];if(A||((A=d[H]=[]).index=H,A.value="",A.parents={}),-1===A.indexOf(C)){C.choices&&!A.choices&&(A.choices=C.choices),A.push(C);var U=o.indexOf(C,O+1);if(-1!==U){var B=o.slice(O+1,U);B.some(function(J){return"object"==typeof J})&&!A.value?A.value=B:B.length&&(!A.value||"string"!=typeof A.value)&&(A.value=B.join(""))}}}}),d.forEach(function(C){C.length=0});var c={};function g(C){for(var O=[],H=0;H<C.length;H++){var A=C[H];if("object"==typeof A){if(c[A.tabstopId])continue;A=O[C.lastIndexOf(A,H-1)]||{tabstopId:A.tabstopId}}O[H]=A}return O}for(var u=0;u<o.length;u++){var m=o[u];if("object"==typeof m){var w=m.tabstopId,y=d[w],D=o.indexOf(m,u+1);if(c[w]){c[w]===m&&(delete c[w],Object.keys(c).forEach(function(C){y.parents[C]=!0}));continue}c[w]=m;var I=y.value;"string"!=typeof I?I=g(I):m.fmt&&(I=this.tmStrFormat(I,m,e)),o.splice.apply(o,[u+1,Math.max(0,D-u)].concat(I,m)),-1===y.indexOf(m)&&y.push(m)}}var V=0,z=0,W="";o.forEach(function(C){if("string"==typeof C){var O=C.split("\n");O.length>1?(z=O[O.length-1].length,V+=O.length-1):z+=C.length,W+=C}else C&&(C.start?C.end={row:V,column:z}:C.start={row:V,column:z})});var K=e.getSelectionRange(),G=e.session.replace(K,W),Y=new p(e),Z=e.inVirtualSelectionMode&&e.selection.index;Y.addTabstops(d,K.start,G,Z)},this.insertSnippet=function(e,t){var r=this;if(e.inVirtualSelectionMode)return r.insertSnippetForSelection(e,t);e.forEachSelection(function(){r.insertSnippetForSelection(e,t)},null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";if("html"===(t=t.split("/").pop())||"php"===t){"php"===t&&!e.session.$mode.inlinePhp&&(t="html");var r=e.getCursorPosition(),i=e.session.getState(r.row);"object"==typeof i&&(i=i[0]),i.substring&&("js-"==i.substring(0,3)?t="javascript":"css-"==i.substring(0,4)?t="css":"php-"==i.substring(0,4)&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),r=[t],i=this.snippetMap;return i[t]&&i[t].includeScopes&&r.push.apply(r,i[t].includeScopes),r.push("_"),r},this.expandWithTab=function(e,t){var r=this,i=e.forEachSelection(function(){return r.expandSnippetForSelection(e,t)},null,{keepOrder:!0});return i&&e.tabstopManager&&e.tabstopManager.tabNext(),i},this.expandSnippetForSelection=function(e,t){var d,r=e.getCursorPosition(),i=e.session.getLine(r.row),a=i.substring(0,r.column),l=i.substr(r.column),o=this.snippetMap;return this.getActiveScopes(e).some(function(c){var g=o[c];return g&&(d=this.findMatchingSnippet(g,a,l)),!!d},this),!!d&&(t&&t.dryRun||(e.session.doc.removeInLine(r.row,r.column-d.replaceBefore.length,r.column+d.replaceAfter.length),this.variables.M__=d.matchBefore,this.variables.T__=d.matchAfter,this.insertSnippetForSelection(e,d.content),this.variables.M__=this.variables.T__=null),!0)},this.findMatchingSnippet=function(e,t,r){for(var i=e.length;i--;){var a=e[i];if((!a.startRe||a.startRe.test(t))&&(!a.endRe||a.endRe.test(r))&&(a.startRe||a.endRe))return a.matchBefore=a.startRe?a.startRe.exec(t):[""],a.matchAfter=a.endRe?a.endRe.exec(r):[""],a.replaceBefore=a.triggerRe?a.triggerRe.exec(t)[0]:"",a.replaceAfter=a.endTriggerRe?a.endTriggerRe.exec(r)[0]:"",a}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){var r=this.snippetMap,i=this.snippetNameMap,a=this;function l(c){return c&&!/^\^?\(.*\)\$?$|^\\b$/.test(c)&&(c="(?:"+c+")"),c||""}function o(c,g,u){return c=l(c),g=l(g),u?(c=g+c)&&"$"!=c[c.length-1]&&(c+="$"):(c+=g)&&"^"!=c[0]&&(c="^"+c),new RegExp(c)}function d(c){c.scope||(c.scope=t||"_"),t=c.scope,r[t]||(r[t]=[],i[t]={});var g=i[t];if(c.name){var u=g[c.name];u&&a.unregister(u),g[c.name]=c}r[t].push(c),c.prefix&&(c.tabTrigger=c.prefix),!c.content&&c.body&&(c.content=Array.isArray(c.body)?c.body.join("\n"):c.body),c.tabTrigger&&!c.trigger&&(!c.guard&&/^\w/.test(c.tabTrigger)&&(c.guard="\\b"),c.trigger=k.escapeRegExp(c.tabTrigger)),(c.trigger||c.guard||c.endTrigger||c.endGuard)&&(c.startRe=o(c.trigger,c.guard,!0),c.triggerRe=new RegExp(c.trigger),c.endRe=o(c.endTrigger,c.endGuard,!0),c.endTriggerRe=new RegExp(c.endTrigger))}e||(e=[]),Array.isArray(e)?e.forEach(d):Object.keys(e).forEach(function(c){d(e[c])}),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){var r=this.snippetMap,i=this.snippetNameMap;function a(l){var o=i[l.scope||t];if(o&&o[l.name]){delete o[l.name];var d=r[l.scope||t],c=d&&d.indexOf(l);c>=0&&d.splice(c,1)}}e.content?a(e):Array.isArray(e)&&e.forEach(a)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var a,t=[],r={},i=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;a=i.exec(e);){if(a[1])try{r=JSON.parse(a[1]),t.push(r)}catch{}if(a[4])r.content=a[4].replace(/^\t/gm,""),t.push(r),r={};else{var l=a[2],o=a[3];if("regex"==l){var d=/\/((?:[^\/\\]|\\.)*)|$/g;r.guard=d.exec(o)[1],r.trigger=d.exec(o)[1],r.endTrigger=d.exec(o)[1],r.endGuard=d.exec(o)[1]}else"snippet"==l?(r.tabTrigger=o.match(/^\S*/)[0],r.name||(r.name=o)):l&&(r[l]=o)}}return t},this.getSnippetByName=function(e,t){var i,r=this.snippetNameMap;return this.getActiveScopes(t).some(function(a){var l=r[a];return l&&(i=l[e]),!!i},this),i}}).call(f.prototype);var p=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=k.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){for(var t="r"==e.action[0],r=this.selectedTabstop||{},i=r.parents||{},a=(this.tabstops||[]).slice(),l=0;l<a.length;l++){var o=a[l],d=o==r||i[o.index];if(o.rangeList.$bias=d?0:1,"remove"==e.action&&o!==r){var c=o.parents&&o.parents[r.index],g=o.rangeList.pointIndex(e.start,c);g=g<0?-g-1:g+1;var u=o.rangeList.pointIndex(e.end,c);u=u<0?-u-1:u-1;for(var m=o.rangeList.ranges.slice(g,u),w=0;w<m.length;w++)this.removeRange(m[w])}o.rangeList.$onChange(e)}var y=this.editor.session;!this.$inChange&&t&&1==y.getLength()&&!y.getValue()&&this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(e&&e.hasLinkedRanges&&e.firstNonLinked){this.$inChange=!0;for(var t=this.editor.session,r=t.getTextRange(e.firstNonLinked),i=0;i<e.length;i++){var a=e[i];if(a.linked){var l=a.original,o=L.snippetManager.tmStrFormat(r,l,this.editor);t.replace(a,o)}}this.$inChange=!1}},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var e=this.editor.selection.lead,t=this.editor.selection.anchor,r=this.editor.selection.isEmpty(),i=0;i<this.ranges.length;i++)if(!this.ranges[i].linked){var a=this.ranges[i].contains(e.row,e.column),l=r||this.ranges[i].contains(t.row,t.column);if(a&&l)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,r=this.index+(e||1);(r=Math.min(Math.max(r,1),t))==t&&(r=0),this.selectTabstop(r),0===r&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=e,(t=this.tabstops[this.index])&&t.length){this.selectedTabstop=t;var r=t.firstNonLinked||t;if(t.choices&&(r.cursor=r.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(r);else{var i=this.editor.multiSelect;i.toSingleRange(r);for(var a=0;a<t.length;a++)t.hasLinkedRanges&&t[a].linked||i.addRange(t[a].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},this.addTabstops=function(e,t,r){var i=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!e[0]){var a=M.fromPoints(r,r);T(a.start,t),T(a.end,t),e[0]=[a],e[0].index=0}var o=[this.index+1,0],d=this.ranges;e.forEach(function(c,g){for(var u=this.$openTabstops[g]||c,m=0;m<c.length;m++){var w=c[m],y=M.fromPoints(w.start,w.end||w.start);v(y.start,t),v(y.end,t),y.original=w,y.tabstop=u,d.push(y),u!=c?u.unshift(y):u[m]=y,w.fmtString||u.firstNonLinked&&i?(y.linked=!0,u.hasLinkedRanges=!0):u.firstNonLinked||(u.firstNonLinked=y)}u.firstNonLinked||(u.hasLinkedRanges=!1),u===c&&(o.push(u),this.$openTabstops[g]=u),this.addTabstopMarkers(u),u.rangeList=u.rangeList||new x,u.rangeList.$bias=0,u.rangeList.addList(u)},this),o.length>2&&(this.tabstops.length&&o.push(o.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,o))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(r){r.markerId||(r.markerId=t.addMarker(r,"ace_snippet-marker","text"))})},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach(function(r){t.removeMarker(r.markerId),r.markerId=null})},this.removeRange=function(e){var t=e.tabstop.indexOf(e);-1!=t&&e.tabstop.splice(t,1),-1!=(t=this.ranges.indexOf(e))&&this.ranges.splice(t,1),-1!=(t=e.tabstop.rangeList.ranges.indexOf(e))&&e.tabstop.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(-1!=(t=this.tabstops.indexOf(e.tabstop))&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new R,this.keyboardHandler.bindKeys({Tab:function(e){L.snippetManager&&L.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(p.prototype);var v=function(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row},T=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};$.importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}","snippets.css",!1),L.snippetManager=new f;var h=b("./editor").Editor;(function(){this.insertSnippet=function(e,t){return L.snippetManager.insertSnippet(this,e,t)},this.expandSnippet=function(e){return L.snippetManager.expandWithTab(this,e)}}).call(h.prototype)}),ace.define("ace/autocomplete/popup",["require","exports","module","ace/virtual_renderer","ace/editor","ace/range","ace/lib/event","ace/lib/lang","ace/lib/dom"],function(b,L,F){"use strict";var $=b("../virtual_renderer").VirtualRenderer,E=b("../editor").Editor,N=b("../range").Range,k=b("../lib/event"),M=b("../lib/lang"),x=b("../lib/dom"),R=function(S){var s=new $(S);s.$maxLines=4;var n=new E(s);return n.setHighlightActiveLine(!1),n.setShowPrintMargin(!1),n.renderer.setShowGutter(!1),n.renderer.setHighlightGutterLine(!1),n.$mouseHandler.$focusTimeout=0,n.$highlightTagPending=!0,n};x.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}","autocompletion.css",!1),L.AcePopup=function(S){var s=x.createElement("div"),n=new R(s);S&&S.appendChild(s),s.style.display="none",n.renderer.content.style.cursor="default",n.renderer.setStyle("ace_autocomplete"),n.setOption("displayIndentGuides",!1),n.setOption("dragDelay",150);var f=function(){};n.focus=f,n.$isFocused=!0,n.renderer.$cursorLayer.restartTimer=f,n.renderer.$cursorLayer.element.style.opacity=0,n.renderer.$maxLines=8,n.renderer.$keepTextAreaAtCursor=!1,n.setHighlightActiveLine(!1),n.session.highlight(""),n.session.$searchHighlight.clazz="ace_highlight-marker",n.on("mousedown",function(r){var i=r.getDocumentPosition();n.selection.moveToPosition(i),T.start.row=T.end.row=i.row,r.stop()});var p,v=new N(-1,0,-1,1/0),T=new N(-1,0,-1,1/0);T.id=n.session.addMarker(T,"ace_active-line","fullLine"),n.setSelectOnHover=function(r){r?v.id&&(n.session.removeMarker(v.id),v.id=null):v.id=n.session.addMarker(v,"ace_line-hover","fullLine")},n.setSelectOnHover(!1),n.on("mousemove",function(r){if(p){if(p.x!=r.x||p.y!=r.y){(p=r).scrollTop=n.renderer.scrollTop;var i=p.getDocumentPosition().row;v.start.row!=i&&(v.id||n.setRow(i),e(i))}}else p=r}),n.renderer.on("beforeRender",function(){if(p&&-1!=v.start.row){p.$pos=null;var r=p.getDocumentPosition().row;v.id||n.setRow(r),e(r,!0)}}),n.renderer.on("afterRender",function(){var r=n.getRow(),i=n.renderer.$textLayer,a=i.element.childNodes[r-i.config.firstRow];a!==i.selectedNode&&i.selectedNode&&x.removeCssClass(i.selectedNode,"ace_selected"),i.selectedNode=a,a&&x.addCssClass(a,"ace_selected")});var h=function(){e(-1)},e=function(r,i){r!==v.start.row&&(v.start.row=v.end.row=r,i||n.session._emit("changeBackMarker"),n._emit("changeHoverMarker"))};n.getHoveredRow=function(){return v.start.row},k.addListener(n.container,"mouseout",h),n.on("hide",h),n.on("changeSelection",h),n.session.doc.getLength=function(){return n.data.length},n.session.doc.getLine=function(r){var i=n.data[r];return"string"==typeof i?i:i&&i.value||""};var t=n.session.bgTokenizer;return t.$tokenizeRow=function(r){var i=n.data[r],a=[];if(!i)return a;"string"==typeof i&&(i={value:i});var l=i.caption||i.value||i.name;function o(D,I){D&&a.push({type:(i.className||"")+(I||""),value:D})}for(var d=l.toLowerCase(),c=(n.filterText||"").toLowerCase(),g=0,u=0,m=0;m<=c.length;m++)if(m!=u&&(i.matchMask&1<<m||m==c.length)){var w=c.slice(u,m);u=m;var y=d.indexOf(w,g);if(-1==y)continue;o(l.slice(g,y),""),g=y+w.length,o(l.slice(y,g),"completion-highlight")}return o(l.slice(g,l.length),""),i.meta&&a.push({type:"completion-meta",value:i.meta}),i.message&&a.push({type:"completion-message",value:i.message}),a},t.$updateOnChange=f,t.start=f,n.session.$computeWidth=function(){return this.screenWidth=0},n.isOpen=!1,n.isTopdown=!1,n.autoSelect=!0,n.filterText="",n.data=[],n.setData=function(r,i){n.filterText=i||"",n.setValue(M.stringRepeat("\n",r.length),-1),n.data=r||[],n.setRow(0)},n.getData=function(r){return n.data[r]},n.getRow=function(){return T.start.row},n.setRow=function(r){r=Math.max(this.autoSelect?0:-1,Math.min(this.data.length,r)),T.start.row!=r&&(n.selection.clearSelection(),T.start.row=T.end.row=r||0,n.session._emit("changeBackMarker"),n.moveCursorTo(r||0,0),n.isOpen&&n._signal("select"))},n.on("changeSelection",function(){n.isOpen&&n.setRow(n.selection.lead.row),n.renderer.scrollCursorIntoView()}),n.hide=function(){this.container.style.display="none",this._signal("hide"),n.isOpen=!1},n.show=function(r,i,a){var l=this.container,o=window.innerHeight,d=window.innerWidth,c=this.renderer,g=c.$maxLines*i*1.4,u=r.top+this.$borderSize;u>o/2&&!a&&u+i+g>o?(c.$maxPixelHeight=u-2*this.$borderSize,l.style.top="",l.style.bottom=o-u+"px",n.isTopdown=!1):(u+=i,c.$maxPixelHeight=o-u-.2*i,l.style.top=u+"px",l.style.bottom="",n.isTopdown=!0),l.style.display="";var w=r.left;w+l.offsetWidth>d&&(w=d-l.offsetWidth),l.style.left=w+"px",this._signal("show"),p=null,n.isOpen=!0},n.goTo=function(r){var i=this.getRow(),a=this.session.getLength()-1;switch(r){case"up":i=i<=0?a:i-1;break;case"down":i=i>=a?-1:i+1;break;case"start":i=0;break;case"end":i=a}this.setRow(i)},n.getTextLeftOffset=function(){return this.$borderSize+this.renderer.$padding+this.$imageSize},n.$imageSize=0,n.$borderSize=1,n},L.$singleLineEditor=R}),ace.define("ace/autocomplete/util",["require","exports","module"],function(b,L,F){"use strict";L.parForEach=function(E,N,k){var M=0,x=E.length;0===x&&k();for(var R=0;R<x;R++)N(E[R],function(_,S){++M===x&&k(_,S)})};var $=/[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;L.retrievePrecedingIdentifier=function(E,N,k){k=k||$;for(var M=[],x=N-1;x>=0&&k.test(E[x]);x--)M.push(E[x]);return M.reverse().join("")},L.retrieveFollowingIdentifier=function(E,N,k){k=k||$;for(var M=[],x=N;x<E.length&&k.test(E[x]);x++)M.push(E[x]);return M},L.getCompletionPrefix=function(E){var M,N=E.getCursorPosition(),k=E.session.getLine(N.row);return E.completers.forEach(function(x){x.identifierRegexps&&x.identifierRegexps.forEach(function(R){!M&&R&&(M=this.retrievePrecedingIdentifier(k,N.column,R))}.bind(this))}.bind(this)),M||this.retrievePrecedingIdentifier(k,N.column)}}),ace.define("ace/autocomplete",["require","exports","module","ace/keyboard/hash_handler","ace/autocomplete/popup","ace/autocomplete/util","ace/lib/lang","ace/lib/dom","ace/snippets","ace/config"],function(b,L,F){"use strict";var $=b("./keyboard/hash_handler").HashHandler,E=b("./autocomplete/popup").AcePopup,N=b("./autocomplete/util"),k=b("./lib/lang"),M=b("./lib/dom"),x=b("./snippets").snippetManager,R=b("./config"),_=function(){this.autoInsert=!1,this.autoSelect=!0,this.exactMatch=!1,this.gatherCompletionsId=0,this.keyboardHandler=new $,this.keyboardHandler.bindKeys(this.commands),this.blurListener=this.blurListener.bind(this),this.changeListener=this.changeListener.bind(this),this.mousedownListener=this.mousedownListener.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this),this.changeTimer=k.delayedCall(function(){this.updateCompletions(!0)}.bind(this)),this.tooltipTimer=k.delayedCall(this.updateDocTooltip.bind(this),50)};(function(){this.$init=function(){return this.popup=new E(document.body||document.documentElement),this.popup.on("click",function(s){this.insertMatch(),s.stop()}.bind(this)),this.popup.focus=this.editor.focus.bind(this.editor),this.popup.on("show",this.tooltipTimer.bind(null,null)),this.popup.on("select",this.tooltipTimer.bind(null,null)),this.popup.on("changeHoverMarker",this.tooltipTimer.bind(null,null)),this.popup},this.getPopup=function(){return this.popup||this.$init()},this.openPopup=function(s,n,f){this.popup||this.$init(),this.popup.autoSelect=this.autoSelect,this.popup.setData(this.completions.filtered,this.completions.filterText),s.keyBinding.addKeyboardHandler(this.keyboardHandler);var p=s.renderer;if(this.popup.setRow(this.autoSelect?0:-1),f)f&&!n&&this.detach();else{this.popup.setTheme(s.getTheme()),this.popup.setFontSize(s.getFontSize());var v=p.layerConfig.lineHeight,T=p.$cursorLayer.getPixelPosition(this.base,!0);T.left-=this.popup.getTextLeftOffset();var h=s.container.getBoundingClientRect();T.top+=h.top-p.layerConfig.offset,T.left+=h.left-s.renderer.scrollLeft,T.left+=p.gutterWidth,this.popup.show(T,v)}this.changeTimer.cancel()},this.detach=function(){this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.off("changeSelection",this.changeListener),this.editor.off("blur",this.blurListener),this.editor.off("mousedown",this.mousedownListener),this.editor.off("mousewheel",this.mousewheelListener),this.changeTimer.cancel(),this.hideDocTooltip(),this.gatherCompletionsId+=1,this.popup&&this.popup.isOpen&&this.popup.hide(),this.base&&this.base.detach(),this.activated=!1,this.completions=this.base=null},this.changeListener=function(s){var n=this.editor.selection.lead;(n.row!=this.base.row||n.column<this.base.column)&&this.detach(),this.activated?this.changeTimer.schedule():this.detach()},this.blurListener=function(s){var n=document.activeElement,f=this.editor.textInput.getElement(),p=s.relatedTarget&&this.tooltipNode&&this.tooltipNode.contains(s.relatedTarget),v=this.popup&&this.popup.container;n!=f&&n.parentNode!=v&&!p&&n!=this.tooltipNode&&s.relatedTarget!=f&&this.detach()},this.mousedownListener=function(s){this.detach()},this.mousewheelListener=function(s){this.detach()},this.goTo=function(s){this.popup.goTo(s)},this.insertMatch=function(s,n){if(s||(s=this.popup.getData(this.popup.getRow())),!s)return!1;var f=this.completions;if(this.editor.startOperation({command:{name:"insertMatch"}}),s.completer&&s.completer.insertMatch)s.completer.insertMatch(this.editor,s);else{if(f.filterText)for(var T,p=this.editor.selection.getAllRanges(),v=0;T=p[v];v++)T.start.column-=f.filterText.length,this.editor.session.remove(T);s.snippet?x.insertSnippet(this.editor,s.snippet):this.editor.execCommand("insertstring",s.value||s)}this.completions==f&&this.detach(),this.editor.endOperation()},this.commands={Up:function(s){s.completer.goTo("up")},Down:function(s){s.completer.goTo("down")},"Ctrl-Up|Ctrl-Home":function(s){s.completer.goTo("start")},"Ctrl-Down|Ctrl-End":function(s){s.completer.goTo("end")},Esc:function(s){s.completer.detach()},Return:function(s){return s.completer.insertMatch()},"Shift-Return":function(s){s.completer.insertMatch(null,{deleteSuffix:!0})},Tab:function(s){var n=s.completer.insertMatch();if(n||s.tabstopManager)return n;s.completer.goTo("down")},PageUp:function(s){s.completer.popup.gotoPageUp()},PageDown:function(s){s.completer.popup.gotoPageDown()}},this.gatherCompletions=function(s,n){var f=s.getSession(),p=s.getCursorPosition(),v=N.getCompletionPrefix(s);this.base=f.doc.createAnchor(p.row,p.column-v.length),this.base.$insertRight=!0;var T=[],h=s.completers.length;return s.completers.forEach(function(e,t){e.getCompletions(s,f,p,v,function(r,i){!r&&i&&(T=T.concat(i)),n(null,{prefix:N.getCompletionPrefix(s),matches:T,finished:0==--h})})}),!0},this.showPopup=function(s,n){this.editor&&this.detach(),this.activated=!0,this.editor=s,s.completer!=this&&(s.completer&&s.completer.detach(),s.completer=this),s.on("changeSelection",this.changeListener),s.on("blur",this.blurListener),s.on("mousedown",this.mousedownListener),s.on("mousewheel",this.mousewheelListener),this.updateCompletions(!1,n)},this.updateCompletions=function(s,n){if(s&&this.base&&this.completions){var f=this.editor.getCursorPosition(),p=this.editor.session.getTextRange({start:this.base,end:f});if(p==this.completions.filterText)return;return this.completions.setFilter(p),this.completions.filtered.length?1!=this.completions.filtered.length||this.completions.filtered[0].value!=p||this.completions.filtered[0].snippet?void this.openPopup(this.editor,p,s):this.detach():this.detach()}if(n&&n.matches){f=this.editor.getSelectionRange().start;return this.base=this.editor.session.doc.createAnchor(f.row,f.column),this.base.$insertRight=!0,this.completions=new S(n.matches),this.openPopup(this.editor,"",s)}var v=this.gatherCompletionsId,T=function(i){if(i.finished)return this.detach()}.bind(this),h=function(i){var a=i.prefix,l=i.matches;this.completions=new S(l),this.exactMatch&&(this.completions.exactMatch=!0),this.completions.setFilter(a);var o=this.completions.filtered;return!o.length||1==o.length&&o[0].value==a&&!o[0].snippet?T(i):this.autoInsert&&1==o.length&&i.finished?this.insertMatch(o[0]):void this.openPopup(this.editor,a,s)}.bind(this),e=!0,t=null;if(this.gatherCompletions(this.editor,function(i,a){var l=a.prefix,o=a&&a.matches;if(!o||!o.length)return T(a);if(0===l.indexOf(a.prefix)&&v==this.gatherCompletionsId){if(e)return void(t=a);h(a)}}.bind(this)),e=!1,t){var r=t;t=null,h(r)}},this.cancelContextMenu=function(){this.editor.$mouseHandler.cancelContextMenu()},this.updateDocTooltip=function(){var s=this.popup,n=s.data,f=n&&(n[s.getHoveredRow()]||n[s.getRow()]),p=null;return f&&this.editor&&this.popup.isOpen?(this.editor.completers.some(function(v){return v.getDocTooltip&&(p=v.getDocTooltip(f)),p}),!p&&"string"!=typeof f&&(p=f),"string"==typeof p&&(p={docText:p}),p&&(p.docHTML||p.docText)?void this.showDocTooltip(p):this.hideDocTooltip()):this.hideDocTooltip()},this.showDocTooltip=function(s){this.tooltipNode||(this.tooltipNode=M.createElement("div"),this.tooltipNode.className="ace_tooltip ace_doc-tooltip",this.tooltipNode.style.margin=0,this.tooltipNode.style.pointerEvents="auto",this.tooltipNode.tabIndex=-1,this.tooltipNode.onblur=this.blurListener.bind(this),this.tooltipNode.onclick=this.onTooltipClick.bind(this));var n=this.tooltipNode;s.docHTML?n.innerHTML=s.docHTML:s.docText&&(n.textContent=s.docText),n.parentNode||document.body.appendChild(n);var f=this.popup,p=f.container.getBoundingClientRect();n.style.top=f.container.style.top,n.style.bottom=f.container.style.bottom,n.style.display="block",window.innerWidth-p.right<320?p.left<320?f.isTopdown?(n.style.top=p.bottom+"px",n.style.left=p.left+"px",n.style.right="",n.style.bottom=""):(n.style.top=f.container.offsetTop-n.offsetHeight+"px",n.style.left=p.left+"px",n.style.right="",n.style.bottom=""):(n.style.right=window.innerWidth-p.left+"px",n.style.left=""):(n.style.left=p.right+1+"px",n.style.right="")},this.hideDocTooltip=function(){if(this.tooltipTimer.cancel(),this.tooltipNode){var s=this.tooltipNode;!this.editor.isFocused()&&document.activeElement==s&&this.editor.focus(),this.tooltipNode=null,s.parentNode&&s.parentNode.removeChild(s)}},this.onTooltipClick=function(s){for(var n=s.target;n&&n!=this.tooltipNode;){if("A"==n.nodeName&&n.href){n.rel="noreferrer",n.target="_blank";break}n=n.parentNode}},this.destroy=function(){if(this.detach(),this.popup){this.popup.destroy();var s=this.popup.container;s&&s.parentNode&&s.parentNode.removeChild(s)}this.editor&&this.editor.completer==this&&this.editor.completer,this.popup=null}}).call(_.prototype),_.for=function(s){return s.completer||(R.get("sharedPopups")?(_.$shared||(_.$sharedInstance=new _),s.completer=_.$sharedInstance):(s.completer=new _,s.once("destroy",function(n,f){f.completer.destroy()}))),s.completer},_.startCommand={name:"startAutocomplete",exec:function(s,n){var f=_.for(s);f.autoInsert=!1,f.autoSelect=!0,f.showPopup(s,n),f.cancelContextMenu()},bindKey:"Ctrl-Space|Ctrl-Shift-Space|Alt-Space"};var S=function(s,n){this.all=s,this.filtered=s,this.filterText=n||"",this.exactMatch=!1};(function(){this.setFilter=function(s){if(s.length>this.filterText&&0===s.lastIndexOf(this.filterText,0))var n=this.filtered;else n=this.all;this.filterText=s,n=(n=this.filterCompletions(n,this.filterText)).sort(function(p,v){return v.exactMatch-p.exactMatch||v.$score-p.$score||(p.caption||p.value).localeCompare(v.caption||v.value)});var f=null;n=n.filter(function(p){var v=p.snippet||p.caption||p.value;return v!==f&&(f=v,!0)}),this.filtered=n},this.filterCompletions=function(s,n){var f=[],p=n.toUpperCase(),v=n.toLowerCase();e:for(var h,T=0;h=s[T];T++){var e=h.caption||h.value||h.snippet;if(e){var a,l,t=-1,r=0,i=0;if(this.exactMatch){if(n!==e.substr(0,n.length))continue e}else{var o=e.toLowerCase().indexOf(v);if(o>-1)i=o;else for(var d=0;d<n.length;d++){var c=e.indexOf(v[d],t+1),g=e.indexOf(p[d],t+1);if((a=c>=0&&(g<0||c<g)?c:g)<0)continue e;(l=a-t-1)>0&&(-1===t&&(i+=10),i+=l,r|=1<<d),t=a}}h.matchMask=r,h.exactMatch=i?0:1,h.$score=(h.score||0)-i,f.push(h)}}return f}}).call(S.prototype),L.Autocomplete=_,L.FilteredList=S}),ace.define("ace/autocomplete/text_completer",["require","exports","module","ace/range"],function(b,L,F){var $=b("../range").Range,E=/[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;function k(M,x){var R=function N(M,x){return M.getTextRange($.fromPoints({row:0,column:0},x)).split(E).length-1}(M,x),_=M.getValue().split(E),S=Object.create(null),s=_[R];return _.forEach(function(n,f){if(n&&n!==s){var p=Math.abs(R-f),v=_.length-p;S[n]?S[n]=Math.max(v,S[n]):S[n]=v}}),S}L.getCompletions=function(M,x,R,_,S){var s=k(x,R);S(null,Object.keys(s).map(function(f){return{caption:f,value:f,score:s[f],meta:"local"}}))}}),ace.define("ace/ext/language_tools",["require","exports","module","ace/snippets","ace/autocomplete","ace/config","ace/lib/lang","ace/autocomplete/util","ace/autocomplete/text_completer","ace/editor","ace/config"],function(b,L,F){"use strict";var $=b("../snippets").snippetManager,E=b("../autocomplete").Autocomplete,N=b("../config"),k=b("../lib/lang"),M=b("../autocomplete/util"),x=b("../autocomplete/text_completer"),R={getCompletions:function(h,e,t,r,i){if(e.$mode.completer)return e.$mode.completer.getCompletions(h,e,t,r,i);var a=h.session.getState(t.row);i(null,e.$mode.getCompletions(a,e,t,r))}},_={getCompletions:function(h,e,t,r,i){var a=[],l=e.getTokenAt(t.row,t.column);l&&l.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/)?a.push("html-tag"):a=$.getActiveScopes(h);var o=$.snippetMap,d=[];a.forEach(function(c){for(var g=o[c]||[],u=g.length;u--;){var m=g[u],w=m.name||m.tabTrigger;w&&d.push({caption:w,snippet:m.content,meta:m.tabTrigger&&!m.name?m.tabTrigger+"\u21e5 ":"snippet",type:"snippet"})}},this),i(null,d)},getDocTooltip:function(h){"snippet"==h.type&&!h.docHTML&&(h.docHTML=["<b>",k.escapeHTML(h.caption),"</b>","<hr></hr>",k.escapeHTML(h.snippet)].join(""))}},S=[_,x,R];L.setCompleters=function(h){S.length=0,h&&S.push.apply(S,h)},L.addCompleter=function(h){S.push(h)},L.textCompleter=x,L.keyWordCompleter=R,L.snippetCompleter=_;var s={name:"expandSnippet",exec:function(h){return $.expandWithTab(h)},bindKey:"Tab"},n=function(h,e){f(e.session.$mode)},f=function(h){"string"==typeof h&&(h=N.$modes[h]),h&&($.files||($.files={}),p(h.$id,h.snippetFileId),h.modes&&h.modes.forEach(f))},p=function(h,e){!e||!h||$.files[h]||($.files[h]={},N.loadModule(e,function(t){t&&($.files[h]=t,!t.snippets&&t.snippetText&&(t.snippets=$.parseSnippetFile(t.snippetText)),$.register(t.snippets||[],t.scope),t.includeScopes&&($.snippetMap[t.scope].includeScopes=t.includeScopes,t.includeScopes.forEach(function(r){f("ace/mode/"+r)})))}))},v=function(h){var e=h.editor,t=e.completer&&e.completer.activated;if("backspace"===h.command.name)t&&!M.getCompletionPrefix(e)&&e.completer.detach();else if("insertstring"===h.command.name){if(M.getCompletionPrefix(e)&&!t){var i=E.for(e);i.autoInsert=!1,i.showPopup(e)}}},T=b("../editor").Editor;b("../config").defineOptions(T.prototype,"editor",{enableBasicAutocompletion:{set:function(h){h?(this.completers||(this.completers=Array.isArray(h)?h:S),this.commands.addCommand(E.startCommand)):this.commands.removeCommand(E.startCommand)},value:!1},enableLiveAutocompletion:{set:function(h){h?(this.completers||(this.completers=Array.isArray(h)?h:S),this.commands.on("afterExec",v)):this.commands.removeListener("afterExec",v)},value:!1},enableSnippets:{set:function(h){h?(this.commands.addCommand(s),this.on("changeMode",n),n(0,this)):(this.commands.removeCommand(s),this.off("changeMode",n))},value:!1}})}),ace.require(["ace/ext/language_tools"],function(b){P&&(P.exports=b)})}}]);