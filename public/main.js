(()=>{"use strict";var e={472:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.selector=t.bannerText=void 0,t.bannerText="In this eBook from O'Reilly Media, compliments of NGINX, learn how to implement a DevSecOps strategy by integrating security early into your development process through cloud infrastructure on AWS.",t.selector={fromSelector:"div.ebook-download-form",headingTextSelector:"div.headings-text",desktopBannerSelector:"div.banner-content.info-banner>div.hide-sm",heroBannerSelector:"div.hero-banner>div.inner-wrap>div.banner-content"}},924:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.TestInfo=void 0,(n=t.TestInfo||(t.TestInfo={})).ID="BL031",n.SITE="nginx",n.CLIENT="brainlab",n.VARIATION="1"},101:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BannerTextComponent=void 0;var o=n(472),i=n(924),r=function(){function e(){}return e.render=function(){return'<div class="'.concat(i.TestInfo.ID,'__banner-text-container" ><p>').concat(o.bannerText,"</p></div>")},e}();t.BannerTextComponent=r},343:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainComponent=void 0;var o=n(951),i=n(454),r=n(472),l=n(924),c=n(101);t.MainComponent=function(){var e=this;this.disclaimerSelector="div.mktoHtmlText",this.init=function(){var t,n,s,u,a;o.Initializer.init(l.TestInfo,"0.0.1"),null===(t=document.querySelector(r.selector.heroBannerSelector))||void 0===t||t.insertAdjacentHTML("afterend",c.BannerTextComponent.render()),null===(n=document.querySelector(r.selector.headingTextSelector))||void 0===n||n.classList.add("".concat(l.TestInfo.ID,"__hide"));var d=null===(s=document.querySelector(r.selector.fromSelector))||void 0===s?void 0:s.cloneNode(!0);null===(u=document.querySelector(r.selector.fromSelector))||void 0===u||u.remove(),d&&(null===(a=document.querySelector(r.selector.desktopBannerSelector))||void 0===a||a.insertAdjacentElement("beforeend",d)),(new i.Poller).poll([e.disclaimerSelector],(function(){var t;null===(t=document.querySelectorAll(e.disclaimerSelector))||void 0===t||t.forEach((function(e){e.removeAttribute("style")}))}))}}},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Initializer=void 0;var n=function(){function e(){}return e.init=function(e,t){document.documentElement.classList.add(e.ID),document.documentElement.classList.add("".concat(e.ID,"-").concat(e.VARIATION)),console.info("ID: ".concat(e.ID,", VARIATION: ").concat(e.VARIATION,", VERSION: ").concat(t," is running.....!"))},e}();t.Initializer=n},454:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Poller=void 0;var o=n(704);t.Poller=function(){var e=this;this.options=null,this.timeout=null,this.successfulConditions=[],this.callback=function(){},this.conditionsLength=0,this.poll=function(t,n,i){e.callback=n,e.options=new o.UserOptions,e.conditionsLength=t.length,i&&(e.options=i),e.timeout=e.options.timeout?new Date(e.getNow()+e.options.timeout).getTime():null;for(var r=0;r<t.length;r++)e.pollForCondition(t[r],e.options.wait,!0,e.options.multiplier)},this.getNow=function(){return(new Date).getTime()},this.isTimeOut=function(){return!!(e.timeout&&e.getNow()>e.timeout)},this.evaluateCondition=function(e){return!!e&&("function"==typeof e?e():!("string"!=typeof e||!document.querySelector(e)))},this.isAllConditionPassed=function(){return e.conditionsLength===e.successfulConditions.length},this.pollForCondition=function(t,n,o,i){if(e.timeout&&e.isTimeOut())return!1;var r=e.evaluateCondition(t);return r?(e.successfulConditions.push(r),e.isAllConditionPassed()&&e.callback(e.successfulConditions)):setTimeout((function(){e.pollForCondition(t,n*i,o,i)}),o?0:n),!0}}},704:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserOptions=void 0;t.UserOptions=function(){this.wait=50,this.multiplier=1.1,this.timeout=0}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{var e=n(454),t=n(472),o=n(343);if(!/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)){var i=new o.MainComponent;(new e.Poller).poll(["body",t.selector.desktopBannerSelector,t.selector.headingTextSelector,t.selector.fromSelector,t.selector.heroBannerSelector],i.init)}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVhtRSxFQUFLNUQsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvbmdpbngvQkwwMzEvY29tbW9uL2Fzc2V0LnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvbmdpbngvQkwwMzEvY29tbW9uL3Rlc3QuaW5mby50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL25naW54L0JMMDMxL2NvbXBvbmVudHMvYmFubmVyLXRleHQuY29tcG9uZW50LnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvbmdpbngvQkwwMzEvY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL3BvbGxlci50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvdXNlci5vcHRpb25zLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvbmdpbngvQkwwMzEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJhbm5lclRleHQ6IHN0cmluZyA9XHJcbiAgXCJJbiB0aGlzIGVCb29rIGZyb20gTydSZWlsbHkgTWVkaWEsIGNvbXBsaW1lbnRzIG9mIE5HSU5YLCBsZWFybiBob3cgdG8gaW1wbGVtZW50IGEgRGV2U2VjT3BzIHN0cmF0ZWd5IGJ5IGludGVncmF0aW5nIHNlY3VyaXR5IGVhcmx5IGludG8geW91ciBkZXZlbG9wbWVudCBwcm9jZXNzIHRocm91Z2ggY2xvdWQgaW5mcmFzdHJ1Y3R1cmUgb24gQVdTLlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdG9yID0ge1xyXG4gIGZyb21TZWxlY3RvcjogXCJkaXYuZWJvb2stZG93bmxvYWQtZm9ybVwiLFxyXG4gIGhlYWRpbmdUZXh0U2VsZWN0b3I6IFwiZGl2LmhlYWRpbmdzLXRleHRcIixcclxuICBkZXNrdG9wQmFubmVyU2VsZWN0b3I6IFwiZGl2LmJhbm5lci1jb250ZW50LmluZm8tYmFubmVyPmRpdi5oaWRlLXNtXCIsXHJcbiAgaGVyb0Jhbm5lclNlbGVjdG9yOiBcImRpdi5oZXJvLWJhbm5lcj5kaXYuaW5uZXItd3JhcD5kaXYuYmFubmVyLWNvbnRlbnRcIixcclxufTtcclxuIiwiZXhwb3J0IGVudW0gVGVzdEluZm8ge0lEID0gJ0JMMDMxJywgU0lURSA9ICduZ2lueCcsIENMSUVOVCA9ICdicmFpbmxhYicsIFZBUklBVElPTiA9ICcxJ30iLCJpbXBvcnQgeyBiYW5uZXJUZXh0IH0gZnJvbSBcIi4uL2NvbW1vbi9hc3NldFwiO1xyXG5pbXBvcnQgeyBUZXN0SW5mbyB9IGZyb20gXCIuLi9jb21tb24vdGVzdC5pbmZvXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFubmVyVGV4dENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHJlbmRlciA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtUZXN0SW5mby5JRH1fX2Jhbm5lci10ZXh0LWNvbnRhaW5lclwiID48cD4ke2Jhbm5lclRleHR9PC9wPjwvZGl2PmA7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbml0aWFsaXplciB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvaW5pdGlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9wb2xsZXJcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwiLi4vY29tbW9uL2Fzc2V0XCI7XHJcbmltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4uL2NvbW1vbi90ZXN0LmluZm9cIjtcclxuaW1wb3J0IHsgQmFubmVyVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL2Jhbm5lci10ZXh0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG4gIGRpc2NsYWltZXJTZWxlY3RvciA9IFwiZGl2Lm1rdG9IdG1sVGV4dFwiO1xyXG5cclxuICBpbml0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgSW5pdGlhbGl6ZXIuaW5pdChUZXN0SW5mbywgXCIwLjAuMVwiKTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihzZWxlY3Rvci5oZXJvQmFubmVyU2VsZWN0b3IpXHJcbiAgICAgID8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgQmFubmVyVGV4dENvbXBvbmVudC5yZW5kZXIoKSk7XHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IuaGVhZGluZ1RleHRTZWxlY3RvcilcclxuICAgICAgPy5jbGFzc0xpc3QuYWRkKGAke1Rlc3RJbmZvLklEfV9faGlkZWApO1xyXG5cclxuICAgIGNvbnN0IGNsb25lZEZvcm0gPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihzZWxlY3Rvci5mcm9tU2VsZWN0b3IpXHJcbiAgICAgID8uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvci5mcm9tU2VsZWN0b3IpPy5yZW1vdmUoKTtcclxuXHJcbiAgICBpZiAoY2xvbmVkRm9ybSkge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yLmRlc2t0b3BCYW5uZXJTZWxlY3RvcilcclxuICAgICAgICA/Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjbG9uZWRGb3JtIGFzIEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbGxlciA9IG5ldyBQb2xsZXIoKTtcclxuICAgIHBvbGxlci5wb2xsKFt0aGlzLmRpc2NsYWltZXJTZWxlY3Rvcl0sICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmRpc2NsYWltZXJTZWxlY3Rvcik/LmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbml0aWFsaXplciB7XHJcbiAgc3RhdGljIGluaXQgPSAoXHJcbiAgICB0ZXN0SW5mbzoge1xyXG4gICAgICBJRDogc3RyaW5nO1xyXG4gICAgICBTSVRFOiBzdHJpbmc7XHJcbiAgICAgIENMSUVOVDogc3RyaW5nO1xyXG4gICAgICBWQVJJQVRJT046IHN0cmluZztcclxuICAgIH0sXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmdcclxuICApOiB2b2lkID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRlc3RJbmZvLklEKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBgJHt0ZXN0SW5mby5JRH0tJHt0ZXN0SW5mby5WQVJJQVRJT059YFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcclxuICAgICAgYElEOiAke3Rlc3RJbmZvLklEfSwgVkFSSUFUSU9OOiAke3Rlc3RJbmZvLlZBUklBVElPTn0sIFZFUlNJT046ICR7dmVyc2lvbn0gaXMgcnVubmluZy4uLi4uIWBcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyT3B0aW9ucyB9IGZyb20gXCIuL3VzZXIub3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbGxlciB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBVc2VyT3B0aW9ucyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdWNjZXNzZnVsQ29uZGl0aW9uczogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBjYWxsYmFjazogRnVuY3Rpb24gPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIGNvbmRpdGlvbnNMZW5ndGg6IG51bWJlciA9IDA7XHJcblxyXG4gIHBvbGwgPSAoXHJcbiAgICBjb25kaXRpb25zOiAoRnVuY3Rpb24gfCBzdHJpbmcpW10sXHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICB1c2VyT3B0aW9ucz86IFVzZXJPcHRpb25zXHJcbiAgKSA9PiB7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgVXNlck9wdGlvbnMoKTtcclxuICAgIHRoaXMuY29uZGl0aW9uc0xlbmd0aCA9IGNvbmRpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh1c2VyT3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSB1c2VyT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSB0aGlzLm9wdGlvbnMudGltZW91dFxyXG4gICAgICA/IG5ldyBEYXRlKHRoaXMuZ2V0Tm93KCkgKyB0aGlzLm9wdGlvbnMudGltZW91dCkuZ2V0VGltZSgpXHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wb2xsRm9yQ29uZGl0aW9uKFxyXG4gICAgICAgIGNvbmRpdGlvbnNbaV0sXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLndhaXQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMubXVsdGlwbGllclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldE5vdyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH07XHJcblxyXG4gIGlzVGltZU91dCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXQgJiYgdGhpcy5nZXROb3coKSA+IHRoaXMudGltZW91dCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBldmFsdWF0ZUNvbmRpdGlvbiA9IChjb25kaXRpb246IEZ1bmN0aW9uIHwgc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gY29uZGl0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09IFwic3RyaW5nXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25kaXRpb24pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpc0FsbENvbmRpdGlvblBhc3NlZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNMZW5ndGggPT09IHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gIHBvbGxGb3JDb25kaXRpb24gPSAoXHJcbiAgICBjb25kaXRpb246IEZ1bmN0aW9uIHwgc3RyaW5nLFxyXG4gICAgd2FpdFRpbWU6IG51bWJlcixcclxuICAgIHNraXBXYWl0OiBib29sZWFuLFxyXG4gICAgbXVsdGlwbGllcjogbnVtYmVyXHJcbiAgKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0ICYmIHRoaXMuaXNUaW1lT3V0KCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMucHVzaChyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNBbGxDb25kaXRpb25QYXNzZWQoKSkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5zdWNjZXNzZnVsQ29uZGl0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb2xsRm9yQ29uZGl0aW9uKFxyXG4gICAgICAgICAgICBjb25kaXRpb24sXHJcbiAgICAgICAgICAgIHdhaXRUaW1lICogbXVsdGlwbGllcixcclxuICAgICAgICAgICAgc2tpcFdhaXQsXHJcbiAgICAgICAgICAgIG11bHRpcGxpZXJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwV2FpdCA/IDAgOiB3YWl0VGltZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJPcHRpb25zIHtcclxuICB3YWl0OiBudW1iZXIgPSA1MDtcclxuICBtdWx0aXBsaWVyOiBudW1iZXIgPSAxLjE7XHJcbiAgdGltZW91dDogbnVtYmVyID0gMDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9wb2xsZXJcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tIFwiLi9jb21tb24vYXNzZXRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGllQ2hlY2tzID0gL01TSUV8VHJpZGVudHxFZGdlXFwvKDEyfDEzfDE0fDE1fDE2fDE3fDE4KS8udGVzdChcclxuICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4pO1xyXG5cclxuaWYgKCFpZUNoZWNrcykge1xyXG4gIGNvbnN0IG1haW4gPSBuZXcgTWFpbkNvbXBvbmVudCgpO1xyXG4gIGNvbnN0IHBvbGxlciA9IG5ldyBQb2xsZXIoKTtcclxuICBwb2xsZXIucG9sbChcclxuICAgIFtcclxuICAgICAgXCJib2R5XCIsXHJcbiAgICAgIHNlbGVjdG9yLmRlc2t0b3BCYW5uZXJTZWxlY3RvcixcclxuICAgICAgc2VsZWN0b3IuaGVhZGluZ1RleHRTZWxlY3RvcixcclxuICAgICAgc2VsZWN0b3IuZnJvbVNlbGVjdG9yLFxyXG4gICAgICBzZWxlY3Rvci5oZXJvQmFubmVyU2VsZWN0b3IsXHJcbiAgICBdLFxyXG4gICAgbWFpbi5pbml0XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYmFubmVyVGV4dCIsInNlbGVjdG9yIiwiZnJvbVNlbGVjdG9yIiwiaGVhZGluZ1RleHRTZWxlY3RvciIsImRlc2t0b3BCYW5uZXJTZWxlY3RvciIsImhlcm9CYW5uZXJTZWxlY3RvciIsIlRlc3RJbmZvIiwicmVuZGVyIiwiSUQiLCJCYW5uZXJUZXh0Q29tcG9uZW50IiwiTWFpbkNvbXBvbmVudCIsImRpc2NsYWltZXJTZWxlY3RvciIsImluaXQiLCJJbml0aWFsaXplciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTGlzdCIsImFkZCIsImNsb25lZEZvcm0iLCJjbG9uZU5vZGUiLCJyZW1vdmUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJQb2xsZXIiLCJwb2xsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbG0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXN0SW5mbyIsInZlcnNpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJWQVJJQVRJT04iLCJjb25zb2xlIiwiaW5mbyIsIm9wdGlvbnMiLCJ0aW1lb3V0Iiwic3VjY2Vzc2Z1bENvbmRpdGlvbnMiLCJjYWxsYmFjayIsImNvbmRpdGlvbnNMZW5ndGgiLCJjb25kaXRpb25zIiwidXNlck9wdGlvbnMiLCJVc2VyT3B0aW9ucyIsImxlbmd0aCIsIkRhdGUiLCJnZXROb3ciLCJnZXRUaW1lIiwiaSIsInBvbGxGb3JDb25kaXRpb24iLCJ3YWl0IiwibXVsdGlwbGllciIsImlzVGltZU91dCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXNBbGxDb25kaXRpb25QYXNzZWQiLCJ3YWl0VGltZSIsInNraXBXYWl0IiwicmVzdWx0IiwicHVzaCIsInNldFRpbWVvdXQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInRlc3QiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==