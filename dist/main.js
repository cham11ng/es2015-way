!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=t(1),u=r(o),i=t(2),a=r(i);new u.default(["Go to the store","Finish screencast","Buy a ticket"]).dump();var l=a.default.register("Sagar","Chamling");l.email="sagar@unknown.com",l.email="sgr.raee@gmail.com",console.dir(l),console.log(l.fullName),console.log(l.allEmails)},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,e),this.tasks=n}return o(e,[{key:"log",value:function(){this.tasks.forEach(function(e){return console.log(e)})}},{key:"dump",value:function(){console.log(this.tasks)}}]),e}();n.default=u},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=function(){function e(n,t){r(this,e),this.firstName=n,this.surName=t,this.emails=[]}return o(e,[{key:"fullName",get:function(){return this.firstName+" "+this.surName}},{key:"email",set:function(e){this.emails.push(e)}},{key:"allEmails",get:function(){return this.emails.join(", ")}}],[{key:"register",value:function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return new(Function.prototype.bind.apply(e,[null].concat(t)))}}]),e}();n.default=u}]);