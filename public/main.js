(()=>{"use strict";var t={420:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.dummyContent=void 0,n.dummyContent="Hello world!"},543:(t,n)=>{var e;Object.defineProperty(n,"__esModule",{value:!0}),n.TestInfo=void 0,(e=n.TestInfo||(n.TestInfo={})).ID="dummy2",e.SITE="dummy",e.CLIENT="dummy",e.VARIATION="1"},865:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.DummyComponent=void 0;var o=e(420);n.DummyComponent=function(){var t=this;this.loginSelector="div.login-box",this.getHtml=function(){return"<div><p>".concat(o.dummyContent,"</p></div>")},this.render=function(){var n;null===(n=document.querySelector(t.loginSelector))||void 0===n||n.insertAdjacentHTML("afterbegin",t.getHtml())},this.addClickListener=function(){}}},481:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.MainComponent=void 0;var o=e(951),i=e(543),s=e(865);n.MainComponent=function(){this.init=function(){o.Initializer.init(i.TestInfo,"0.0.1"),(new s.DummyComponent).render()}}},951:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Initializer=void 0;var e=function(){function t(){}return t.init=function(t,n){document.documentElement.classList.add(t.ID),document.documentElement.classList.add("".concat(t.ID,"-").concat(t.VARIATION)),console.info("ID: ".concat(t.ID,", VARIATION: ").concat(t.VARIATION,", VERSION: ").concat(n," is running.....!"))},t}();n.Initializer=e},454:(t,n,e)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Poller=void 0;var o=e(704);n.Poller=function(){var t=this;this.options=null,this.timeout=null,this.successfulConditions=[],this.callback=function(){},this.conditionsLength=0,this.poll=function(n,e,i){t.callback=e,t.options=new o.UserOptions,t.conditionsLength=n.length,i&&(t.options=i),t.timeout=t.options.timeout?new Date(t.getNow()+t.options.timeout).getTime():null;for(var s=0;s<n.length;s++)t.pollForCondition(n[s],t.options.wait,!0,t.options.multiplier)},this.getNow=function(){return(new Date).getTime()},this.isTimeOut=function(){return!!(t.timeout&&t.getNow()>t.timeout)},this.evaluateCondition=function(t){return!!t&&("function"==typeof t?t():!("string"!=typeof t||!document.querySelector(t)))},this.isAllConditionPassed=function(){return t.conditionsLength===t.successfulConditions.length},this.pollForCondition=function(n,e,o,i){if(t.timeout&&t.isTimeOut())return!1;var s=t.evaluateCondition(n);return s?(t.successfulConditions.push(s),t.isAllConditionPassed()&&t.callback(t.successfulConditions)):setTimeout((function(){t.pollForCondition(n,e*i,o,i)}),o?0:e),!0}}},704:(t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.UserOptions=void 0;n.UserOptions=function(){this.wait=50,this.multiplier=1.1,this.timeout=0}}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var s=n[o]={exports:{}};return t[o](s,s.exports,e),s.exports}(()=>{var t=e(454),n=e(481);if(!/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)){var o=new n.MainComponent;(new t.Poller).poll(["body"],o.init)}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQyxNQ3RCQSxhQUNBLFNBTUEsSUFKaUIsNENBQTRDRyxLQUMzREMsT0FBT0MsVUFBVUMsV0FHSixDQUNiLElBQU1DLEVBQU8sSUFBSSxFQUFBbkQsZUFDRixJQUFJLEVBQUFZLFFBQ1pNLEtBQUssQ0FBQyxRQUFTaUMsRUFBS2xELEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2R1bW15L2R1bW15L2R1bW15Mi9jb21tb24vYXNzZXQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9kdW1teS9kdW1teS9kdW1teTIvY29tbW9uL3Rlc3QuaW5mby50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2R1bW15L2R1bW15L2R1bW15Mi9jb21wb25lbnRzL2R1bW15LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2R1bW15L2R1bW15L2R1bW15Mi9jb21wb25lbnRzL21haW4uY29tcG9uZW50LnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL3V0aWxpdGllcy9pbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvcG9sbGVyLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL3V0aWxpdGllcy91c2VyLm9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9kdW1teS9kdW1teS9kdW1teTIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGR1bW15Q29udGVudDogc3RyaW5nID0gXCJIZWxsbyB3b3JsZCFcIjtcclxuIiwiZXhwb3J0IGVudW0gVGVzdEluZm8ge0lEID0gJ2R1bW15MicsIFNJVEUgPSAnZHVtbXknLCBDTElFTlQgPSAnZHVtbXknLCBWQVJJQVRJT04gPSAnMSd9IiwiaW1wb3J0IHsgZHVtbXlDb250ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9hc3NldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIER1bW15Q29tcG9uZW50IHtcclxuICBwcml2YXRlIGxvZ2luU2VsZWN0b3I6IHN0cmluZyA9IFwiZGl2LmxvZ2luLWJveFwiO1xyXG5cclxuICBnZXRIdG1sID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYDxkaXY+PHA+JHtkdW1teUNvbnRlbnR9PC9wPjwvZGl2PmA7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5sb2dpblNlbGVjdG9yKVxyXG4gICAgICA/Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgdGhpcy5nZXRIdG1sKCkpO1xyXG4gIH07XHJcbiAgYWRkQ2xpY2tMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHt9O1xyXG59XHJcbiIsImltcG9ydCB7IEluaXRpYWxpemVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pbml0aWFsaXplclwiO1xyXG5pbXBvcnQgeyBUZXN0SW5mbyB9IGZyb20gXCIuLi9jb21tb24vdGVzdC5pbmZvXCI7XHJcbmltcG9ydCB7IER1bW15Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtbXkuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XHJcbiAgaW5pdCA9ICgpOiB2b2lkID0+IHtcclxuICAgIEluaXRpYWxpemVyLmluaXQoVGVzdEluZm8sIFwiMC4wLjFcIik7XHJcbiAgICBjb25zdCBkdW1teUNvbXBvbmVudCA9IG5ldyBEdW1teUNvbXBvbmVudCgpO1xyXG4gICAgZHVtbXlDb21wb25lbnQucmVuZGVyKCk7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXIge1xyXG4gIHN0YXRpYyBpbml0ID0gKFxyXG4gICAgdGVzdEluZm86IHtcclxuICAgICAgSUQ6IHN0cmluZztcclxuICAgICAgU0lURTogc3RyaW5nO1xyXG4gICAgICBDTElFTlQ6IHN0cmluZztcclxuICAgICAgVkFSSUFUSU9OOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgKTogdm9pZCA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXN0SW5mby5JRCk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgYCR7dGVzdEluZm8uSUR9LSR7dGVzdEluZm8uVkFSSUFUSU9OfWBcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBJRDogJHt0ZXN0SW5mby5JRH0sIFZBUklBVElPTjogJHt0ZXN0SW5mby5WQVJJQVRJT059LCBWRVJTSU9OOiAke3ZlcnNpb259IGlzIHJ1bm5pbmcuLi4uLiFgXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlck9wdGlvbnMgfSBmcm9tIFwiLi91c2VyLm9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2xsZXIge1xyXG4gIHByaXZhdGUgb3B0aW9uczogVXNlck9wdGlvbnMgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc3VjY2Vzc2Z1bENvbmRpdGlvbnM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge307XHJcbiAgcHJpdmF0ZSBjb25kaXRpb25zTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICBwb2xsID0gKFxyXG4gICAgY29uZGl0aW9uczogKEZ1bmN0aW9uIHwgc3RyaW5nKVtdLFxyXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgdXNlck9wdGlvbnM/OiBVc2VyT3B0aW9uc1xyXG4gICkgPT4ge1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IFVzZXJPcHRpb25zKCk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbnNMZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodXNlck9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gdXNlck9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lb3V0ID0gdGhpcy5vcHRpb25zLnRpbWVvdXRcclxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLmdldE5vdygpICsgdGhpcy5vcHRpb25zLnRpbWVvdXQpLmdldFRpbWUoKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICBjb25kaXRpb25zW2ldLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy53YWl0LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxpZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXROb3cgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9O1xyXG5cclxuICBpc1RpbWVPdXQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0ICYmIHRoaXMuZ2V0Tm93KCkgPiB0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXZhbHVhdGVDb25kaXRpb24gPSAoY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgcmV0dXJuIGNvbmRpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcInN0cmluZ1wiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZGl0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaXNBbGxDb25kaXRpb25QYXNzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zTGVuZ3RoID09PSB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICBwb2xsRm9yQ29uZGl0aW9uID0gKFxyXG4gICAgY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyxcclxuICAgIHdhaXRUaW1lOiBudW1iZXIsXHJcbiAgICBza2lwV2FpdDogYm9vbGVhbixcclxuICAgIG11bHRpcGxpZXI6IG51bWJlclxyXG4gICk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMudGltZW91dCAmJiB0aGlzLmlzVGltZU91dCgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbik7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLnB1c2gocmVzdWx0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzQWxsQ29uZGl0aW9uUGFzc2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICAgICAgY29uZGl0aW9uLFxyXG4gICAgICAgICAgICB3YWl0VGltZSAqIG11bHRpcGxpZXIsXHJcbiAgICAgICAgICAgIHNraXBXYWl0LFxyXG4gICAgICAgICAgICBtdWx0aXBsaWVyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcFdhaXQgPyAwIDogd2FpdFRpbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyT3B0aW9ucyB7XHJcbiAgd2FpdDogbnVtYmVyID0gNTA7XHJcbiAgbXVsdGlwbGllcjogbnVtYmVyID0gMS4xO1xyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFBvbGxlciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvcG9sbGVyXCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBpZUNoZWNrcyA9IC9NU0lFfFRyaWRlbnR8RWRnZVxcLygxMnwxM3wxNHwxNXwxNnwxN3wxOCkvLnRlc3QoXHJcbiAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcclxuKTtcclxuXHJcbmlmICghaWVDaGVja3MpIHtcclxuICBjb25zdCBtYWluID0gbmV3IE1haW5Db21wb25lbnQoKTtcclxuICBjb25zdCBwb2xsZXIgPSBuZXcgUG9sbGVyKCk7XHJcbiAgcG9sbGVyLnBvbGwoW1wiYm9keVwiXSwgbWFpbi5pbml0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZHVtbXlDb250ZW50IiwiVGVzdEluZm8iLCJEdW1teUNvbXBvbmVudCIsImxvZ2luU2VsZWN0b3IiLCJnZXRIdG1sIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkQ2xpY2tMaXN0ZW5lciIsIk1haW5Db21wb25lbnQiLCJpbml0IiwiSW5pdGlhbGl6ZXIiLCJ0ZXN0SW5mbyIsInZlcnNpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJJRCIsIlZBUklBVElPTiIsImNvbnNvbGUiLCJpbmZvIiwiUG9sbGVyIiwib3B0aW9ucyIsInRpbWVvdXQiLCJzdWNjZXNzZnVsQ29uZGl0aW9ucyIsImNhbGxiYWNrIiwiY29uZGl0aW9uc0xlbmd0aCIsInBvbGwiLCJjb25kaXRpb25zIiwidXNlck9wdGlvbnMiLCJVc2VyT3B0aW9ucyIsImxlbmd0aCIsIkRhdGUiLCJnZXROb3ciLCJnZXRUaW1lIiwiaSIsInBvbGxGb3JDb25kaXRpb24iLCJ3YWl0IiwibXVsdGlwbGllciIsImlzVGltZU91dCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXNBbGxDb25kaXRpb25QYXNzZWQiLCJ3YWl0VGltZSIsInNraXBXYWl0IiwicmVzdWx0IiwicHVzaCIsInNldFRpbWVvdXQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==