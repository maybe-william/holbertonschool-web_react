(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{13:function(t,n,e){"use strict";e.r(n),e.d(n,"getCLS",(function(){return v})),e.d(n,"getFCP",(function(){return g})),e.d(n,"getFID",(function(){return h})),e.d(n,"getLCP",(function(){return y})),e.d(n,"getTTFB",(function(){return F}));var i,a,r=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:r(),isFinal:!1}},u=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},c=!1,s=!1,d=function(t){c=!t.persisted},f=function(){addEventListener("pagehide",d),addEventListener("beforeunload",(function(){}))},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:c})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},v=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=u("layout-shift",a);r&&(n=l(t,i,r,e),p((function(t){var e=t.isUnloading;r.takeRecords().map(a),e&&(i.isFinal=!0),n()})))},m=function(){return void 0===i&&(i="hidden"===document.visibilityState?0:1/0,p((function(t){var n=t.timeStamp;return i=n}),!0)),{get timeStamp(){return i}}},g=function(t){var n,e=o("FCP"),i=m(),a=u("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));a&&(n=l(t,e,a))},h=function(t){var n=o("FID"),e=m(),i=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,r())},a=u("first-input",i),r=l(t,n,a);a?p((function(){a.takeRecords().map(i),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],r())}))},S=function(){return a||(a=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),a},y=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("LCP"),a=m(),r=function(t){var e=t.startTime;e<a.timeStamp?(i.value=e,i.entries.push(t)):i.isFinal=!0,n()},c=u("largest-contentful-paint",r);if(c){n=l(t,i,c,e);var s=function(){i.isFinal||(c.takeRecords().map(r),i.isFinal=!0,n())};S().then(s),p(s,!0)}},F=function(t){var n,e=o("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViLXZpdGFscy9kaXN0L3dlYi12aXRhbHMuZXM1Lm1pbi5qcyJdLCJuYW1lcyI6WyJ2IiwidCIsIm4iLCJlIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuYW1lIiwidmFsdWUiLCJkZWx0YSIsImVudHJpZXMiLCJpZCIsImlzRmluYWwiLCJhIiwiUGVyZm9ybWFuY2VPYnNlcnZlciIsInN1cHBvcnRlZEVudHJ5VHlwZXMiLCJpbmNsdWRlcyIsImdldEVudHJpZXMiLCJtYXAiLCJvYnNlcnZlIiwidHlwZSIsImJ1ZmZlcmVkIiwiciIsIm8iLCJzIiwicGVyc2lzdGVkIiwidSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjIiwidGltZVN0YW1wIiwiZG9jdW1lbnQiLCJ2aXNpYmlsaXR5U3RhdGUiLCJpc1VubG9hZGluZyIsImNhcHR1cmUiLCJvbmNlIiwibCIsImRpc2Nvbm5lY3QiLCJwIiwiaGFkUmVjZW50SW5wdXQiLCJwdXNoIiwidGFrZVJlY29yZHMiLCJkIiwic3RhcnRUaW1lIiwiZiIsInByb2Nlc3NpbmdTdGFydCIsIndpbmRvdyIsInBlcmZNZXRyaWNzIiwib25GaXJzdElucHV0RGVsYXkiLCJlbnRyeVR5cGUiLCJ0YXJnZXQiLCJjYW5jZWxhYmxlIiwibSIsIlByb21pc2UiLCJwYXNzaXZlIiwiZyIsInRoZW4iLCJoIiwicGVyZm9ybWFuY2UiLCJnZXRFbnRyaWVzQnlUeXBlIiwidGltaW5nIiwibWF4IiwibmF2aWdhdGlvblN0YXJ0IiwicmVzcG9uc2VTdGFydCIsInJlYWR5U3RhdGUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoieUZBQUEsZ0ZBQUFBLEtBQUEsMEhBQUlDLEVBQUVDLEVBQUVDLEVBQUUsV0FBVyxNQUFNLEdBQUdDLE9BQU9DLEtBQUtDLE1BQU0sS0FBS0YsT0FBT0csS0FBS0MsTUFBTSxjQUFj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WCxFQUFFeUIsRUFBRVosUUFBUTZCLEtBQUs1QyxJQUFJMkIsRUFBRVYsU0FBUSxFQUFHaEIsS0FBSzhCLEVBQUViLEVBQUUsMkJBQTJCVyxHQUFHLEdBQUdFLEVBQUUsQ0FBQzlCLEVBQUV1QyxFQUFFeEMsRUFBRTJCLEVBQUVJLEVBQUU3QixHQUFHLElBQUl3QyxFQUFFLFdBQVdmLEVBQUVWLFVBQVVjLEVBQUVjLGNBQWN0QixJQUFJTSxHQUFHRixFQUFFVixTQUFRLEVBQUdoQixNQUFNdUQsSUFBSUksS0FBS2xCLEdBQUdULEVBQUVTLEdBQUUsS0FBTW1CLEVBQUUsU0FBUzdELEdBQUcsSUFBSUMsRUFBRUMsRUFBRU8sRUFBRSxRQUFRUixFQUFFLFdBQVcsSUFBSSxJQUFJQSxFQUFFNkQsWUFBWUMsaUJBQWlCLGNBQWMsSUFBSSxXQUFXLElBQUkvRCxFQUFFOEQsWUFBWUUsT0FBTy9ELEVBQUUsQ0FBQ29ELFVBQVUsYUFBYU4sVUFBVSxHQUFHLElBQUksSUFBSTdDLEtBQUtGLEVBQUUsb0JBQW9CRSxHQUFHLFdBQVdBLElBQUlELEVBQUVDLEdBQUdJLEtBQUsyRCxJQUFJakUsRUFBRUUsR0FBR0YsRUFBRWtFLGdCQUFnQixJQUFJLE9BQU9qRSxFQUFoTCxHQUFxTEMsRUFBRVcsTUFBTVgsRUFBRVksTUFBTWIsRUFBRWtFLGNBQWNqRSxFQUFFYSxRQUFRLENBQUNkLEdBQUdDLEVBQUVlLFNBQVEsRUFBR2pCLEVBQUVFLEdBQUcsTUFBTUYsTUFBTSxhQUFhbUMsU0FBU2lDLFdBQVdDLFdBQVdwRSxFQUFFLEdBQUcrQixpQkFBaUIsV0FBVy9CIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHQsbixlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIi5jb25jYXQoRGF0ZS5ub3coKSxcIi1cIikuY29uY2F0KE1hdGguZmxvb3IoODk5OTk5OTk5OTk5OSpNYXRoLnJhbmRvbSgpKSsxZTEyKX0saT1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06LTE7cmV0dXJue25hbWU6dCx2YWx1ZTpuLGRlbHRhOjAsZW50cmllczpbXSxpZDplKCksaXNGaW5hbDohMX19LGE9ZnVuY3Rpb24odCxuKXt0cnl7aWYoUGVyZm9ybWFuY2VPYnNlcnZlci5zdXBwb3J0ZWRFbnRyeVR5cGVzLmluY2x1ZGVzKHQpKXt2YXIgZT1uZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuZ2V0RW50cmllcygpLm1hcChuKX0pKTtyZXR1cm4gZS5vYnNlcnZlKHt0eXBlOnQsYnVmZmVyZWQ6ITB9KSxlfX1jYXRjaCh0KXt9fSxyPSExLG89ITEscz1mdW5jdGlvbih0KXtyPSF0LnBlcnNpc3RlZH0sdT1mdW5jdGlvbigpe2FkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLHMpLGFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwoZnVuY3Rpb24oKXt9KSl9LGM9ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtvfHwodSgpLG89ITApLGFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsKGZ1bmN0aW9uKG4pe3ZhciBlPW4udGltZVN0YW1wO1wiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUmJnQoe3RpbWVTdGFtcDplLGlzVW5sb2FkaW5nOnJ9KX0pLHtjYXB0dXJlOiEwLG9uY2U6bn0pfSxsPWZ1bmN0aW9uKHQsbixlLGkpe3ZhciBhO3JldHVybiBmdW5jdGlvbigpe2UmJm4uaXNGaW5hbCYmZS5kaXNjb25uZWN0KCksbi52YWx1ZT49MCYmKGl8fG4uaXNGaW5hbHx8XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSkmJihuLmRlbHRhPW4udmFsdWUtKGF8fDApLChuLmRlbHRhfHxuLmlzRmluYWx8fHZvaWQgMD09PWEpJiYodChuKSxhPW4udmFsdWUpKX19LHA9ZnVuY3Rpb24odCl7dmFyIG4sZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdLHI9aShcIkNMU1wiLDApLG89ZnVuY3Rpb24odCl7dC5oYWRSZWNlbnRJbnB1dHx8KHIudmFsdWUrPXQudmFsdWUsci5lbnRyaWVzLnB1c2godCksbigpKX0scz1hKFwibGF5b3V0LXNoaWZ0XCIsbyk7cyYmKG49bCh0LHIscyxlKSxjKChmdW5jdGlvbih0KXt2YXIgZT10LmlzVW5sb2FkaW5nO3MudGFrZVJlY29yZHMoKS5tYXAobyksZSYmKHIuaXNGaW5hbD0hMCksbigpfSkpKX0sZD1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10JiYodD1cImhpZGRlblwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlPzA6MS8wLGMoKGZ1bmN0aW9uKG4pe3ZhciBlPW4udGltZVN0YW1wO3JldHVybiB0PWV9KSwhMCkpLHtnZXQgdGltZVN0YW1wKCl7cmV0dXJuIHR9fX0sdj1mdW5jdGlvbih0KXt2YXIgbixlPWkoXCJGQ1BcIikscj1kKCksbz1hKFwicGFpbnRcIiwoZnVuY3Rpb24odCl7XCJmaXJzdC1jb250ZW50ZnVsLXBhaW50XCI9PT10Lm5hbWUmJnQuc3RhcnRUaW1lPHIudGltZVN0YW1wJiYoZS52YWx1ZT10LnN0YXJ0VGltZSxlLmlzRmluYWw9ITAsZS5lbnRyaWVzLnB1c2godCksbigpKX0pKTtvJiYobj1sKHQsZSxvKSl9LGY9ZnVuY3Rpb24odCl7dmFyIG49aShcIkZJRFwiKSxlPWQoKSxyPWZ1bmN0aW9uKHQpe3Quc3RhcnRUaW1lPGUudGltZVN0YW1wJiYobi52YWx1ZT10LnByb2Nlc3NpbmdTdGFydC10LnN0YXJ0VGltZSxuLmVudHJpZXMucHVzaCh0KSxuLmlzRmluYWw9ITAscygpKX0sbz1hKFwiZmlyc3QtaW5wdXRcIixyKSxzPWwodCxuLG8pO28/YygoZnVuY3Rpb24oKXtvLnRha2VSZWNvcmRzKCkubWFwKHIpLG8uZGlzY29ubmVjdCgpfSksITApOndpbmRvdy5wZXJmTWV0cmljcyYmd2luZG93LnBlcmZNZXRyaWNzLm9uRmlyc3RJbnB1dERlbGF5JiZ3aW5kb3cucGVyZk1ldHJpY3Mub25GaXJzdElucHV0RGVsYXkoKGZ1bmN0aW9uKHQsaSl7aS50aW1lU3RhbXA8ZS50aW1lU3RhbXAmJihuLnZhbHVlPXQsbi5pc0ZpbmFsPSEwLG4uZW50cmllcz1be2VudHJ5VHlwZTpcImZpcnN0LWlucHV0XCIsbmFtZTppLnR5cGUsdGFyZ2V0OmkudGFyZ2V0LGNhbmNlbGFibGU6aS5jYW5jZWxhYmxlLHN0YXJ0VGltZTppLnRpbWVTdGFtcCxwcm9jZXNzaW5nU3RhcnQ6aS50aW1lU3RhbXArdH1dLHMoKSl9KSl9LG09ZnVuY3Rpb24oKXtyZXR1cm4gbnx8KG49bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3JldHVybltcInNjcm9sbFwiLFwia2V5ZG93blwiLFwicG9pbnRlcmRvd25cIl0ubWFwKChmdW5jdGlvbihuKXthZGRFdmVudExpc3RlbmVyKG4sdCx7b25jZTohMCxwYXNzaXZlOiEwLGNhcHR1cmU6ITB9KX0pKX0pKSksbn0sZz1mdW5jdGlvbih0KXt2YXIgbixlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV0scj1pKFwiTENQXCIpLG89ZCgpLHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5zdGFydFRpbWU7ZTxvLnRpbWVTdGFtcD8oci52YWx1ZT1lLHIuZW50cmllcy5wdXNoKHQpKTpyLmlzRmluYWw9ITAsbigpfSx1PWEoXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIixzKTtpZih1KXtuPWwodCxyLHUsZSk7dmFyIHA9ZnVuY3Rpb24oKXtyLmlzRmluYWx8fCh1LnRha2VSZWNvcmRzKCkubWFwKHMpLHIuaXNGaW5hbD0hMCxuKCkpfTttKCkudGhlbihwKSxjKHAsITApfX0saD1mdW5jdGlvbih0KXt2YXIgbixlPWkoXCJUVEZCXCIpO249ZnVuY3Rpb24oKXt0cnl7dmFyIG49cGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF18fGZ1bmN0aW9uKCl7dmFyIHQ9cGVyZm9ybWFuY2UudGltaW5nLG49e2VudHJ5VHlwZTpcIm5hdmlnYXRpb25cIixzdGFydFRpbWU6MH07Zm9yKHZhciBlIGluIHQpXCJuYXZpZ2F0aW9uU3RhcnRcIiE9PWUmJlwidG9KU09OXCIhPT1lJiYobltlXT1NYXRoLm1heCh0W2VdLXQubmF2aWdhdGlvblN0YXJ0LDApKTtyZXR1cm4gbn0oKTtlLnZhbHVlPWUuZGVsdGE9bi5yZXNwb25zZVN0YXJ0LGUuZW50cmllcz1bbl0sZS5pc0ZpbmFsPSEwLHQoZSl9Y2F0Y2godCl7fX0sXCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4sMCk6YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsbil9O2V4cG9ydHtwIGFzIGdldENMUyx2IGFzIGdldEZDUCxmIGFzIGdldEZJRCxnIGFzIGdldExDUCxoIGFzIGdldFRURkJ9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==