!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(){o=setInterval((function(){n.style="background-color: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.1960aca3.js.map