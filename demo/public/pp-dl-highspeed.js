!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(6);var o=n(1).errcode,r=function(){var e={};return e.downloadFast=function(e,t){if(t="function"==typeof t?t:function(){},"object"!=typeof e)return t(o.PARAM,{msg:'param "config" required'});if(!e.channel)return t(o.PARAM,{msg:"缺少参数: channel（该参数请向PP助手申请）"});if(!e.ch_src)return t(o.PARAM,{msg:"缺少参数: ch_src（该参数请向PP助手申请）"});if(!e.mode&&!e.packageName&&!e.appId)return t(o.PARAM,{msg:"mode=0或者不传时，packageName或者appId必填一个"});if(1==e.mode&&!e.durl)return t(o.PARAM,{msg:"mode=1时，durl必填"});var n=Object.assign({channel:null,ch_src:null,ch:null,packageName:null,appId:null,durl:null,bs:0,mode:0,server:"http://server.m.pp.cn",debug:!1},e);1==n.mode&&(n.packageName=null,n.appId=null),$.ajax({type:"get",url:n.server+"/download/url/new",dataType:"json",data:{channel:n.channel,ch_src:n.ch_src,packageName:n.packageName,appId:n.appId,durl:n.durl,bs:n.bs,ch:n.ch},xhrFields:{withCredentials:!0},success:function(e){e&&e.state&&2e6===e.state.code&&e.data&&e.data.downloadUrl?1==n.mode?e.data.durlKey?(!!n.debug&&console.log("尝试呼起PP助手进行高速下载(加密方式)"),Pcae.Wapi.doSomething(e.data.durlKey,function(r){r?(!!n.debug&&console.log("成功呼起PP助手进行高速下载"),t(o.OK,{msg:"成功呼起PP助手进行高速下载"})):(!!n.debug&&console.log("呼起PP助手进行高速下载失败（可能PP没安装 或者 PP已安装但没进程在跑），将直接下载PP助手/目标应用"),t(o.OK,{msg:"呼起PP助手进行高速下载失败，将直接下载PP助手/目标应用"}),window.location.href=e.data.downloadUrl)})):(!!n.debug&&console.log("服务器返回durlKey错误，将直接下载PP助手/目标应用"),t(o.OK,{msg:"服务器返回durlKey错误，将直接下载PP助手/目标应用"}),window.location.href=e.data.downloadUrl):e.data.appId?(!!n.debug&&console.log("尝试呼起PP助手进行高速下载(appId)"),Pcae.Wapi.downloadFast(e.data.appId,function(r){r?(!!n.debug&&console.log("成功呼起PP助手进行高速下载"),t(o.OK,{msg:"成功呼起PP助手进行高速下载"})):(!!n.debug&&console.log("呼起PP助手进行高速下载失败（可能PP没安装 或者 PP已安装但没进程在跑），将直接下载PP助手/目标应用"),t(o.OK,{msg:"呼起PP助手进行高速下载失败，将直接下载PP助手/目标应用"}),window.location.href=e.data.downloadUrl)})):(!!n.debug&&console.log("服务器返回appId错误，将直接下载PP助手/目标应用"),t(o.OK,{msg:"服务器返回appId错误，将直接下载PP助手/目标应用"}),window.location.href=e.data.downloadUrl):(!!n.debug&&console.log("PP服务器返回出错，或者PP资源库查无此应用"),t(o.INTERNAL_ERROR,{msg:"PP服务器返回出错，或者PP资源库查无此应用"}))},error:function(){!!n.debug&&console.log("网络请求失败"),t(o.NETWORK_ERROR,{msg:"网络请求失败"})}})},e}();window.Pdlh=r,e.exports=r},function(e,t){"use strict";e.exports={errcode:{OK:0,PARAM:1,INTERNAL_ERROR:2,NETWORK_ERROR:3,UNKNOWED:100}}},,,function(e,t){"use strict";function n(e){return null!==e&&("object"==typeof e||"function"==typeof e)}function o(e){if(null===e||void 0===e)throw new TypeError("Cannot convert undefined or null to object");return Object(e)}function r(e,t,o){var r=t[o];void 0!==r&&null!==r&&(u.call(e,o)&&n(r)?e[o]=c(Object(e[o]),t[o]):e[o]=r)}function c(e,t){if(e===t)return e;t=Object(t);for(var n in t)u.call(t,n)&&r(e,t,n);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(t),c=0;c<o.length;c++)i.call(t,o[c])&&r(e,t,o[c]);return e}function a(e){e=o(e);for(var t=1;t<arguments.length;t++)c(e,arguments[t]);return e}var u=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;"function"!=typeof Object.assign&&(Object.assign=c),Object.deepAssign=a},function(e,t){"use strict";var n={};window.Pcae=n,void 0===window.pcae&&(window.pcae=n),e.exports=n},function(e,t,n){"use strict";var o=n(7),r=n(5);"function"==typeof $&&$.ajax&&(o=$);var c=function(){function e(t,n){try{o.ajax({type:"get",contentType:"text/plain",data:{},timeout:u,url:r(t),success:function(){n(!0)},error:function(){48333===t?e(48433,n):n(!1)}})}catch(c){console.error("e:"+c),n(!1)}}function t(e,n,c){try{o.ajax({type:"post",contentType:"text/plain",data:JSON.stringify({type:1,id:n}),timeout:u,url:r(e),success:function(){c(!0)},error:function(){48333===e?t(48433,n,c):c(!1)}})}catch(a){console.error("e:"+a),c(!1)}}function n(e,t,c){try{o.ajax({type:"post",contentType:"text/plain",data:JSON.stringify({type:6,info:t}),timeout:u,url:r(e),success:function(){c(!0)},error:function(){48333===e?n(48433,t,c):c(!1)}})}catch(a){console.error("e:"+a),c(!1)}}function r(e){return"http://127.0.0.1:"+e}var c={},a=48333,u=200;return c.checkPP=function(t){e(a,t)},c.downloadFast=function(e,n){t(a,e,n)},c.doSomething=function(e,t){n(a,e,t)},c}();r.Wapi=c,e.exports=r},function(e,t,n){"use strict";n(4),e.exports=function(){function e(){if(!(!window.XMLHttpRequest||window.location&&"file:"===window.location.protocol&&window.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Could not find XHR")}function t(e){if("string"==typeof e)return e;var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join("&")}var n={};return n.ajax=function(n){var o=Object.assign({url:"",type:"GET",header:{},contentType:"application/x-www-form-urlencoded",async:!0,data:{}},n),r=e();r.open(o.type.toUpperCase(),o.url,o.async);var c=o.header||{};c["Content-Type"]=o.contentType;for(var a in c)r.setRequestHeader(a,c[a]);r.onreadystatechange=function(){if(4===r.readyState){if(r.status>=200&&r.status<300||304===r.status){var e=o.success;"function"==typeof e&&e(r)}else{var t=o.error;"function"==typeof t&&t(r)}var n=o.complete;"function"==typeof n&&n(r)}},r.send(t(o.data)||null)},n}()}]);