!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function n(s,t,e,o,r){var p=s.__escape;return'<div class="clearfix post-header">\r\n\t<div class="icon pull-left">\r\n\t\t<a href="'+(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)?p(e(t&&t.config&&t.config.relative_path))+"/user/"+p(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)):"#")+'">\r\n\t\t\t'+p(r(t,s,"buildAvatar",[e(t&&t.posts&&t.posts.user),"sm2x",e(t&&t.true),"","user/picture"]))+'\r\n\t\t\t<i component="user/status" class="fa fa-circle status '+p(e(t&&t.posts&&t.posts.user&&t.posts.user.status))+'" title="[[global:'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.status))+']]"></i>\r\n\t\t</a>\r\n\t</div>\r\n\r\n\t<small class="pull-left">\r\n\t\t<strong>\r\n\t\t\t<a href="'+(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)?p(e(t&&t.config&&t.config.relative_path))+"/user/"+p(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)):"#")+'" itemprop="author" data-username="'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.username))+'" data-uid="'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'">'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.username))+"</a>\r\n\t\t</strong>\r\n\r\n\t\t"+n.blocks["posts.user.selectedGroups"](s,t,e,o,r)+"\r\n\r\n\t\t"+(e(t&&t.posts&&t.posts.user&&t.posts.user.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+'\r\n\r\n\t\t<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">\r\n\t\t\t<a class="permalink" href="'+p(e(t&&t.config&&t.config.relative_path))+"/post/"+p(e(t&&t.posts&&t.posts.pid))+'"><span class="timeago" title="'+p(e(t&&t.posts&&t.posts.timestampISO))+'"></span></a>\r\n\r\n\t\t\t<i component="post/edit-indicator" class="fa fa-pencil-square'+(e(t&&t.privileges&&t.privileges["posts:history"])?" pointer":"")+" edit-icon "+(e(t&&t.posts&&t.posts.editor&&t.posts.editor.username)?"":"hidden")+'"></i>\r\n\r\n\t\t\t<small data-editor="'+p(e(t&&t.posts&&t.posts.editor&&t.posts.editor.userslug))+'" component="post/editor" class="hidden">[[global:last_edited_by, '+p(e(t&&t.posts&&t.posts.editor&&t.posts.editor.username))+']] <span class="timeago" title="'+p(e(t&&t.posts&&t.posts.editedISO))+'"></span></small>\r\n\r\n\t\t\t'+(e(t&&t.posts&&t.posts.toPid)?'\r\n\t\t\t<a component="post/parent" class="btn btn-xs btn-default hidden-xs" data-topid="'+p(e(t&&t.posts&&t.posts.toPid))+'" href="'+p(e(t&&t.config&&t.config.relative_path))+"/post/"+p(e(t&&t.posts&&t.posts.toPid))+'"><i class="fa fa-reply"></i> @'+(e(t&&t.posts&&t.posts.parent&&t.posts.parent.username)?p(e(t&&t.posts&&t.posts.parent&&t.posts.parent.username)):"[[global:guest]]")+"</a>\r\n\t\t\t":"")+"\r\n\r\n\t\t\t<span>\r\n\t\t\t\t"+(e(t&&t.posts&&t.posts.user&&t.posts.user.custom_profile_info&&t.posts.user.custom_profile_info.length)?"\r\n\t\t\t\t&#124;\r\n\t\t\t\t"+n.blocks["posts.user.custom_profile_info"](s,t,e,o,r)+"\r\n\t\t\t\t":"")+'\r\n\t\t\t</span>\r\n\t\t</span>\r\n\t\t<span class="bookmarked"><i class="fa fa-bookmark-o"></i></span>\r\n\r\n\t</small>\r\n</div>\r\n\r\n<br />\r\n\r\n<div class="content" component="post/content" itemprop="text">\r\n\t'+p(e(t&&t.posts&&t.posts.content))+'\r\n</div>\r\n\r\n<div class="clearfix post-footer">\r\n\t'+(e(t&&t.posts&&t.posts.user&&t.posts.user.signature)?'\r\n\t<div component="post/signature" data-uid="'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'" class="post-signature">'+p(e(t&&t.posts&&t.posts.user&&t.posts.user.signature))+"</div>\r\n\t":"")+'\r\n\r\n\t<small class="pull-right">\r\n\t\t<span class="post-tools">\r\n\t\t\t<a component="post/reply" href="#" class="no-select '+(e(t&&t.privileges&&t.privileges["topics:reply"])?"":"hidden")+'">[[topic:reply]]</a>\r\n\t\t\t<a component="post/quote" href="#" class="no-select '+(e(t&&t.privileges&&t.privileges["topics:reply"])?"":"hidden")+'">[[topic:quote]]</a>\r\n\t\t</span>\r\n\r\n\t\t'+(e(t&&t["reputation:disabled"])?"":'\r\n\t\t<span class="votes">\r\n\t\t\t<a component="post/upvote" href="#" class="'+(e(t&&t.posts&&t.posts.upvoted)?"upvoted":"")+'">\r\n\t\t\t\t<i class="fa fa-chevron-up"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component="post/vote-count" data-votes="'+p(e(t&&t.posts&&t.posts.votes))+'">'+p(e(t&&t.posts&&t.posts.votes))+"</span>\r\n\r\n\t\t\t"+(e(t&&t["downvote:disabled"])?"":'\r\n\t\t\t<a component="post/downvote" href="#" class="'+(e(t&&t.posts&&t.posts.downvoted)?"downvoted":"")+'">\r\n\t\t\t\t<i class="fa fa-chevron-down"></i>\r\n\t\t\t</a>\r\n\t\t\t')+"\r\n\t\t</span>\r\n\t\t")+'\r\n\r\n\t\t<span component="post/tools" class="dropdown moderator-tools bottom-sheet '+(e(t&&t.posts&&t.posts.display_post_menu)?"":"hidden")+'">\r\n\t<a href="#" data-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v"></i></a>\r\n\t<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>\r\n</span>\r\n\r\n\t</small>\r\n\r\n\t'+(e(t&&t.hideReplies)?"":'\r\n\t<a component="post/reply-count" href="#" class="threaded-replies no-select '+(e(t&&t.posts&&t.posts.replies&&t.posts.replies.count)?"":"hidden")+'">\r\n\t\t<span component="post/reply-count/avatars" class="avatars '+(e(t&&t.posts&&t.posts.replies&&t.posts.replies.hasMore)?"hasMore":"")+'">\r\n\t\t\t'+n.blocks["posts.replies.users"](s,t,e,o,r)+'\r\n\t\t</span>\r\n\r\n\t\t<span class="replies-count" component="post/reply-count/text" data-replies="'+p(e(t&&t.posts&&t.posts.replies&&t.posts.replies.count))+'">'+p(e(t&&t.posts&&t.posts.replies&&t.posts.replies.text))+'</span>\r\n\t\t<span class="replies-last hidden-xs">[[topic:last_reply_time]] <span class="timeago" title="'+p(e(t&&t.posts&&t.posts.replies&&t.posts.replies.timestampISO))+'"></span></span>\r\n\r\n\t\t<i class="fa fa-fw fa-chevron-right" component="post/replies/open"></i>\r\n\t\t<i class="fa fa-fw fa-chevron-down hidden" component="post/replies/close"></i>\r\n\t\t<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>\r\n\t</a>\r\n\t')+"\r\n</div>\r\n\r\n<hr />\r\n"}return n.blocks={"posts.user.selectedGroups":function(s,t,e,o){var r=s.__escape;return o(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups),function(s){return"\r\n"+(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].slug)?'\r\n<a href="'+r(e(t&&t.config&&t.config.relative_path))+"/groups/"+r(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].slug))+'"><small class="label group-label inline-block" style="color:'+r(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].textColor))+";background-color: "+r(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].labelColor))+';">'+(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].icon)?'<i class="fa '+r(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].icon))+'"></i> ':"")+r(e(t&&t.posts&&t.posts.user&&t.posts.user.selectedGroups&&t.posts.user.selectedGroups[s]&&t.posts.user.selectedGroups[s].userTitle))+"</small></a>\r\n":"")+"\r\n"},function(){return""})},"posts.user.custom_profile_info":function(s,t,e,o){var r=s.__escape;return o(e(t&&t.posts&&t.posts.user&&t.posts.user.custom_profile_info),function(s){return"\r\n\t\t\t\t"+r(e(t&&t.posts&&t.posts.user&&t.posts.user.custom_profile_info&&t.posts.user.custom_profile_info[s]&&t.posts.user.custom_profile_info[s].content))+"\r\n\t\t\t\t"},function(){return""})},"posts.replies.users":function(t,e,o,s,r){var p=t.__escape;return s(o(e&&e.posts&&e.posts.replies&&e.posts.replies.users),function(s){return"\r\n\t\t\t"+p(r(e,t,"buildAvatar",[o(e&&e.posts&&e.posts.replies&&e.posts.replies.users&&e.posts.replies.users[s]),"xs",o(e&&e.true),""]))+"\r\n\t\t\t"},function(){return""})}},n});