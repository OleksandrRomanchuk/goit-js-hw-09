!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("8nrFW"),i=r("h6c0i");function a(e,t){var n=Math.random()>.5;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}var c={task01:{launchBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),documentBody:document.body},task02:{datetimeEl:document.querySelector('input[id="datetime-picker"]'),startBtn:document.querySelector("button[data-start]"),outptuElements:document.querySelectorAll(".value"),timerEl:document.querySelector(".timer")},task03:{form:document.querySelector(".form")}}.task03.form;function l(e){var t=e.position,n=e.delay;i.Notify.success("Fulfilled promise ".concat(t," in ").concat(n,"ms"))}function d(e){var t=e.position,n=e.delay;i.Notify.failure("Rejected promise ".concat(t," in ").concat(n,"ms"))}e(u)(c.elements).forEach((function(e){var t=e.name;t&&("amount"===t?c.elements[t].setAttribute("min",1):c.elements[t].setAttribute("min",0))})),c.addEventListener("submit",(function(t){t.preventDefault();for(var n=function(t){return e(u)(t).reduce((function(e,n){var o=n.name;return o&&(e[o]=Number(t.elements[o].value)),e}),{})}(c),o=n.delay,r=n.step,i=n.amount,s=1;s<=i;s+=1)a(s,o).then(l).catch(d).finally(),o+=r}))}();
//# sourceMappingURL=03-promises.2162676e.js.map