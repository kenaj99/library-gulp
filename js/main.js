!function(n){var e={};function r(c){if(e[c])return e[c].exports;var t=e[c]={i:c,l:!1,exports:{}};return n[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=e,r.d=function(n,e,c){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(c,t,function(e){return n[e]}.bind(null,t));return c},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconsole.log('Witaj przybyszu!!!');\r\n\r\nconst about = document.querySelector('.main__wrapper--js');\r\nconsole.log(about);\r\nabout.innerHTML = 'Witam na mojej stronie :D';\r\n\r\nconst welcome = (name, age) => {\r\n    console.log(`Witaj ${name}, masz ${age} lat.`);\r\n}\r\n\r\n// XDD welcome('Janek', 20);\r\n\r\nconst myAge = 20;\r\nconst myName = 'Janek';\r\n\r\nwelcome(myName, myAge);\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLEtBQUssU0FBUyxJQUFJO0FBQzNDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcbmNvbnNvbGUubG9nKCdXaXRhaiBwcnp5YnlzenUhISEnKTtcclxuXHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3dyYXBwZXItLWpzJyk7XHJcbmNvbnNvbGUubG9nKGFib3V0KTtcclxuYWJvdXQuaW5uZXJIVE1MID0gJ1dpdGFtIG5hIG1vamVqIHN0cm9uaWUgOkQnO1xyXG5cclxuY29uc3Qgd2VsY29tZSA9IChuYW1lLCBhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBXaXRhaiAke25hbWV9LCBtYXN6ICR7YWdlfSBsYXQuYCk7XHJcbn1cclxuXHJcbi8vIFhERCB3ZWxjb21lKCdKYW5laycsIDIwKTtcclxuXHJcbmNvbnN0IG15QWdlID0gMjA7XHJcbmNvbnN0IG15TmFtZSA9ICdKYW5layc7XHJcblxyXG53ZWxjb21lKG15TmFtZSwgbXlBZ2UpO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);