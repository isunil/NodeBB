!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function m(o,s,t,r,n){var e=o.__escape;return'<li component="chat/recent/room" data-roomid="'+e(t(s&&s.rooms&&s.rooms.roomId))+'" class="'+(t(s&&s.rooms&&s.rooms.unread)?"unread":"")+'">\r\n\t<strong class="room-name">\r\n\t\t'+(t(s&&s.rooms&&s.rooms.lastUser&&s.rooms.lastUser.uid)?'\r\n\t\t<span component="chat/title">'+(t(s&&s.rooms&&s.rooms.roomName)?e(t(s&&s.rooms&&s.rooms.roomName)):e(t(s&&s.rooms&&s.rooms.usernames)))+"</span>\r\n\t\t":"\r\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\r\n\t\t")+'\r\n\t</strong>\r\n\t<div class="avatar-placeholder"></div>\r\n\t'+m.blocks["rooms.users"](o,s,t,r,n)+'\r\n\r\n\t<ul class="members">\r\n\t\t'+r(t(s&&s.rooms&&s.rooms.users),function(r){return'\r\n\t\t<li>\r\n\t\t\t<a href="'+e(t(s&&s.config&&s.config.relative_path))+"/user/"+e(t(s&&s.rooms&&s.rooms.users&&s.rooms.users[r]&&s.rooms.users[r].userslug))+'">'+e(n(s,o,"buildAvatar",[t(s&&s.rooms&&s.rooms.users&&s.rooms.users[r]),"sm",t(s&&s.true)]))+"</a>\r\n\t\t</li>\r\n\t\t"},function(){return""})+"\r\n\t</ul>\r\n</li>"}return m.blocks={"rooms.users":function(s,t,n,r,e){var m=s.__escape;return r(n(t&&t.rooms&&t.rooms.users),function(r,o){return"\r\n\t"+(0===o?'\r\n\t<div class="main-avatar">\r\n\t\t<a href="'+m(n(t&&t.config&&t.config.relative_path))+"/user/"+m(n(t&&t.rooms&&t.rooms.users&&t.rooms.users[r]&&t.rooms.users[r].userslug))+'">'+m(e(t,s,"buildAvatar",[n(t&&t.rooms&&t.rooms.users&&t.rooms.users[r]),"sm",n(t&&t.true)]))+"</a>\r\n\t</div>\r\n\t":"")+"\r\n\t"},function(){return""})}},m});