(()=>{"use strict";var e={211:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.TestInfo=void 0,(n=t.TestInfo||(t.TestInfo={})).ID="BL027",n.SITE="baliblinds",n.CLIENT="brainlab",n.VARIATION="1"},803:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainComponent=void 0;var o=n(951),i=n(211),r=n(634),c=n(897),s=n(552);t.MainComponent=function(){var e=this;this.mobileTabSelector="div.mobile-tabs-selector",this.swatchOrderSelector="div.swatch-ordering-actions",this.optionModes=[],this.init=function(){var t,n;document.querySelectorAll(e.mobileTabSelector+">select>option").forEach((function(t){e.optionModes.push({href:t.value,text:t.innerText})})),null===(t=document.querySelector(e.swatchOrderSelector))||void 0===t||t.classList.add(i.TestInfo.ID+"__hide"),null===(n=document.querySelector(e.mobileTabSelector))||void 0===n||n.classList.add(i.TestInfo.ID+"__hide"),(new s.SwatchOrderActionComponent).render();var o=new c.SwappableMobileTabComponent;o.render(e.optionModes),o.showOnlyOnMobile(window.innerWidth),window.addEventListener("resize",(function(){o.showOnlyOnMobile(window.innerWidth)}),!0),r.Fixer.fixStickyHeaderConflictWithMenu()},o.Initializer.init(i.TestInfo,"0.0.2")}},897:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SwappableMobileTabComponent=void 0;var o=n(211),i=n(90);t.SwappableMobileTabComponent=function(){var e=this;this.tabSectionSelector="section.tabs-section",this.getHtml=function(e){return'<div class="'.concat(o.TestInfo.ID,'__swappable-mobile-tab container" >\n      ').concat(e.map((function(e){return i.TabComponent.render(e)})).join("\n"),"\n    </div>")},this.render=function(t){var n;null===(n=document.querySelector(e.tabSectionSelector))||void 0===n||n.insertAdjacentHTML("beforeend",e.getHtml(t))},this.showOnlyOnMobile=function(e){var t=document.querySelector("div."+o.TestInfo.ID+"__swappable-mobile-tab");e>=992?null==t||t.classList.add(o.TestInfo.ID+"__hide"):null==t||t.classList.remove(o.TestInfo.ID+"__hide")}}},552:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SwatchOrderActionComponent=void 0;var o=n(211);t.SwatchOrderActionComponent=function(){var e=this;this.tabContainerSelector="div.tabs-container",this.getHtml=function(){return'<div class="'.concat(o.TestInfo.ID,'__order-action">\n        <a href="/my-account/my-favorites/" >Go to My Favorites</a>\n        <a href="/swatch-cart/" >Place Order</a>\n    </div>').trim()},this.render=function(){var t;return null===(t=document.querySelector(e.tabContainerSelector))||void 0===t||t.insertAdjacentHTML("beforeend",e.getHtml()),!0}}},90:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TabComponent=void 0;var n=function(){function e(){}return e.isActive=function(e){return!window.location.search&&e.text===this.defaultActiveText||-1!==window.location.href.indexOf(e.href)},e.defaultActiveText="Shades",e.render=function(t){return"<a ".concat(e.isActive(t)?"class='active'":"",' href="https://www.baliblinds.com').concat(t.href,'" >').concat(t.text,"</a>").trim()},e}();t.TabComponent=n},634:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Fixer=void 0;var o=n(211),i=function(){function e(){}var t;return t=e,e.headerSelector="header.header",e.zIndex=o.TestInfo.ID+"__z-index",e.tabSectionSelector="section.tabs-section",e.menuButtonSelector="button.nav-mobile",e.fixStickyHeaderConflictWithMenu=function(){var e=document.querySelector(t.headerSelector),n=document.querySelector(t.tabSectionSelector),o=document.querySelector(t.menuButtonSelector);e&&n&&o&&(e.addEventListener("mouseover",(function(){t.isOkToAdd()&&n.classList.add(t.zIndex)})),e.addEventListener("mouseleave",(function(){n.classList.remove(t.zIndex)})),o.addEventListener("click",(function(){n.classList.contains(t.zIndex)?n.classList.add(t.zIndex):n.classList.remove(t.zIndex)})))},e.isOkToAdd=function(){var e,n=null===(e=document.querySelector(t.tabSectionSelector))||void 0===e?void 0:e.getBoundingClientRect().top;return"number"==typeof n&&n>100},e}();t.Fixer=i},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Initializer=void 0;var n=function(){function e(){}return e.init=function(e,t){document.documentElement.classList.add(e.ID),document.documentElement.classList.add("".concat(e.ID,"-").concat(e.VARIATION)),console.info("ID: ".concat(e.ID,", VARIATION: ").concat(e.VARIATION,", VERSION: ").concat(t," is running.....!"))},e}();t.Initializer=n},454:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Poller=void 0;var o=n(704);t.Poller=function(){var e=this;this.options=null,this.timeout=null,this.successfulConditions=[],this.callback=function(){},this.conditionsLength=0,this.poll=function(t,n,i){e.callback=n,e.options=new o.UserOptions,e.conditionsLength=t.length,i&&(e.options=i),e.timeout=e.options.timeout?new Date(e.getNow()+e.options.timeout).getTime():null;for(var r=0;r<t.length;r++)e.pollForCondition(t[r],e.options.wait,!0,e.options.multiplier)},this.getNow=function(){return(new Date).getTime()},this.isTimeOut=function(){return!!(e.timeout&&e.getNow()>e.timeout)},this.evaluateCondition=function(e){return!!e&&("function"==typeof e?e():!("string"!=typeof e||!document.querySelector(e)))},this.isAllConditionPassed=function(){return e.conditionsLength===e.successfulConditions.length},this.pollForCondition=function(t,n,o,i){if(e.timeout&&e.isTimeOut())return!1;var r=e.evaluateCondition(t);return r?(e.successfulConditions.push(r),e.isAllConditionPassed()&&e.callback(e.successfulConditions)):setTimeout((function(){e.pollForCondition(t,n*i,o,i)}),o?0:n),!0}}},704:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserOptions=void 0;t.UserOptions=function(){this.wait=50,this.multiplier=1.1,this.timeout=0}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{var e=n(454),t=n(803);if(!/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)){var o=new t.MainComponent;(new e.Poller).poll(["body","div.mobile-tabs-selector"],o.init)}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnpELEtBQUs4RSxHQUUzQixFQUFLSCx3QkFDUCxFQUFLakIsU0FBUyxFQUFLRCx1QkFHckJzQixZQUNFLFdBQ0UsRUFBS1YsaUJBQ0hLLEVBQ0FFLEVBQVdMLEVBQ1hNLEVBQ0FOLEVBRUosR0FDQU0sRUFBVyxFQUFJRCxJQUlaLENBQ1QsQ0FDRixDLG9GQ3JHYSxFQUFBYixZQUFiLFdBQ0UsS0FBQU8sS0FBZSxHQUNmLEtBQUFDLFdBQXFCLElBQ3JCLEtBQUFmLFFBQWtCLENBQ3BCLEMsR0NISXdCLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDLE1DdEJBLGFBQ0EsU0FNQSxJQUppQiw0Q0FBNENHLEtBQzNEMUUsT0FBTzJFLFVBQVVDLFdBR0osQ0FDYixJQUFNQyxFQUFPLElBQUksRUFBQXBHLGVBQ0YsSUFBSSxFQUFBK0QsUUFDWk0sS0FBSyxDQUFDLE9BQVEsNEJBQTZCK0IsRUFBS2hHLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tbW9uL3Rlc3QuaW5mby50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tcG9uZW50cy9zd2FwcGFibGUtbW9iaWxlLXRhYi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9icmFpbmxhYi9iYWxpYmxpbmRzL0JMMDI3L2NvbXBvbmVudHMvc3dhdGNoLW9yZGVyLWFjdGlvbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9icmFpbmxhYi9iYWxpYmxpbmRzL0JMMDI3L2NvbXBvbmVudHMvdGFiLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvdXRpbHMvZml4ZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL2luaXRpYWxpemVyLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL3V0aWxpdGllcy9wb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL3VzZXIub3B0aW9ucy50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVGVzdEluZm8ge0lEID0gJ0JMMDI3JywgU0lURSA9ICdiYWxpYmxpbmRzJywgQ0xJRU5UID0gJ2JyYWlubGFiJywgVkFSSUFUSU9OID0gJzEnfVxuICAgICIsImltcG9ydCB7IEluaXRpYWxpemVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pbml0aWFsaXplclwiO1xyXG5pbXBvcnQgeyBUZXN0SW5mbyB9IGZyb20gXCIuLi9jb21tb24vdGVzdC5pbmZvXCI7XHJcbmltcG9ydCB7IE9wdGlvbk1vZGVsIH0gZnJvbSBcIi4uL21vZGVzL29wdGlvbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGaXhlciB9IGZyb20gXCIuLi91dGlscy9maXhlclwiO1xyXG5pbXBvcnQgeyBTd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQgfSBmcm9tIFwiLi9zd2FwcGFibGUtbW9iaWxlLXRhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3dhdGNoT3JkZXJBY3Rpb25Db21wb25lbnQgfSBmcm9tIFwiLi9zd2F0Y2gtb3JkZXItYWN0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW9iaWxlVGFiU2VsZWN0b3I6IHN0cmluZyA9IFwiZGl2Lm1vYmlsZS10YWJzLXNlbGVjdG9yXCI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzd2F0Y2hPcmRlclNlbGVjdG9yOiBzdHJpbmcgPSBcImRpdi5zd2F0Y2gtb3JkZXJpbmctYWN0aW9uc1wiO1xyXG4gIHByaXZhdGUgb3B0aW9uTW9kZXM6IE9wdGlvbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBJbml0aWFsaXplci5pbml0KFRlc3RJbmZvLCBcIjAuMC4yXCIpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZVRhYkVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTFNlbGVjdEVsZW1lbnQ+KFxyXG4gICAgICB0aGlzLm1vYmlsZVRhYlNlbGVjdG9yICsgXCI+c2VsZWN0Pm9wdGlvblwiXHJcbiAgICApO1xyXG5cclxuICAgIG1vYmlsZVRhYkVsbS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgdGhpcy5vcHRpb25Nb2Rlcy5wdXNoKHtcclxuICAgICAgICBocmVmOiBvcHRpb24udmFsdWUsXHJcbiAgICAgICAgdGV4dDogb3B0aW9uLmlubmVyVGV4dCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLnN3YXRjaE9yZGVyU2VsZWN0b3IpXHJcbiAgICAgID8uY2xhc3NMaXN0LmFkZChUZXN0SW5mby5JRCArIFwiX19oaWRlXCIpO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMubW9iaWxlVGFiU2VsZWN0b3IpXHJcbiAgICAgID8uY2xhc3NMaXN0LmFkZChUZXN0SW5mby5JRCArIFwiX19oaWRlXCIpO1xyXG5cclxuICAgIGNvbnN0IHN3YXRjaE9yZGVyQWN0aW9uQ29tcG9uZW50ID0gbmV3IFN3YXRjaE9yZGVyQWN0aW9uQ29tcG9uZW50KCk7XHJcbiAgICBzd2F0Y2hPcmRlckFjdGlvbkNvbXBvbmVudC5yZW5kZXIoKTtcclxuXHJcbiAgICBjb25zdCBzd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQgPSBuZXcgU3dhcHBhYmxlTW9iaWxlVGFiQ29tcG9uZW50KCk7XHJcbiAgICBzd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQucmVuZGVyKHRoaXMub3B0aW9uTW9kZXMpO1xyXG5cclxuICAgIHN3YXBwYWJsZU1vYmlsZVRhYkNvbXBvbmVudC5zaG93T25seU9uTW9iaWxlKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcInJlc2l6ZVwiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3dhcHBhYmxlTW9iaWxlVGFiQ29tcG9uZW50LnNob3dPbmx5T25Nb2JpbGUod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIEZpeGVyLmZpeFN0aWNreUhlYWRlckNvbmZsaWN0V2l0aE1lbnUoKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4uL2NvbW1vbi90ZXN0LmluZm9cIjtcclxuaW1wb3J0IHsgT3B0aW9uTW9kZWwgfSBmcm9tIFwiLi4vbW9kZXMvb3B0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3RhYi5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgdGFiU2VjdGlvblNlbGVjdG9yOiBzdHJpbmcgPSBcInNlY3Rpb24udGFicy1zZWN0aW9uXCI7XHJcblxyXG4gIGdldEh0bWwgPSAob3B0aW9uTW9kZXM6IE9wdGlvbk1vZGVsW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtUZXN0SW5mby5JRH1fX3N3YXBwYWJsZS1tb2JpbGUtdGFiIGNvbnRhaW5lclwiID5cclxuICAgICAgJHtvcHRpb25Nb2Rlc1xyXG4gICAgICAgIC5tYXAoKG9wdGlvbk1vZGVsKSA9PiBUYWJDb21wb25lbnQucmVuZGVyKG9wdGlvbk1vZGVsKSlcclxuICAgICAgICAuam9pbihcIlxcblwiKX1cclxuICAgIDwvZGl2PmA7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyID0gKG9wdGlvbk1vZGVzOiBPcHRpb25Nb2RlbFtdKTogdm9pZCA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLnRhYlNlY3Rpb25TZWxlY3RvcilcclxuICAgICAgPy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGhpcy5nZXRIdG1sKG9wdGlvbk1vZGVzKSk7XHJcbiAgfTtcclxuXHJcbiAgc2hvd09ubHlPbk1vYmlsZSA9ICh3aWR0aDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB0YWJFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcImRpdi5cIiArIFRlc3RJbmZvLklEICsgXCJfX3N3YXBwYWJsZS1tb2JpbGUtdGFiXCJcclxuICAgICk7XHJcbiAgICBpZiAod2lkdGggPj0gOTkyKSB7XHJcbiAgICAgIHRhYkVsbT8uY2xhc3NMaXN0LmFkZChUZXN0SW5mby5JRCArIFwiX19oaWRlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFiRWxtPy5jbGFzc0xpc3QucmVtb3ZlKFRlc3RJbmZvLklEICsgXCJfX2hpZGVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBUZXN0SW5mbyB9IGZyb20gXCIuLi9jb21tb24vdGVzdC5pbmZvXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3dhdGNoT3JkZXJBY3Rpb25Db21wb25lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgdGFiQ29udGFpbmVyU2VsZWN0b3I6IHN0cmluZyA9IFwiZGl2LnRhYnMtY29udGFpbmVyXCI7XHJcblxyXG4gIGdldEh0bWwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGh0bWxTdHIgPSBgPGRpdiBjbGFzcz1cIiR7VGVzdEluZm8uSUR9X19vcmRlci1hY3Rpb25cIj5cclxuICAgICAgICA8YSBocmVmPVwiL215LWFjY291bnQvbXktZmF2b3JpdGVzL1wiID5HbyB0byBNeSBGYXZvcml0ZXM8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9zd2F0Y2gtY2FydC9cIiA+UGxhY2UgT3JkZXI8L2E+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgcmV0dXJuIGh0bWxTdHIudHJpbSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlciA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMudGFiQ29udGFpbmVyU2VsZWN0b3IpXHJcbiAgICAgID8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRoaXMuZ2V0SHRtbCgpKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgT3B0aW9uTW9kZWwgfSBmcm9tIFwiLi4vbW9kZXMvb3B0aW9uLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0QWN0aXZlVGV4dDogc3RyaW5nID0gXCJTaGFkZXNcIjtcclxuXHJcbiAgc3RhdGljIHJlbmRlciA9IChvcHRpb25Nb2RlbDogT3B0aW9uTW9kZWwpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgaHRtbCA9IGA8YSAke1xyXG4gICAgICBUYWJDb21wb25lbnQuaXNBY3RpdmUob3B0aW9uTW9kZWwpID8gXCJjbGFzcz0nYWN0aXZlJ1wiIDogXCJcIlxyXG4gICAgfSBocmVmPVwiaHR0cHM6Ly93d3cuYmFsaWJsaW5kcy5jb20ke29wdGlvbk1vZGVsLmhyZWZ9XCIgPiR7XHJcbiAgICAgIG9wdGlvbk1vZGVsLnRleHRcclxuICAgIH08L2E+YDtcclxuICAgIHJldHVybiBodG1sLnRyaW0oKTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgaXNBY3RpdmUob3B0aW9uTW9kZWw6IE9wdGlvbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF3aW5kb3cubG9jYXRpb24uc2VhcmNoICYmXHJcbiAgICAgIG9wdGlvbk1vZGVsLnRleHQgPT09IHRoaXMuZGVmYXVsdEFjdGl2ZVRleHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihvcHRpb25Nb2RlbC5ocmVmKSA9PT0gLTEgPyBmYWxzZSA6IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4uL2NvbW1vbi90ZXN0LmluZm9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXhlciB7XHJcbiAgc3RhdGljIGhlYWRlclNlbGVjdG9yOiBzdHJpbmcgPSBcImhlYWRlci5oZWFkZXJcIjtcclxuICBzdGF0aWMgekluZGV4OiBzdHJpbmcgPSBUZXN0SW5mby5JRCArIFwiX196LWluZGV4XCI7XHJcbiAgc3RhdGljIHRhYlNlY3Rpb25TZWxlY3Rvcjogc3RyaW5nID0gXCJzZWN0aW9uLnRhYnMtc2VjdGlvblwiO1xyXG4gIHN0YXRpYyBtZW51QnV0dG9uU2VsZWN0b3I6IHN0cmluZyA9IFwiYnV0dG9uLm5hdi1tb2JpbGVcIjtcclxuXHJcbiAgc3RhdGljIGZpeFN0aWNreUhlYWRlckNvbmZsaWN0V2l0aE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pih0aGlzLmhlYWRlclNlbGVjdG9yKTtcclxuICAgIGNvbnN0IHRhYlNlY3Rpb25FbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcclxuICAgICAgdGhpcy50YWJTZWN0aW9uU2VsZWN0b3JcclxuICAgICk7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXHJcbiAgICAgIHRoaXMubWVudUJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG5cclxuICAgIGlmIChoZWFkZXJFbG0gJiYgdGFiU2VjdGlvbkVsbSAmJiBtZW51QnV0dG9uRWxtKSB7XHJcbiAgICAgIGhlYWRlckVsbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzT2tUb0FkZCgpICYmIHRhYlNlY3Rpb25FbG0uY2xhc3NMaXN0LmFkZCh0aGlzLnpJbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaGVhZGVyRWxtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICB0YWJTZWN0aW9uRWxtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy56SW5kZXgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG1lbnVCdXR0b25FbG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAodGFiU2VjdGlvbkVsbS5jbGFzc0xpc3QuY29udGFpbnModGhpcy56SW5kZXgpKSB7XHJcbiAgICAgICAgICB0YWJTZWN0aW9uRWxtLmNsYXNzTGlzdC5hZGQodGhpcy56SW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YWJTZWN0aW9uRWxtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy56SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGlzT2tUb0FkZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IHRvcDogbnVtYmVyIHwgdW5kZWZpbmVkID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy50YWJTZWN0aW9uU2VsZWN0b3IpXHJcbiAgICAgID8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdG9wID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIHJldHVybiB0b3AgPiAxMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXIge1xyXG4gIHN0YXRpYyBpbml0ID0gKFxyXG4gICAgdGVzdEluZm86IHtcclxuICAgICAgSUQ6IHN0cmluZztcclxuICAgICAgU0lURTogc3RyaW5nO1xyXG4gICAgICBDTElFTlQ6IHN0cmluZztcclxuICAgICAgVkFSSUFUSU9OOiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgKTogdm9pZCA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0ZXN0SW5mby5JRCk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgYCR7dGVzdEluZm8uSUR9LSR7dGVzdEluZm8uVkFSSUFUSU9OfWBcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmluZm8oXHJcbiAgICAgIGBJRDogJHt0ZXN0SW5mby5JRH0sIFZBUklBVElPTjogJHt0ZXN0SW5mby5WQVJJQVRJT059LCBWRVJTSU9OOiAke3ZlcnNpb259IGlzIHJ1bm5pbmcuLi4uLiFgXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlck9wdGlvbnMgfSBmcm9tIFwiLi91c2VyLm9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2xsZXIge1xyXG4gIHByaXZhdGUgb3B0aW9uczogVXNlck9wdGlvbnMgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgc3VjY2Vzc2Z1bENvbmRpdGlvbnM6IGJvb2xlYW5bXSA9IFtdO1xyXG4gIHByaXZhdGUgY2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge307XHJcbiAgcHJpdmF0ZSBjb25kaXRpb25zTGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICBwb2xsID0gKFxyXG4gICAgY29uZGl0aW9uczogKEZ1bmN0aW9uIHwgc3RyaW5nKVtdLFxyXG4gICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgdXNlck9wdGlvbnM/OiBVc2VyT3B0aW9uc1xyXG4gICkgPT4ge1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IFVzZXJPcHRpb25zKCk7XHJcbiAgICB0aGlzLmNvbmRpdGlvbnNMZW5ndGggPSBjb25kaXRpb25zLmxlbmd0aDtcclxuXHJcbiAgICBpZiAodXNlck9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gdXNlck9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lb3V0ID0gdGhpcy5vcHRpb25zLnRpbWVvdXRcclxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLmdldE5vdygpICsgdGhpcy5vcHRpb25zLnRpbWVvdXQpLmdldFRpbWUoKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICBjb25kaXRpb25zW2ldLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy53YWl0LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxpZXJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBnZXROb3cgPSAoKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICB9O1xyXG5cclxuICBpc1RpbWVPdXQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0ICYmIHRoaXMuZ2V0Tm93KCkgPiB0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXZhbHVhdGVDb25kaXRpb24gPSAoY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKCFjb25kaXRpb24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgcmV0dXJuIGNvbmRpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZGl0aW9uID09PSBcInN0cmluZ1wiICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZGl0aW9uKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaXNBbGxDb25kaXRpb25QYXNzZWQgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zTGVuZ3RoID09PSB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICBwb2xsRm9yQ29uZGl0aW9uID0gKFxyXG4gICAgY29uZGl0aW9uOiBGdW5jdGlvbiB8IHN0cmluZyxcclxuICAgIHdhaXRUaW1lOiBudW1iZXIsXHJcbiAgICBza2lwV2FpdDogYm9vbGVhbixcclxuICAgIG11bHRpcGxpZXI6IG51bWJlclxyXG4gICk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMudGltZW91dCAmJiB0aGlzLmlzVGltZU91dCgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbik7XHJcblxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICB0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zLnB1c2gocmVzdWx0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzQWxsQ29uZGl0aW9uUGFzc2VkKCkpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucG9sbEZvckNvbmRpdGlvbihcclxuICAgICAgICAgICAgY29uZGl0aW9uLFxyXG4gICAgICAgICAgICB3YWl0VGltZSAqIG11bHRpcGxpZXIsXHJcbiAgICAgICAgICAgIHNraXBXYWl0LFxyXG4gICAgICAgICAgICBtdWx0aXBsaWVyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcFdhaXQgPyAwIDogd2FpdFRpbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyT3B0aW9ucyB7XHJcbiAgd2FpdDogbnVtYmVyID0gNTA7XHJcbiAgbXVsdGlwbGllcjogbnVtYmVyID0gMS4xO1xyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFBvbGxlciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvcG9sbGVyXCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBpZUNoZWNrcyA9IC9NU0lFfFRyaWRlbnR8RWRnZVxcLygxMnwxM3wxNHwxNXwxNnwxN3wxOCkvLnRlc3QoXHJcbiAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcclxuKTtcclxuXHJcbmlmICghaWVDaGVja3MpIHtcclxuICBjb25zdCBtYWluID0gbmV3IE1haW5Db21wb25lbnQoKTtcclxuICBjb25zdCBwb2xsZXIgPSBuZXcgUG9sbGVyKCk7XHJcbiAgcG9sbGVyLnBvbGwoW1wiYm9keVwiLCBcImRpdi5tb2JpbGUtdGFicy1zZWxlY3RvclwiXSwgbWFpbi5pbml0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiVGVzdEluZm8iLCJNYWluQ29tcG9uZW50IiwibW9iaWxlVGFiU2VsZWN0b3IiLCJzd2F0Y2hPcmRlclNlbGVjdG9yIiwib3B0aW9uTW9kZXMiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm9wdGlvbiIsInB1c2giLCJocmVmIiwidmFsdWUiLCJ0ZXh0IiwiaW5uZXJUZXh0IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIklEIiwiU3dhdGNoT3JkZXJBY3Rpb25Db21wb25lbnQiLCJyZW5kZXIiLCJzd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQiLCJTd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQiLCJzaG93T25seU9uTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJGaXhlciIsImZpeFN0aWNreUhlYWRlckNvbmZsaWN0V2l0aE1lbnUiLCJJbml0aWFsaXplciIsInRhYlNlY3Rpb25TZWxlY3RvciIsImdldEh0bWwiLCJtYXAiLCJvcHRpb25Nb2RlbCIsIlRhYkNvbXBvbmVudCIsImpvaW4iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ3aWR0aCIsInRhYkVsbSIsInJlbW92ZSIsInRhYkNvbnRhaW5lclNlbGVjdG9yIiwidHJpbSIsImlzQWN0aXZlIiwibG9jYXRpb24iLCJzZWFyY2giLCJ0aGlzIiwiZGVmYXVsdEFjdGl2ZVRleHQiLCJpbmRleE9mIiwiaGVhZGVyU2VsZWN0b3IiLCJ6SW5kZXgiLCJtZW51QnV0dG9uU2VsZWN0b3IiLCJoZWFkZXJFbG0iLCJ0YWJTZWN0aW9uRWxtIiwibWVudUJ1dHRvbkVsbSIsImlzT2tUb0FkZCIsImNvbnRhaW5zIiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGVzdEluZm8iLCJ2ZXJzaW9uIiwiZG9jdW1lbnRFbGVtZW50IiwiVkFSSUFUSU9OIiwiY29uc29sZSIsImluZm8iLCJQb2xsZXIiLCJvcHRpb25zIiwidGltZW91dCIsInN1Y2Nlc3NmdWxDb25kaXRpb25zIiwiY2FsbGJhY2siLCJjb25kaXRpb25zTGVuZ3RoIiwicG9sbCIsImNvbmRpdGlvbnMiLCJ1c2VyT3B0aW9ucyIsIlVzZXJPcHRpb25zIiwibGVuZ3RoIiwiRGF0ZSIsImdldE5vdyIsImdldFRpbWUiLCJpIiwicG9sbEZvckNvbmRpdGlvbiIsIndhaXQiLCJtdWx0aXBsaWVyIiwiaXNUaW1lT3V0IiwiZXZhbHVhdGVDb25kaXRpb24iLCJjb25kaXRpb24iLCJpc0FsbENvbmRpdGlvblBhc3NlZCIsIndhaXRUaW1lIiwic2tpcFdhaXQiLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=