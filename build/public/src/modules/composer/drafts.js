"use strict";define("composer/drafts",function(){var t={};var e;var a=false;t.init=function(t,a){var o=t.find("textarea");var n=t.find(".draft-icon");o.on("keyup",function(){r();e=setTimeout(function(){i(t,n,a)},1e3)})};function r(){if(e){clearTimeout(e);e=0}}t.getDraft=function(t){console.warn("[composer/drafts] drafts.getDraft is deprecated! Use drafts.get() instead.");return localStorage.getItem(t)};t.get=function(t){return{title:localStorage.getItem(t+":title"),text:localStorage.getItem(t)}};function i(e,a,r){var i;var n;if(o()&&r&&r.save_id&&e.length){n=e.find("input.title").val();i=e.find("textarea").val();if(i.length){localStorage.setItem(r.save_id,i);localStorage.setItem(r.save_id+":title",n);a.removeClass("active");setTimeout(function(){a.addClass("active")})}else{t.removeDraft(r.save_id)}}}t.removeDraft=function(e){if(!e){return}r();t.updateVisibility("available",e);t.updateVisibility("open",e);localStorage.removeItem(e);localStorage.removeItem(e+":title");return};t.updateVisibility=function(t,e,a){if(!o()||!e){return}try{var r=localStorage.getItem("drafts:"+t);r=r?JSON.parse(r):[]}catch(t){console.warn("[composer/drafts] Could not read list of open drafts");var r=[]}var i=r.indexOf(e);if(a&&i===-1){r.push(e)}else if(!a&&i!==-1){r.splice(i,1)}localStorage.setItem("drafts:"+t,JSON.stringify(r))};function o(){if(a){return a}try{localStorage.setItem("test","test");localStorage.removeItem("test");a=true;return true}catch(t){a=false;return false}}return t});
//# sourceMappingURL=drafts.js.map