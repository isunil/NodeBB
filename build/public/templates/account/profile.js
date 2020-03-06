!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,s,r,e,n){var a=t.__escape;return'<div class="account">\r\n\t'+(r(s&&s.breadcrumbs&&s.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+o.blocks.breadcrumbs(t,s,r,e,n)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+a(r(s&&s["cover:url"]))+"); background-position: "+a(r(s&&s["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+a(r(s&&s.uid))+'">\r\n\t\t'+(r(s&&s.picture)?'\r\n\t\t<img src="'+a(r(s&&s.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+a(r(s&&s["icon:bgColor"]))+';" title="'+a(r(s&&s.username))+'">'+a(r(s&&s["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+a(r(s&&s.status))+'" title="[[global:'+a(r(s&&s.status))+']]"></i>\r\n\r\n\t\t'+(r(s&&s.loggedIn)?"\r\n\t\t"+(r(s&&s.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(r(s&&s.isFollowing)?"heart":"plus")+'" title="'+(r(s&&s.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(r(s&&s.loggedIn)?"\r\n\t\t"+(r(s&&s.isSelf)?"":"\r\n\t\t"+(r(s&&s.banned)?"":"\r\n\t\t"+(r(s&&s.config&&s.config.disableChat)?"":'\r\n\t\t<li class="'+(r(s&&s.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+a(r(s&&s.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+a(r(s&&s.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(r(s&&s.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+"\r\n\t\t":"")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(r(s&&s.showHidden)?'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(r(s&&s.isSelf)?"":"\r\n\t\t"+(r(s&&s.canBan)?'\r\n\t\t<li class="'+(r(s&&s.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(r(s&&s.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(r(s&&s.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(r(s&&s.showHidden)?'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(r(s&&s["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(r(s&&s.showHidden)?'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(r(s&&s["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(r(s&&s["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+a(r(s&&s.config&&s.config.relative_path))+"/user/"+a(r(s&&s.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+o.blocks.profile_links(t,s,r,e,n)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(r(s&&s.allowCoverPicture)?"\r\n\t\t"+(r(s&&s.canEdit)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+"\r\n\t\t":"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class="profile row">\r\n\t\t<h1 class="fullname">'+(r(s&&s.fullname)?a(r(s&&s.fullname)):a(r(s&&s.username)))+'</h1>\r\n\t\t<h2 class="username">'+(r(s&&s.banned)?"[[user:banned]]":"@"+a(r(s&&s.username)))+"</h2>\r\n\t\t"+(r(s&&s.isAdminOrGlobalModeratorOrModerator)?"\r\n\t\t"+(r(s&&s.banned)?'\r\n\t\t<div class="text-center">\r\n\t\t'+(r(s&&s.banned_until)?"\r\n\t\t[[user:info.banned-until, "+a(r(s&&s.banned_until_readable))+"]]\r\n\t\t":"\r\n\t\t[[user:info.banned-permanently]]\r\n\t\t")+"\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t\t":"")+"\r\n\r\n\t\t"+(r(s&&s.selectedGroup&&s.selectedGroup.length)?'\r\n\t\t<div class="text-center">\r\n\t\t'+o.blocks.selectedGroup(t,s,r,e,n)+"\r\n\t\t</div>\r\n\t\t<br/>\r\n\t\t":"")+"\r\n\r\n\t\t"+(r(s&&s.aboutme)?'\r\n\t\t<span component="aboutme" class="text-center aboutme">'+a(r(s&&s.aboutmeParsed))+"</span>\r\n\t\t":"")+'\r\n\r\n\t\t<div class="account-stats">\r\n\t\t\t'+(r(s&&s["reputation:disabled"])?"":'\r\n\t\t\t<div class="stat">\r\n\t\t\t\t<div class="human-readable-number" title="'+a(r(s&&s.reputation))+'">'+a(r(s&&s.reputation))+'</div>\r\n\t\t\t\t<span class="stat-label">[[global:reputation]]</span>\r\n\t\t\t</div>\r\n\t\t\t')+'\r\n\r\n\t\t\t<div class="stat">\r\n\t\t\t\t<div class="human-readable-number" title="'+a(r(s&&s.postcount))+'">'+a(r(s&&s.postcount))+'</div>\r\n\t\t\t\t<span class="stat-label">[[global:posts]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="stat">\r\n\t\t\t\t<div class="human-readable-number" title="'+a(r(s&&s.profileviews))+'">'+a(r(s&&s.profileviews))+'</div>\r\n\t\t\t\t<span class="stat-label">[[user:profile_views]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="stat">\r\n\t\t\t\t<div class="human-readable-number" title="'+a(r(s&&s.followerCount))+'">'+a(r(s&&s.followerCount))+'</div>\r\n\t\t\t\t<span class="stat-label">[[user:followers]]</span>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="stat">\r\n\t\t\t\t<div class="human-readable-number"  title="'+a(r(s&&s.followingCount))+'">'+a(r(s&&s.followingCount))+'</div>\r\n\t\t\t\t<span class="stat-label">[[user:following]]</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="text-center profile-meta">\r\n\t\t\t<span>[[user:joined]]</span>\r\n\t\t\t<strong class="timeago" title="'+a(r(s&&s.joindateISO))+'"></strong>\r\n\r\n\t\t\t<span>[[user:lastonline]]</span>\r\n\t\t\t<strong class="timeago" title="'+a(r(s&&s.lastonlineISO))+'"></strong><br />\r\n\r\n\t\t\t'+(r(s&&s.email)?'\r\n\t\t\t<span>[[user:email]]</span>\r\n\t\t\t<strong><i class="fa fa-eye-slash '+a(r(s&&s.emailClass))+'" title="[[user:email_hidden]]"></i> '+a(r(s&&s.email))+"</strong>\r\n\t\t\t":"")+"\r\n\r\n\t\t\t"+(r(s&&s.websiteName)?'\r\n\t\t\t<span>[[user:website]]</span>\r\n\t\t\t<strong><a href="'+a(r(s&&s.websiteLink))+'" rel="nofollow noopener noreferrer">'+a(r(s&&s.websiteName))+"</a></strong>\r\n\t\t\t":"")+"\r\n\r\n\t\t\t"+(r(s&&s.location)?"\r\n\t\t\t<span>[[user:location]]</span>\r\n\t\t\t<strong>"+a(r(s&&s.location))+"</strong>\r\n\t\t\t":"")+"\r\n\r\n\t\t\t"+(r(s&&s.age)?"\r\n\t\t\t<span>[[user:age]]</span>\r\n\t\t\t<strong>"+a(r(s&&s.age))+"</strong>\r\n\t\t\t":"")+'\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<hr />\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-xs-12 account-block hidden">\r\n\t\t\t<div class="account-picture-block text-center">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class="account-username"> '+a(r(s&&s.username))+"</span>\r\n\t\t\t\t</span>\r\n\r\n\t\t\t\t"+(r(s&&s.isSelf)?"":"\r\n\t\t\t\t"+(r(s&&s.isFollowing)?'\r\n\t\t\t\t<a component="account/unfollow" href="#" class="btn btn-warning btn-sm">[[user:unfollow]]</a>\r\n\t\t\t\t':'\r\n\t\t\t\t<a component="account/follow" href="#" class="btn btn-success btn-sm">[[user:follow]]</a>\r\n\t\t\t\t')+"\r\n\t\t\t\t")+"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t"+(r(s&&s.groups&&s.groups.length)?'\r\n\t<div class="row">\r\n\t\t<div class="col-xs-12 hidden">\r\n\t\t\t'+o.blocks.groups(t,s,r,e,n)+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\r\n\t"+(r(s&&s.ips&&s.ips.length)?'\r\n\t<div class="row">\r\n\t\t<div class="col-xs-12 hidden">\r\n\t\t\t<div class="panel-heading">\r\n\t\t\t\t<h3 class="panel-title">[[global:recentips]]</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t'+o.blocks.ips(t,s,r,e,n)+"\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+'\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-lg-6 col-xs-12">\r\n\t\t\t<h1>[[pages:account/best, '+a(r(s&&s.username))+']]</h1>\r\n\r\n\t\t\t<div class="col-xs-12">\r\n\t\t\t\t'+(r(s&&s.bestPosts&&s.bestPosts.length)?"":'\r\n\t\t\t\t<div class="alert alert-warning">[[user:has_no_posts]]</div>\r\n\t\t\t\t')+'\r\n\r\n\t\t\t\t<ul component="posts" class="posts-list">\r\n\t\t\t\t'+o.blocks.bestPosts(t,s,r,e,n)+'\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-lg-6 col-xs-12">\r\n\t\t\t<h1>[[pages:account/latest-posts, '+a(r(s&&s.username))+']]</h1>\r\n\r\n\t\t\t<div class="col-xs-12">\r\n\t\t\t\t'+(r(s&&s.latestPosts&&s.latestPosts.length)?"":'\r\n\t\t\t\t<div class="alert alert-warning">[[user:has_no_posts]]</div>\r\n\t\t\t\t')+'\r\n\t\t\t\t<ul component="posts" class="posts-list">\r\n\t\t\t\t'+o.blocks.latestPosts(t,s,r,e,n)+'\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id="user-action-alert" class="alert alert-success hide"></div>\r\n</div>\r\n'}return o.blocks={breadcrumbs:function(t,e,n,s){var a=t.__escape;return s(n(e&&e.breadcrumbs),function(t,s,r){return"\r\n\t<li"+(s===r-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(s===r-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+a(s)+'" />\r\n\t\t'+(s===r-1?"":'<a href="'+a(n(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="item">')+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+a(n(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(s===r-1?"\r\n\t\t\t\t"+(n(e&&e["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(n(e&&e.rssFeedUrl)?'<a target="_blank" href="'+a(n(e&&e.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(s===r-1?"":"</a>")+"\r\n\t</li>\r\n\t"},function(){return""})},profile_links:function(t,r,e,s){var n=t.__escape;return s(e(r&&r.profile_links),function(t,s){return"\r\n\t\t"+(0===s?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+n(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].id))+'" class="plugin-link '+(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].public)?"public":"private")+'"><a href="'+n(e(r&&r.config&&r.config.relative_path))+"/user/"+n(e(r&&r.userslug))+"/"+n(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].route))+'">'+(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].icon)?'<i class="fa fa-fw '+n(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].icon))+'"></i> ':"")+n(e(r&&r.profile_links&&r.profile_links[t]&&r.profile_links[t].name))+"</a></li>\r\n\t\t"},function(){return""})},selectedGroup:function(t,s,r,e){var n=t.__escape;return e(r(s&&s.selectedGroup),function(t){return"\r\n\t\t"+(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].slug)?'\r\n\t\t\t<a href="'+n(r(s&&s.config&&s.config.relative_path))+"/groups/"+n(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].slug))+'"><small class="label group-label inline-block" style="color:'+n(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].textColor))+";background-color: "+n(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].labelColor))+';">'+(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].icon)?'<i class="fa '+n(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].icon))+'"></i> ':"")+n(r(s&&s.selectedGroup&&s.selectedGroup[t]&&s.selectedGroup[t].userTitle))+"</small></a>\r\n\t\t":"")+"\r\n\t\t"},function(){return""})},groups:function(t,s,r,e){var n=t.__escape;return e(r(s&&s.groups),function(t){return'\r\n\t\t\t<a href="'+n(r(s&&s.config&&s.config.relative_path))+"/groups/"+n(r(s&&s.groups&&s.groups[t]&&s.groups[t].slug))+'"><span class="label group-label inline-block" style="background-color: '+n(r(s&&s.groups&&s.groups[t]&&s.groups[t].labelColor))+';">'+(r(s&&s.groups&&s.groups[t]&&s.groups[t].icon)?'<i class="fa '+n(r(s&&s.groups&&s.groups[t]&&s.groups[t].icon))+'"></i> ':"")+n(r(s&&s.groups&&s.groups[t]&&s.groups[t].userTitle))+"</span></a>\r\n\t\t\t"},function(){return""})},ips:function(t,s,r,e){var n=t.__escape;return e(r(s&&s.ips),function(t){return"\r\n\t\t\t\t<div>"+n(r(s&&s.ips&&s.ips[t]))+"</div>\r\n\t\t\t"},function(){return""})},bestPosts:function(s,r,e,t,n){var a=s.__escape;return t(e(r&&r.bestPosts),function(t){return'\r\n\t\t\t\t<li component="post" class="posts-list-item row'+(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].deleted)||e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].topic&&r.bestPosts[t].topic.deleted)?" deleted":"")+'" data-pid="'+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].pid))+'" data-uid="'+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].uid))+'">\r\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\r\n        <a class="topic-title" href="'+a(e(r&&r.config&&r.config.relative_path))+"/post/"+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].pid))+'">\r\n            '+(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].isMainPost)?"":"RE: ")+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].topic&&r.bestPosts[t].topic.title))+'\r\n        </a>\r\n\r\n        <div component="post/content" class="content">\r\n            '+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].content))+'\r\n        </div>\r\n\r\n        <small class="topic-category"><a href="'+a(e(r&&r.config&&r.config.relative_path))+"/category/"+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].category&&r.bestPosts[t].category.slug))+'">[[global:posted_in, '+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].category&&r.bestPosts[t].category.name))+']]</a></small>\r\n\r\n        <div class="post-info">\r\n            <a href="'+a(e(r&&r.config&&r.config.relative_path))+"/user/"+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].user&&r.bestPosts[t].user.userslug))+'">'+a(n(r,s,"buildAvatar",[e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].user),"md",e(r&&r.true),"user-img"]))+'</a>\r\n\r\n            <div class="post-author">\r\n                <a href="'+a(e(r&&r.config&&r.config.relative_path))+"/user/"+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].user&&r.bestPosts[t].user.userslug))+'">'+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].user&&r.bestPosts[t].user.username))+'</a><br />\r\n                <span class="timeago" title="'+a(e(r&&r.bestPosts&&r.bestPosts[t]&&r.bestPosts[t].timestampISO))+'"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\t\t\t\t'},function(){return""})},latestPosts:function(s,r,e,t,n){var a=s.__escape;return t(e(r&&r.latestPosts),function(t){return'\r\n\t\t\t\t<li component="post" class="posts-list-item row'+(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].deleted)||e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].topic&&r.latestPosts[t].topic.deleted)?" deleted":"")+'" data-pid="'+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].pid))+'" data-uid="'+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].uid))+'">\r\n    <div class="col-lg-11 col-sm-10 col-xs-9 post-body">\r\n        <a class="topic-title" href="'+a(e(r&&r.config&&r.config.relative_path))+"/post/"+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].pid))+'">\r\n            '+(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].isMainPost)?"":"RE: ")+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].topic&&r.latestPosts[t].topic.title))+'\r\n        </a>\r\n\r\n        <div component="post/content" class="content">\r\n            '+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].content))+'\r\n        </div>\r\n\r\n        <small class="topic-category"><a href="'+a(e(r&&r.config&&r.config.relative_path))+"/category/"+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].category&&r.latestPosts[t].category.slug))+'">[[global:posted_in, '+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].category&&r.latestPosts[t].category.name))+']]</a></small>\r\n\r\n        <div class="post-info">\r\n            <a href="'+a(e(r&&r.config&&r.config.relative_path))+"/user/"+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].user&&r.latestPosts[t].user.userslug))+'">'+a(n(r,s,"buildAvatar",[e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].user),"md",e(r&&r.true),"user-img"]))+'</a>\r\n\r\n            <div class="post-author">\r\n                <a href="'+a(e(r&&r.config&&r.config.relative_path))+"/user/"+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].user&&r.latestPosts[t].user.userslug))+'">'+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].user&&r.latestPosts[t].user.username))+'</a><br />\r\n                <span class="timeago" title="'+a(e(r&&r.latestPosts&&r.latestPosts[t]&&r.latestPosts[t].timestampISO))+'"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>\r\n\t\t\t\t'},function(){return""})}},o});