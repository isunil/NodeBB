!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function s(r,o,t,e,a){r.__escape;return'<div class="moderators">\r\n\t'+s.blocks.moderators(r,o,t,e,a)+"\r\n</div>"}return s.blocks={moderators:function(r,o,t,e){var a=r.__escape;return e(t(o&&o.moderators),function(r){return'\r\n\t<a data-uid="'+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].uid))+'" href="'+a(t(o&&o.relative_path))+"/user/"+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].userslug))+'">\r\n\t\t'+(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].picture)?'\r\n\t\t<img title="'+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].username))+'" src="'+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].picture))+'" class="avatar avatar-sm not-responsive" />\r\n\t\t':'\r\n\t\t<div title="'+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r].username))+'" class="avatar avatar-sm not-responsive" style="background-color: '+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r]["icon:bgColor"]))+';">'+a(t(o&&o.moderators&&o.moderators[r]&&o.moderators[r]["icon:text"]))+"</div>\r\n\t\t")+"\r\n\t</a>\r\n\t"},function(){return""})}},s});