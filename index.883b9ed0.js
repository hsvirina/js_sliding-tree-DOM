function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}var e,t=document.querySelector(".tree");((function(e){if(Array.isArray(e))return r(e)})(e=document.querySelectorAll("li"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(r){var e=document.createElement("span");r.prepend(e),e.append(e.nextSibling)}),t.addEventListener("click",function(r){var e=r.target.parentNode.querySelector("ul");e&&(e.hidden=!e.hidden)});
//# sourceMappingURL=index.883b9ed0.js.map
