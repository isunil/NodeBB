!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,n,e,r,o){var i=t.__escape;return'<div class="account">\r\n\t'+(e(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\r\n<ol class="breadcrumb" itemscope="itemscope" itemprop="breadcrumb" itemtype="http://schema.org/BreadcrumbList">\r\n\t'+a.blocks.breadcrumbs(t,n,e,r,o)+"\r\n</ol>\r\n":"")+'\r\n\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+i(e(n&&n["cover:url"]))+"); background-position: "+i(e(n&&n["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+i(e(n&&n.uid))+'">\r\n\t\t'+(e(n&&n.picture)?'\r\n\t\t<img src="'+i(e(n&&n.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+i(e(n&&n["icon:bgColor"]))+';" title="'+i(e(n&&n.username))+'">'+i(e(n&&n["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+i(e(n&&n.status))+'" title="[[global:'+i(e(n&&n.status))+']]"></i>\r\n\r\n\t\t'+(e(n&&n.loggedIn)?"\r\n\t\t"+(e(n&&n.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(e(n&&n.isFollowing)?"heart":"plus")+'" title="'+(e(n&&n.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(e(n&&n.loggedIn)?"\r\n\t\t"+(e(n&&n.isSelf)?"":"\r\n\t\t"+(e(n&&n.banned)?"":"\r\n\t\t"+(e(n&&n.config&&n.config.disableChat)?"":'\r\n\t\t<li class="'+(e(n&&n.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+i(e(n&&n.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+i(e(n&&n.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(e(n&&n.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+"\r\n\t\t":"")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(e(n&&n.showHidden)?'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(e(n&&n.isSelf)?"":"\r\n\t\t"+(e(n&&n.canBan)?'\r\n\t\t<li class="'+(e(n&&n.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(e(n&&n.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(e(n&&n.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(e(n&&n.showHidden)?'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(e(n&&n.showHidden)?'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(e(n&&n["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+i(e(n&&n.config&&n.config.relative_path))+"/user/"+i(e(n&&n.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+a.blocks.profile_links(t,n,e,r,o)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(e(n&&n.allowCoverPicture)?"\r\n\t\t"+(e(n&&n.canEdit)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+"\r\n\t\t":"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-xs-12 col-md-6">\r\n\t\t\t'+(e(n&&n.disableCustomUserSkins)?"":'\r\n\t\t\t<h4>[[user:select-skin]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<select class="form-control" id="bootswatchSkin" data-property="bootswatchSkin">\r\n\t\t\t\t\t'+a.blocks.bootswatchSkinOptions(t,n,e,r,o)+"\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t")+"\r\n\r\n\t\t\t"+(e(n&&n.allowUserHomePage)?'\r\n\t\t\t<h4>[[user:select-homepage]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:homepage]]</label>\r\n\t\t\t\t\t<select class="form-control" data-property="homePageRoute">\r\n\t\t\t\t\t\t<option value="none">None</option>\r\n\t\t\t\t\t\t'+a.blocks.homePageRoutes(t,n,e,r,o)+'\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<p class="help-block">[[user:homepage_description]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id="homePageCustom" class="form-group" style="display: none;">\r\n\t\t\t\t\t<label for="homePageCustom">[[user:custom_route]]</label>\r\n\t\t\t\t\t<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="'+i(e(n&&n.settings&&n.settings.homePageRoute))+'"/>\r\n\t\t\t\t\t<p class="help-block">[[user:custom_route_help]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t':"")+'\r\n\r\n\t\t\t<h4>[[global:privacy]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t'+(e(n&&n.hideEmail)?"":'\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="showemail" '+(e(n&&n.settings&&n.settings.showemail)?"checked ":"")+"/> <strong>[[user:show_email]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t")+"\r\n\r\n\t\t\t\t"+(e(n&&n.hideFullname)?"":'\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="showfullname" '+(e(n&&n.settings&&n.settings.showfullname)?"checked":"")+"/> <strong>[[user:show_fullname]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t")+"\r\n\t\t\t\t"+(e(n&&n.config&&n.config.disableChat)?"":'\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="restrictChat" '+(e(n&&n.settings&&n.settings.restrictChat)?"checked":"")+"/> <strong>[[user:restrict_chats]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t")+'\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[user:browsing]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="openOutgoingLinksInNewTab" '+(e(n&&n.settings&&n.settings.openOutgoingLinksInNewTab)?"checked":"")+"/> <strong>[[user:open_links_in_new_tab]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t"+(e(n&&n.inTopicSearchAvailable)?'\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="topicSearchEnabled" '+(e(n&&n.settings&&n.settings.topicSearchEnabled)?"checked":"")+'/> <strong>[[user:enable_topic_searching]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class="help-block">[[user:topic_search_help]]</p>\r\n\t\t\t\t':"")+'\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="scrollToMyPost" '+(e(n&&n.settings&&n.settings.scrollToMyPost)?"checked":"")+'/> <strong>[[user:scroll_to_my_post]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[global:pagination]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="usePagination" '+(e(n&&n.settings&&n.settings.usePagination)?"checked":"")+"> <strong>[[user:paginate_description]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<strong>[[user:topics_per_page]] ([[user:max_items_per_page, "+i(e(n&&n.maxTopicsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="topicsPerPage" value="'+i(e(n&&n.settings&&n.settings.topicsPerPage))+'"><br />\r\n\t\t\t\t<strong>[[user:posts_per_page]] ([[user:max_items_per_page, '+i(e(n&&n.maxPostsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="postsPerPage" value="'+i(e(n&&n.settings&&n.settings.postsPerPage))+'"><br />\r\n\t\t\t</div>\r\n\r\n\t\t\t'+(e(n&&n.disableEmailSubscriptions)?"":'\r\n\t\t\t<h4>[[global:email]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:digest_label]]</label>\r\n\t\t\t\t\t<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">\r\n\t\t\t\t\t\t'+a.blocks.dailyDigestFreqOptions(t,n,e,r,o)+'\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<p class="help-block">[[user:digest_description]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t')+"\r\n\r\n\t\t\t"+a.blocks.customSettings(t,n,e,r,o)+'\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="col-xs-12 col-md-6">\r\n\t\t\t<h4>[[global:language]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-lg-12">\r\n\t\t\t\t\t\t<select data-property="userLang" class="form-control">\r\n\t\t\t\t\t\t\t'+a.blocks.languages(t,n,e,r,o)+"\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t"+(e(n&&n.isAdmin)?"\r\n\t\t\t\t"+(e(n&&n.isSelf)?'\r\n\t\t\t\t<label>[[user:acp_language]]</label>\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-lg-12">\r\n\t\t\t\t\t\t<select data-property="acpLang" class="form-control">\r\n\t\t\t\t\t\t\t'+a.blocks.acpLanguages(t,n,e,r,o)+"\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t":"")+"\r\n\t\t\t\t":"")+'\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[topic:watch]]</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnCreate" '+(e(n&&n.settings&&n.settings.followTopicsOnCreate)?"checked ":"")+'/> <strong>[[user:follow_topics_you_create]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnReply" '+(e(n&&n.settings&&n.settings.followTopicsOnReply)?"checked":"")+'/> <strong>[[user:follow_topics_you_reply_to]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t<label>[[user:default-category-watch-state]]</label>\r\n\t\t\t\t\t<select class="form-control" data-property="categoryWatchState">\r\n\t\t\t\t\t\t<option value="watching" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.watching)?"selected":"")+'>[[category:watching]]</option>\r\n\t\t\t\t\t\t<option value="notwatching" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.notwatching)?"selected":"")+'>[[category:not-watching]]</option>\r\n\t\t\t\t\t\t<option value="ignoring" '+(e(n&&n.categoryWatchState&&n.categoryWatchState.ignoring)?"selected":"")+'>[[category:ignoring]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<h4>[[user:notifications_and_sounds]]</h4>\r\n\t\t\t<div class="well">\r\n\r\n\t\t\t\t'+a.blocks.notificationSettings(t,n,e,r,o)+'\r\n\r\n\t\t\t\t<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-xs-9">\r\n\t\t\t\t\t\t<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">\r\n\t\t\t\t\t\t\t'+a.blocks.upvoteNotifFreq(t,n,e,r,o)+'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label for="notification">[[user:notification-sound]]</label>\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-xs-9">\r\n\t\t\t\t\t\t<select class="form-control" id="notification" name="notification" data-property="notificationSound">\r\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\r\n\t\t\t\t\t\t\t'+a.blocks.notificationSound(t,n,e,r,o)+'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="btn-group col-xs-3">\r\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t'+(e(n&&n.config&&n.config.disableChat)?"":'\r\n\t\t\t\t<label for="chat-incoming">[[user:incoming-message-sound]]</label>\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-xs-9">\r\n\t\t\t\t\t\t<select class="form-control" id="chat-incoming" name="chat-incoming" data-property="incomingChatSound">\r\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\r\n\t\t\t\t\t\t\t'+a.blocks.incomingChatSound(t,n,e,r,o)+'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="btn-group col-xs-3">\r\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label for="chat-outgoing">[[user:outgoing-message-sound]]</label>\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-xs-9">\r\n\t\t\t\t\t\t<select class="form-control" id="chat-outgoing" name="chat-outgoing" data-property="outgoingChatSound">\r\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\r\n\t\t\t\t\t\t\t'+a.blocks.outgoingChatSound(t,n,e,r,o)+'\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="btn-group col-xs-3">\r\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t')+'\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="form-actions">\r\n\t\t<a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>\r\n\t</div>\r\n</div>\r\n\r\n'}return a.blocks={breadcrumbs:function(t,r,o,n){var i=t.__escape;return n(o(r&&r.breadcrumbs),function(t,n,e){return"\r\n\t<li"+(n===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemprop="itemListElement" itemtype="http://schema.org/ListItem" '+(n===e-1?'class="active"':"")+'>\r\n\t\t<meta itemprop="position" content="'+i(n)+'" />\r\n\t\t'+(n===e-1?"":'<a href="'+i(o(r&&r.breadcrumbs&&r.breadcrumbs[t]&&r.breadcrumbs[t].url))+'" itemprop="item">')+'\r\n\t\t\t<span itemprop="name">\r\n\t\t\t\t'+i(o(r&&r.breadcrumbs&&r.breadcrumbs[t]&&r.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(n===e-1?"\r\n\t\t\t\t"+(o(r&&r["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(o(r&&r.rssFeedUrl)?'<a target="_blank" href="'+i(o(r&&r.rssFeedUrl))+'" itemprop="item"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(n===e-1?"":"</a>")+"\r\n\t</li>\r\n\t"},function(){return""})},profile_links:function(t,e,r,n){var o=t.__escape;return n(r(e&&e.profile_links),function(t,n){return"\r\n\t\t"+(0===n?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+o(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].id))+'" class="plugin-link '+(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].public)?"public":"private")+'"><a href="'+o(r(e&&e.config&&e.config.relative_path))+"/user/"+o(r(e&&e.userslug))+"/"+o(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].route))+'">'+(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].icon)?'<i class="fa fa-fw '+o(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].icon))+'"></i> ':"")+o(r(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].name))+"</a></li>\r\n\t\t"},function(){return""})},bootswatchSkinOptions:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.bootswatchSkinOptions),function(t){return'\r\n\t\t\t\t\t<option value="'+o(e(n&&n.bootswatchSkinOptions&&n.bootswatchSkinOptions[t]&&n.bootswatchSkinOptions[t].value))+'" '+(e(n&&n.bootswatchSkinOptions&&n.bootswatchSkinOptions[t]&&n.bootswatchSkinOptions[t].selected)?"selected":"")+">"+o(e(n&&n.bootswatchSkinOptions&&n.bootswatchSkinOptions[t]&&n.bootswatchSkinOptions[t].name))+"</option>\r\n\t\t\t\t\t"},function(){return""})},homePageRoutes:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.homePageRoutes),function(t){return'\r\n\t\t\t\t\t\t<option value="'+o(e(n&&n.homePageRoutes&&n.homePageRoutes[t]&&n.homePageRoutes[t].route))+'" '+(e(n&&n.homePageRoutes&&n.homePageRoutes[t]&&n.homePageRoutes[t].selected)?'selected="1"':"")+">"+o(e(n&&n.homePageRoutes&&n.homePageRoutes[t]&&n.homePageRoutes[t].name))+"</option>\r\n\t\t\t\t\t\t"},function(){return""})},dailyDigestFreqOptions:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.dailyDigestFreqOptions),function(t){return'\r\n\t\t\t\t\t\t<option value="'+o(e(n&&n.dailyDigestFreqOptions&&n.dailyDigestFreqOptions[t]&&n.dailyDigestFreqOptions[t].value))+'" '+(e(n&&n.dailyDigestFreqOptions&&n.dailyDigestFreqOptions[t]&&n.dailyDigestFreqOptions[t].selected)?'selected="1"':"")+">"+o(e(n&&n.dailyDigestFreqOptions&&n.dailyDigestFreqOptions[t]&&n.dailyDigestFreqOptions[t].name))+"</option>\r\n\t\t\t\t\t\t"},function(){return""})},customSettings:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.customSettings),function(t){return"\r\n\t\t\t<h4>"+o(e(n&&n.customSettings&&n.customSettings[t]&&n.customSettings[t].title))+'</h4>\r\n\t\t\t<div class="well">\r\n\t\t\t\t'+o(e(n&&n.customSettings&&n.customSettings[t]&&n.customSettings[t].content))+"\r\n\t\t\t</div>\r\n\t\t\t"},function(){return""})},languages:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.languages),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.languages&&n.languages[t]&&n.languages[t].code))+'" '+(e(n&&n.languages&&n.languages[t]&&n.languages[t].selected)?"selected":"")+">"+o(e(n&&n.languages&&n.languages[t]&&n.languages[t].name))+" ("+o(e(n&&n.languages&&n.languages[t]&&n.languages[t].code))+")</option>\r\n\t\t\t\t\t\t\t"},function(){return""})},acpLanguages:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.acpLanguages),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.acpLanguages&&n.acpLanguages[t]&&n.acpLanguages[t].code))+'" '+(e(n&&n.acpLanguages&&n.acpLanguages[t]&&n.acpLanguages[t].selected)?"selected":"")+">"+o(e(n&&n.acpLanguages&&n.acpLanguages[t]&&n.acpLanguages[t].name))+" ("+o(e(n&&n.acpLanguages&&n.acpLanguages[t]&&n.acpLanguages[t].code))+")</option>\r\n\t\t\t\t\t\t\t"},function(){return""})},notificationSettings:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.notificationSettings),function(t){return'\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="form-group col-xs-7">\r\n\t\t\t\t\t\t<label>'+o(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].label))+'</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="form-group col-xs-5">\r\n\t\t\t\t\t\t<select class="form-control" data-property="'+o(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].name))+'">\r\n\t\t\t\t\t\t\t<option value="none" '+(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].none)?"selected":"")+'>[[notifications:none]]</option>\r\n\t\t\t\t\t\t\t<option value="notification" '+(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].notification)?"selected":"")+'>[[notifications:notification_only]]</option>\r\n\t\t\t\t\t\t\t<option value="email" '+(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].email)?"selected":"")+'>[[notifications:email_only]]</option>\r\n\t\t\t\t\t\t\t<option value="notificationemail" '+(e(n&&n.notificationSettings&&n.notificationSettings[t]&&n.notificationSettings[t].notificationemail)?"selected":"")+">[[notifications:notification_and_email]]</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t"},function(){return""})},upvoteNotifFreq:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.upvoteNotifFreq),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.upvoteNotifFreq&&n.upvoteNotifFreq[t]&&n.upvoteNotifFreq[t].name))+'" '+(e(n&&n.upvoteNotifFreq&&n.upvoteNotifFreq[t]&&n.upvoteNotifFreq[t].selected)?"selected":"")+">\r\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq."+o(e(n&&n.upvoteNotifFreq&&n.upvoteNotifFreq[t]&&n.upvoteNotifFreq[t].name))+"]]\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t"},function(){return""})},notificationSound:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.notificationSound),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.notificationSound&&n.notificationSound[t]&&n.notificationSound[t].name))+'" '+(e(n&&n.notificationSound&&n.notificationSound[t]&&n.notificationSound[t].selected)?"selected":"")+">"+o(e(n&&n.notificationSound&&n.notificationSound[t]&&n.notificationSound[t].name))+"</option>\r\n\t\t\t\t\t\t\t"},function(){return""})},incomingChatSound:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.incomingChatSound),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.incomingChatSound&&n.incomingChatSound[t]&&n.incomingChatSound[t].name))+'" '+(e(n&&n.incomingChatSound&&n.incomingChatSound[t]&&n.incomingChatSound[t].selected)?"selected":"")+">"+o(e(n&&n.incomingChatSound&&n.incomingChatSound[t]&&n.incomingChatSound[t].name))+"</option>\r\n\t\t\t\t\t\t\t"},function(){return""})},outgoingChatSound:function(t,n,e,r){var o=t.__escape;return r(e(n&&n.outgoingChatSound),function(t){return'\r\n\t\t\t\t\t\t\t<option value="'+o(e(n&&n.outgoingChatSound&&n.outgoingChatSound[t]&&n.outgoingChatSound[t].name))+'" '+(e(n&&n.outgoingChatSound&&n.outgoingChatSound[t]&&n.outgoingChatSound[t].selected)?"selected":"")+">"+o(e(n&&n.outgoingChatSound&&n.outgoingChatSound[t]&&n.outgoingChatSound[t].name))+"</option>\r\n\t\t\t\t\t\t\t"},function(){return""})}},a});