!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function o(s,r,e,n,i){s.__escape;return'<div component="topic/browsing-users">\r\n\t'+o.blocks.browsingUsers(s,r,e,n,i)+"\r\n</div>"}return o.blocks={browsingUsers:function(s,r,e,n){var i=s.__escape;return n(e(r&&r.browsingUsers),function(s){return'\r\n\t<div class="pull-left">\r\n\t\t<a href="'+(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].userslug)?i(e(r&&r.config&&r.config.relative_path))+"/user/"+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].userslug)):"#")+'">\r\n\t\t\t'+(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].picture)?'\r\n\t\t\t<img class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].uid))+'" src="'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].picture))+'" align="left" itemprop="image" title="'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].username))+'"/>\r\n\t\t\t':'\r\n\t\t\t<div class="avatar avatar-sm avatar-rounded" component="user/picture" data-uid="'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].uid))+'" title="'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s].username))+'" style="background-color: '+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s]["icon:bgColor"]))+';">'+i(e(r&&r.browsingUsers&&r.browsingUsers[s]&&r.browsingUsers[s]["icon:text"]))+"</div>\r\n\t\t\t")+"\r\n\t\t</a>\r\n\t</div>\r\n\t"},function(){return""})}},o});