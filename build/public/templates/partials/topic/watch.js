!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){function n(n,i,o,l,t){n.__escape;return o(i&&i.config&&i.config.loggedIn)?'\r\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\r\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\r\n\t\t<span component="topic/following/menu" '+(o(i&&i.isFollowing)?"":'class="hidden"')+'><i class="fa fa-fw fa-bell-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:watching]]</span></span>\r\n\r\n\t\t<span component="topic/not-following/menu" '+(o(i&&i.isNotFollowing)?"":'class="hidden"')+'><i class="fa fa-fw fa-bell-slash-o"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:not-watching]]</span></span>\r\n\r\n\t\t<span component="topic/ignoring/menu" '+(o(i&&i.isIgnoring)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:ignoring]]</span></span>\r\n\r\n\t\t<span class="caret"></span>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t<li><a href="#" component="topic/following"><i component="topic/following/check" class="fa fa-fw '+(o(i&&i.isFollowing)?"fa-check":"")+'"></i><i class="fa fa-fw fa-bell-o"></i> [[topic:watching]]<p class="help-text hidden-xs"><small>[[topic:watching.description]]</small></p></a></li>\r\n\t\t<li><a href="#" component="topic/not-following"><i component="topic/not-following/check" class="fa fa-fw '+(o(i&&i.isNotFollowing)?"fa-check":"")+'"></i><i class="fa fa-fw fa-bell-slash-o"></i> [[topic:not-watching]]<p class="help-text hidden-xs"><small>[[topic:not-watching.description]]</small></p></a></li>\r\n\t\t<li><a href="#" component="topic/ignoring"><i component="topic/ignoring/check" class="fa fa-fw '+(o(i&&i.isIgnoring)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[topic:ignoring]]<p class="help-text hidden-xs"><small>[[topic:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n':""}return n.blocks={},n});