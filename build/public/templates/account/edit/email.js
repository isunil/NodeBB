!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,r,n,e,a){var i=t.__escape;return'<div class="account">\r\n\t'+(n(r&&r.breadcrumbs&&r.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+s.blocks.breadcrumbs(t,r,n,e,a)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+i(n(r&&r["cover:url"]))+"); background-position: "+i(n(r&&r["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+i(n(r&&r.uid))+'">\r\n\t\t'+(n(r&&r.picture)?'\r\n\t\t<img src="'+i(n(r&&r.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+i(n(r&&r["icon:bgColor"]))+';" title="'+i(n(r&&r.username))+'">'+i(n(r&&r["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+i(n(r&&r.status))+'" title="[[global:'+i(n(r&&r.status))+']]"></i>\r\n\r\n\t\t'+(n(r&&r.loggedIn)?"\r\n\t\t"+(n(r&&r.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(n(r&&r.isFollowing)?"heart":"plus")+'" title="'+(n(r&&r.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(n(r&&r.loggedIn)?"\r\n\t\t"+(n(r&&r.isSelf)?"":"\r\n\t\t"+(n(r&&r.banned)?"":"\r\n\t\t"+(n(r&&r.config&&r.config.disableChat)?"":'\r\n\t\t<li class="'+(n(r&&r.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+i(n(r&&r.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+i(n(r&&r.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(n(r&&r.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+"\r\n\t\t":"")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(n(r&&r.showHidden)?'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(n(r&&r.isSelf)?"":"\r\n\t\t"+(n(r&&r.canBan)?'\r\n\t\t<li class="'+(n(r&&r.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(n(r&&r.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(n(r&&r.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(n(r&&r.showHidden)?'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(n(r&&r["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(n(r&&r.showHidden)?'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(n(r&&r["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(n(r&&r["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+i(n(r&&r.config&&r.config.relative_path))+"/user/"+i(n(r&&r.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+s.blocks.profile_links(t,r,n,e,a)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(n(r&&r.allowCoverPicture)?"\r\n\t\t"+(n(r&&r.canEdit)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+"\r\n\t\t":"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<form class="form-horizontal edit-form">\r\n\t\t<div class="control-group">\r\n\t\t\t<label class="control-label" for="inputNewEmail">[[user:email]]</label>\r\n\t\t\t<div class="controls">\r\n\t\t\t\t<input class="form-control" type="text" id="inputNewEmail" placeholder="[[user:email]]" value="'+i(n(r&&r.email))+'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t\x3c!-- disables autocomplete on FF --\x3e<input type="password" style="display:none">\r\n\r\n\t\t'+(n(r&&r.isSelf)?'\r\n\t\t<div class="control-group">\r\n\t\t\t<label class="control-label" for="inputCurrentPassword">[[user:current_password]]</label>\r\n\t\t\t<div class="controls">\r\n\t\t\t\t<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""'+(n(r&&r.hasPassword)?"":" disabled")+">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+'\r\n\r\n\t\t<input type="hidden" name="uid" id="inputUID" value="'+i(n(r&&r.uid))+'" />\r\n\r\n\t\t<br/>\r\n\t\t<div class="form-actions">\r\n\t\t\t<button id="submitBtn" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_email]]</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n'}return s.blocks={breadcrumbs:function(t,e,a,r){var i=t.__escape;return r(a(e&&e.breadcrumbs),function(t,r,n){return"\r\n\t<li"+(r===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(r===n-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+i(r)+'" />\r\n\t\t'+(r===n-1?"":'<a href="'+i(a(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="item">')+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+i(a(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(r===n-1?"\r\n\t\t\t\t"+(a(e&&e["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(a(e&&e.rssFeedUrl)?'<a target="_blank" href="'+i(a(e&&e.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(r===n-1?"":"</a>")+"\r\n\t</li>\r\n\t"},function(){return""})},profile_links:function(t,n,e,r){var a=t.__escape;return r(e(n&&n.profile_links),function(t,r){return"\r\n\t\t"+(0===r?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+a(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].id))+'" class="plugin-link '+(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].public)?"public":"private")+'"><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+"/"+a(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].route))+'">'+(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon)?'<i class="fa fa-fw '+a(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon))+'"></i> ':"")+a(e(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].name))+"</a></li>\r\n\t\t"},function(){return""})}},s});