!function(e){if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof module&&void 0!==module.exports){var t=e();Object.defineProperty(exports,"__esModule",{value:!0}),exports.autocomplete=t,exports.default=t}else window.autocomplete=e()}(function(){"use strict";function e(e){function t(){return"none"!==m.display}function n(){y++,g=[],p=void 0,m.display="none"}function o(){for(;v.firstChild;)v.removeChild(v.firstChild);var t=!1,o="#9?$";g.forEach(function(e){e.group&&(t=!0)});var i=function(e){var t=c.createElement("div");return t.textContent=e.label,t};e.render&&(i=e.render);var l=function(e){var t=c.createElement("div");return t.textContent=e,t};if(e.renderGroup&&(l=e.renderGroup),g.forEach(function(t){if(t.group&&t.group!==o){o=t.group;var r=l(t.group);r&&(r.className+=" group",v.appendChild(r))}var a=i(t);a&&(a.addEventListener("click",function(o){e.onSelect(t.item,u),n(),o.preventDefault(),o.stopPropagation()}),t===p&&(a.className+=" selected"),v.appendChild(a))}),g.length<1){if(!e.emptyMsg)return void n();var a=c.createElement("div");a.className="empty",a.textContent=e.emptyMsg,v.appendChild(a)}var f=u.getBoundingClientRect(),d=f.top+u.offsetHeight+c.body.scrollTop;m.top=d+"px",m.left=f.left+"px",m.width=u.offsetWidth+"px",m.maxHeight=window.innerHeight-(f.top+u.offsetHeight)+"px",m.height="auto",m.display="block",r()}function i(i){var r=i.which||i.keyCode||0,l=++y;38!==r&&13!==r&&27!==r&&39!==r&&37!==r&&((new Date).getTime()-h<350||40===r&&t()||(u.value.length>=E?e.fetch(u.value,function(e){y===l&&e&&(g=e,p=g.length>0?g[0]:void 0,o())}):n()))}function r(){var e=v.getElementsByClassName("selected");if(e.length>0){var t=e[0],n=t.previousElementSibling;if(n&&-1!==n.className.indexOf("group")&&!n.previousElementSibling&&(t=n),t.offsetTop<v.scrollTop)v.scrollTop=t.offsetTop;else{var o=t.offsetTop+t.offsetHeight,i=v.scrollTop+v.offsetHeight;o>i&&(v.scrollTop+=o-i)}}}function l(){if(g.length<1)p=void 0;else if(p===g[0])p=g[g.length-1];else for(var e=g.length-1;e>0;e--)if(p===g[e]||1===e){p=g[e-1];break}}function a(){if(g.length<1&&(p=void 0),!p||p===g[g.length-1])return void(p=g[0]);for(var e=0;e<g.length-1;e++)if(p===g[e]){p=g[e+1];break}}function f(i){var r=i.which||i.keyCode||0;if(38===r||40===r||27===r){var f=t();if(27===r)n();else{if(!t||g.length<1)return;38===r?l():a(),o()}return i.preventDefault(),void(f&&i.stopPropagation())}13===r&&p&&(e.onSelect(p.item,u),n())}function d(){setTimeout(function(){c.activeElement!==u&&n()},200)}function s(){u.removeEventListener("keydown",f),u.removeEventListener("keyup",i),u.removeEventListener("focus",i),u.removeEventListener("blur",d),window.removeEventListener("resize",o),n();var e=v.parentNode;e&&e.removeChild(v)}var u,p,c=document,v=c.createElement("div"),m=v.style,h=(new Date).getTime(),g=[],E=e.minLength||2,y=0;if(!e.input)throw new Error("input undefined");return u=e.input,c.body.appendChild(v),v.className="autocomplete "+(e.className||""),m.position="absolute",m.display="none",u.addEventListener("keydown",f),u.addEventListener("keyup",i),u.addEventListener("focus",i),u.addEventListener("blur",d),window.addEventListener("resize",o),{destroy:s}}return e});