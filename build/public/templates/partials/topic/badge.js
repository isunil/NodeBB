!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function u(s,e,o,t,r){s.__escape;return u.blocks["posts.user.selectedGroups"](s,e,o,t,r)}return u.blocks={"posts.user.selectedGroups":function(s,e,o,t){var r=s.__escape;return t(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups),function(s){return"\r\n"+(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].slug)?'\r\n<a href="'+r(o(e&&e.config&&e.config.relative_path))+"/groups/"+r(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].slug))+'"><small class="label group-label inline-block" style="color:'+r(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].textColor))+";background-color: "+r(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].labelColor))+';">'+(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].icon)?'<i class="fa '+r(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].icon))+'"></i> ':"")+r(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroups&&e.posts.user.selectedGroups[s]&&e.posts.user.selectedGroups[s].userTitle))+"</small></a>\r\n":"")+"\r\n"},function(){return""})}},u});