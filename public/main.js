(()=>{"use strict";var e={283:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modelHeaderSelector=t.helps=void 0,t.helps=[{text:"Help you explore options for financial aid for which you may qualify."},{text:"Highlight the program selection and scheduling options available to you."},{text:"Help plan how long your education will take to complete based on your specific situation."},{text:"Help you see how the chosen program will fit into your schedule."}],t.modelHeaderSelector="div.modal-header"},891:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.TestInfo=void 0,(n=t.TestInfo||(t.TestInfo={})).ID="BL028",n.SITE="fortis",n.CLIENT="brainlab",n.VARIATION="1"},753:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ContactComponent=void 0;var o=n(283),i=n(891),r=n(29);t.ContactComponent=function(){this.render=function(){return'<div class="'.concat(i.TestInfo.ID,'__contact-container" >\n      <div class="headline" >\n        <h5>When we contact you we\'ll:</h5>\n      </div>  \n      <div class="text-content" >\n        <ul>\n          ').concat(o.helps.map((function(e){return r.LiComponent.render(e.text)})).join("\n"),"\n        </ul>\n      </div>\n    </div>").trim()}}},29:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LiComponent=void 0;var n=function(){function e(){}return e.render=function(e){return"<li>".concat(e,"</li>").trim()},e}();t.LiComponent=n},368:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainComponent=void 0;var o=n(951),i=n(283),r=n(891),l=n(753);t.MainComponent=function(){this.init=function(){var e;o.Initializer.init(r.TestInfo,"0.0.1");var t=document.querySelector(i.modelHeaderSelector+">p");t&&t.textContent&&(t.textContent=t.textContent.toUpperCase().toString());var n=new l.ContactComponent;null===(e=document.querySelector(i.modelHeaderSelector))||void 0===e||e.insertAdjacentHTML("afterend",n.render())}}},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Initializer=void 0;var n=function(){function e(){}return e.init=function(e,t){document.documentElement.classList.add(e.ID),document.documentElement.classList.add("".concat(e.ID,"-").concat(e.VARIATION)),console.info("ID: ".concat(e.ID,", VARIATION: ").concat(e.VARIATION,", VERSION: ").concat(t," is running.....!"))},e}();t.Initializer=n},454:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Poller=void 0;var o=n(704);t.Poller=function(){var e=this;this.options=null,this.timeout=null,this.successfulConditions=[],this.callback=function(){},this.conditionsLength=0,this.poll=function(t,n,i){e.callback=n,e.options=new o.UserOptions,e.conditionsLength=t.length,i&&(e.options=i),e.timeout=e.options.timeout?new Date(e.getNow()+e.options.timeout).getTime():null;for(var r=0;r<t.length;r++)e.pollForCondition(t[r],e.options.wait,!0,e.options.multiplier)},this.getNow=function(){return(new Date).getTime()},this.isTimeOut=function(){return!!(e.timeout&&e.getNow()>e.timeout)},this.evaluateCondition=function(e){return!!e&&("function"==typeof e?e():!("string"!=typeof e||!document.querySelector(e)))},this.isAllConditionPassed=function(){return e.conditionsLength===e.successfulConditions.length},this.pollForCondition=function(t,n,o,i){if(e.timeout&&e.isTimeOut())return!1;var r=e.evaluateCondition(t);return r?(e.successfulConditions.push(r),e.isAllConditionPassed()&&e.callback(e.successfulConditions)):setTimeout((function(){e.pollForCondition(t,n*i,o,i)}),o?0:n),!0}}},704:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserOptions=void 0;t.UserOptions=function(){this.wait=50,this.multiplier=1.1,this.timeout=0}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{var e=n(454),t=n(283),o=n(368);if(!/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)){var i=new o.MainComponent;(new e.Poller).poll(["body",t.modelHeaderSelector],i.init)}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ0FFLEVBQ0FDLEVBQ0FOLEdBRUEsR0FBSSxFQUFLZixTQUFXLEVBQUtnQixZQUN2QixPQUFPLEVBR1QsSUFBTU0sRUFBUyxFQUFLTCxrQkFBa0JDLEdBc0J0QyxPQXBCSUksR0FDRixFQUFLckIscUJBQXFCc0IsS0FBS0QsR0FFM0IsRUFBS0gsd0JBQ1AsRUFBS2pCLFNBQVMsRUFBS0QsdUJBR3JCdUIsWUFDRSxXQUNFLEVBQUtYLGlCQUNISyxFQUNBRSxFQUFXTCxFQUNYTSxFQUNBTixFQUVKLEdBQ0FNLEVBQVcsRUFBSUQsSUFJWixDQUNULENBQ0YsQyxvRkNyR2EsRUFBQWIsWUFBYixXQUNFLEtBQUFPLEtBQWUsR0FDZixLQUFBQyxXQUFxQixJQUNyQixLQUFBZixRQUFrQixDQUNwQixDLEdDSEl5QixFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQyxNQ3RCQSxhQUNBLFNBQ0EsU0FNQSxJQUppQiw0Q0FBNENHLEtBQzNEQyxPQUFPQyxVQUFVQyxXQUdKLENBQ2IsSUFBTUMsRUFBTyxJQUFJLEVBQUExRCxlQUNGLElBQUksRUFBQW1CLFFBQ1pNLEtBQUssQ0FBQyxPQUFRLEVBQUFuQyxxQkFBc0JvRSxFQUFLekQsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvZm9ydGlzL0JMMDI4L2NvbW1vbi9hc3NldC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2ZvcnRpcy9CTDAyOC9jb21tb24vdGVzdC5pbmZvLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvZm9ydGlzL0JMMDI4L2NvbXBvbmVudHMvY29udGFjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9icmFpbmxhYi9mb3J0aXMvQkwwMjgvY29tcG9uZW50cy9saS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9icmFpbmxhYi9mb3J0aXMvQkwwMjgvY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL3BvbGxlci50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvdXNlci5vcHRpb25zLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvZm9ydGlzL0JMMDI4L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoZWxwcyA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiBcIkhlbHAgeW91IGV4cGxvcmUgb3B0aW9ucyBmb3IgZmluYW5jaWFsIGFpZCBmb3Igd2hpY2ggeW91IG1heSBxdWFsaWZ5LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJIaWdobGlnaHQgdGhlIHByb2dyYW0gc2VsZWN0aW9uIGFuZCBzY2hlZHVsaW5nIG9wdGlvbnMgYXZhaWxhYmxlIHRvIHlvdS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiSGVscCBwbGFuIGhvdyBsb25nIHlvdXIgZWR1Y2F0aW9uIHdpbGwgdGFrZSB0byBjb21wbGV0ZSBiYXNlZCBvbiB5b3VyIHNwZWNpZmljIHNpdHVhdGlvbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiSGVscCB5b3Ugc2VlIGhvdyB0aGUgY2hvc2VuIHByb2dyYW0gd2lsbCBmaXQgaW50byB5b3VyIHNjaGVkdWxlLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbW9kZWxIZWFkZXJTZWxlY3RvciA9IFwiZGl2Lm1vZGFsLWhlYWRlclwiO1xyXG4iLCJleHBvcnQgZW51bSBUZXN0SW5mbyB7SUQgPSAnQkwwMjgnLCBTSVRFID0gJ2ZvcnRpcycsIENMSUVOVCA9ICdicmFpbmxhYicsIFZBUklBVElPTiA9ICcxJ31cbiAgICAiLCJpbXBvcnQgeyBoZWxwcyB9IGZyb20gXCIuLi9jb21tb24vYXNzZXRcIjtcclxuaW1wb3J0IHsgVGVzdEluZm8gfSBmcm9tIFwiLi4vY29tbW9uL3Rlc3QuaW5mb1wiO1xyXG5pbXBvcnQgeyBMaUNvbXBvbmVudCB9IGZyb20gXCIuL2xpLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xyXG4gIHJlbmRlciA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgaHRtbFN0ciA9IGA8ZGl2IGNsYXNzPVwiJHtUZXN0SW5mby5JRH1fX2NvbnRhY3QtY29udGFpbmVyXCIgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIiA+XHJcbiAgICAgICAgPGg1PldoZW4gd2UgY29udGFjdCB5b3Ugd2UnbGw6PC9oNT5cclxuICAgICAgPC9kaXY+ICBcclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGVudFwiID5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAke2hlbHBzLm1hcCgoaGVscCkgPT4gTGlDb21wb25lbnQucmVuZGVyKGhlbHAudGV4dCkpLmpvaW4oXCJcXG5cIil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgcmV0dXJuIGh0bWxTdHIudHJpbSgpO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIExpQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcmVuZGVyID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBodG1sU3RyID0gYDxsaT4ke3RleHR9PC9saT5gO1xyXG4gICAgcmV0dXJuIGh0bWxTdHIudHJpbSgpO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5pdGlhbGl6ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2luaXRpYWxpemVyXCI7XHJcbmltcG9ydCB7IG1vZGVsSGVhZGVyU2VsZWN0b3IgfSBmcm9tIFwiLi4vY29tbW9uL2Fzc2V0XCI7XHJcbmltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4uL2NvbW1vbi90ZXN0LmluZm9cIjtcclxuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRhY3QuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XHJcbiAgaW5pdCA9ICgpOiB2b2lkID0+IHtcclxuICAgIEluaXRpYWxpemVyLmluaXQoVGVzdEluZm8sIFwiMC4wLjFcIik7XHJcblxyXG4gICAgbGV0IG1vZGVsSGVhZGVyRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RlbEhlYWRlclNlbGVjdG9yICsgXCI+cFwiKTtcclxuICAgIGlmIChtb2RlbEhlYWRlckVsbSAmJiBtb2RlbEhlYWRlckVsbS50ZXh0Q29udGVudCkge1xyXG4gICAgICBtb2RlbEhlYWRlckVsbS50ZXh0Q29udGVudCA9IG1vZGVsSGVhZGVyRWxtLnRleHRDb250ZW50XHJcbiAgICAgICAgLnRvVXBwZXJDYXNlKClcclxuICAgICAgICAudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29tcG9uZW50ID0gbmV3IENvbnRhY3RDb21wb25lbnQoKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKG1vZGVsSGVhZGVyU2VsZWN0b3IpXHJcbiAgICAgID8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgY29udGFjdENvbXBvbmVudC5yZW5kZXIoKSk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXIge1xyXG4gIHN0YXRpYyBpbml0ID0gKFxyXG4gICAgdGVzdEluZm86IHtcclxuICAgICAgSUQ6IHN0cmluZztcclxuICAgICAgU0lURTogc3RyaW5nO1xyXG4gICAgICBDTElFTlQ6IHN0cmluZztcclxuICAgICAgVkFSSUFUSU9OOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgKTogdm9pZCA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXN0SW5mby5JRCk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgYCR7dGVzdEluZm8uSUR9LSR7dGVzdEluZm8uVkFSSUFUSU9OfWBcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBJRDogJHt0ZXN0SW5mby5JRH0sIFZBUklBVElPTjogJHt0ZXN0SW5mby5WQVJJQVRJT059LCBWRVJTSU9OOiAke3ZlcnNpb259IGlzIHJ1bm5pbmcuLi4uLiFgXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlck9wdGlvbnMgfSBmcm9tIFwiLi91c2VyLm9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2xsZXIge1xyXG4gIHByaXZhdGUgb3B0aW9uczogVXNlck9wdGlvbnMgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc3VjY2Vzc2Z1bENvbmRpdGlvbnM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge307XHJcbiAgcHJpdmF0ZSBjb25kaXRpb25zTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICBwb2xsID0gKFxyXG4gICAgY29uZGl0aW9uczogKEZ1bmN0aW9uIHwgc3RyaW5nKVtdLFxyXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgdXNlck9wdGlvbnM/OiBVc2VyT3B0aW9uc1xyXG4gICkgPT4ge1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IFVzZXJPcHRpb25zKCk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbnNMZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodXNlck9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gdXNlck9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lb3V0ID0gdGhpcy5vcHRpb25zLnRpbWVvdXRcclxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLmdldE5vdygpICsgdGhpcy5vcHRpb25zLnRpbWVvdXQpLmdldFRpbWUoKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICBjb25kaXRpb25zW2ldLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy53YWl0LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxpZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXROb3cgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9O1xyXG5cclxuICBpc1RpbWVPdXQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0ICYmIHRoaXMuZ2V0Tm93KCkgPiB0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXZhbHVhdGVDb25kaXRpb24gPSAoY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgcmV0dXJuIGNvbmRpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcInN0cmluZ1wiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZGl0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaXNBbGxDb25kaXRpb25QYXNzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zTGVuZ3RoID09PSB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICBwb2xsRm9yQ29uZGl0aW9uID0gKFxyXG4gICAgY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyxcclxuICAgIHdhaXRUaW1lOiBudW1iZXIsXHJcbiAgICBza2lwV2FpdDogYm9vbGVhbixcclxuICAgIG11bHRpcGxpZXI6IG51bWJlclxyXG4gICk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMudGltZW91dCAmJiB0aGlzLmlzVGltZU91dCgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbik7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLnB1c2gocmVzdWx0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzQWxsQ29uZGl0aW9uUGFzc2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICAgICAgY29uZGl0aW9uLFxyXG4gICAgICAgICAgICB3YWl0VGltZSAqIG11bHRpcGxpZXIsXHJcbiAgICAgICAgICAgIHNraXBXYWl0LFxyXG4gICAgICAgICAgICBtdWx0aXBsaWVyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcFdhaXQgPyAwIDogd2FpdFRpbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyT3B0aW9ucyB7XHJcbiAgd2FpdDogbnVtYmVyID0gNTA7XHJcbiAgbXVsdGlwbGllcjogbnVtYmVyID0gMS4xO1xyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFBvbGxlciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvcG9sbGVyXCI7XHJcbmltcG9ydCB7IG1vZGVsSGVhZGVyU2VsZWN0b3IgfSBmcm9tIFwiLi9jb21tb24vYXNzZXRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGllQ2hlY2tzID0gL01TSUV8VHJpZGVudHxFZGdlXFwvKDEyfDEzfDE0fDE1fDE2fDE3fDE4KS8udGVzdChcclxuICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4pO1xyXG5cclxuaWYgKCFpZUNoZWNrcykge1xyXG4gIGNvbnN0IG1haW4gPSBuZXcgTWFpbkNvbXBvbmVudCgpO1xyXG4gIGNvbnN0IHBvbGxlciA9IG5ldyBQb2xsZXIoKTtcclxuICBwb2xsZXIucG9sbChbXCJib2R5XCIsIG1vZGVsSGVhZGVyU2VsZWN0b3JdLCBtYWluLmluaXQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJoZWxwcyIsInRleHQiLCJtb2RlbEhlYWRlclNlbGVjdG9yIiwiVGVzdEluZm8iLCJDb250YWN0Q29tcG9uZW50IiwicmVuZGVyIiwiSUQiLCJtYXAiLCJoZWxwIiwiTGlDb21wb25lbnQiLCJqb2luIiwidHJpbSIsIk1haW5Db21wb25lbnQiLCJpbml0IiwiSW5pdGlhbGl6ZXIiLCJtb2RlbEhlYWRlckVsbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJ0b1N0cmluZyIsImNvbnRhY3RDb21wb25lbnQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZXN0SW5mbyIsInZlcnNpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJWQVJJQVRJT04iLCJjb25zb2xlIiwiaW5mbyIsIlBvbGxlciIsIm9wdGlvbnMiLCJ0aW1lb3V0Iiwic3VjY2Vzc2Z1bENvbmRpdGlvbnMiLCJjYWxsYmFjayIsImNvbmRpdGlvbnNMZW5ndGgiLCJwb2xsIiwiY29uZGl0aW9ucyIsInVzZXJPcHRpb25zIiwiVXNlck9wdGlvbnMiLCJsZW5ndGgiLCJEYXRlIiwiZ2V0Tm93IiwiZ2V0VGltZSIsImkiLCJwb2xsRm9yQ29uZGl0aW9uIiwid2FpdCIsIm11bHRpcGxpZXIiLCJpc1RpbWVPdXQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImNvbmRpdGlvbiIsImlzQWxsQ29uZGl0aW9uUGFzc2VkIiwid2FpdFRpbWUiLCJza2lwV2FpdCIsInJlc3VsdCIsInB1c2giLCJzZXRUaW1lb3V0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=