!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,r,i,s){var n=t.__escape;return'\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\r\n\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t'+(r(e&&e.privileges&&e.privileges.columnCountGroupOther)?'\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="'+n(r(e&&e.privileges&&e.privileges.columnCountGroupOther))+'">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t':"")+'\r\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\r\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.groups"](t,e,r,i,s)+"\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t"+a.blocks["privileges.groups"](t,e,r,i,s)+'\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="'+n(r(e&&e.privileges&&e.privileges.columnCountGroup))+'">\r\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToAll">\r\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<div class="help-block">\r\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\r\n\t\t\t\t\t<table class="table table-striped privilege-table">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\r\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t'+(r(e&&e.privileges&&e.privileges.columnCountUserOther)?'\r\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="'+n(r(e&&e.privileges&&e.privileges.columnCountUserOther))+'">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t':"")+'\r\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\r\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.users"](t,e,r,i,s)+"\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t"+(r(e&&e.privileges&&e.privileges.users&&e.privileges.users.length)?"\r\n\t\t\t\t\t\t\t"+a.blocks["privileges.users"](t,e,r,i,s)+'\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="'+n(r(e&&e.privileges&&e.privileges.columnCountUser))+'">\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan="'+n(r(e&&e.privileges&&e.privileges.columnCountUser))+'">\r\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.no-users]]\r\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\r\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t')+"\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n"}return a.blocks={"privileges.labels.groups":function(t,e,r,i){var s=t.__escape;return i(r(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups),function(t){return'\r\n\t\t\t\t\t\t\t\t<th class="text-center">'+s(r(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.groups&&e.privileges.labels.groups[t]&&e.privileges.labels.groups[t].name))+"</th>\r\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.groups":function(e,r,i,t,s){var n=e.__escape;return t(i(r&&r.privileges&&r.privileges.groups),function(t){return'\r\n\t\t\t\t\t\t\t<tr data-group-name="'+n(i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].nameEscaped))+'" data-private="'+(i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?"1":"0")+'">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t'+(i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?'\r\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\r\n\t\t\t\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\t\t\t\t"+n(i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+'\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class="dropdown">\r\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-copy"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyToAllGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyToChildrenGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li data-action="copyPrivilegesFromGroup"><a href="#">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t'+n(s(r,e,"spawnPrivilegeStates",[i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name),i(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].privileges)]))+"\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t"},function(){return""})},"privileges.labels.users":function(t,e,r,i){var s=t.__escape;return i(r(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users),function(t){return'\r\n\t\t\t\t\t\t\t\t<th class="text-center">'+s(r(e&&e.privileges&&e.privileges.labels&&e.privileges.labels.users&&e.privileges.labels.users[t]&&e.privileges.labels.users[t].name))+"</th>\r\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.users":function(e,r,i,t,s){var n=e.__escape;return t(i(r&&r.privileges&&r.privileges.users),function(t){return'\r\n\t\t\t\t\t\t\t<tr data-uid="'+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].uid))+'">\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t'+(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture)?'\r\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture))+'" title="'+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+'" />\r\n\t\t\t\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:bgColor"]))+';">'+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:text"]))+"</div>\r\n\t\t\t\t\t\t\t\t\t")+"\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>"+n(i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+"</td>\r\n\t\t\t\t\t\t\t\t"+n(s(r,e,"spawnPrivilegeStates",[i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username),i(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].privileges)]))+"\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t"},function(){return""})}},a});