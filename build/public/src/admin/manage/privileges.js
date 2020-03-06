"use strict";define("admin/manage/privileges",["autocomplete","translator","benchpress","categorySelector"],function(e,i,r,a){var t={};var o;t.init=function(){o=ajaxify.data.cid||0;a.init($('[component="category-selector"]'),function(e){var i=parseInt(e.cid,10);ajaxify.go("admin/manage/privileges/"+(i||""))});t.setupPrivilegeTable()};t.setupPrivilegeTable=function(){$(".privilege-table-container").on("change",'input[type="checkbox"]',function(){var e=$(this);var i=e.parent().attr("data-privilege");var r=e.prop("checked");var a=e.parents("tr");var o=a.attr("data-group-name")||a.attr("data-uid");var n=parseInt(a.attr("data-private")||0,10);var c=a.attr("data-group-name")!==undefined;if(o){if(c&&i==="groups:moderate"&&!n&&r){bootbox.confirm("[[admin/manage/categories:alert.confirm-moderate]]",function(a){if(a){t.setPrivilege(o,i,r,e)}else{e.prop("checked",!e.prop("checked"))}})}else{t.setPrivilege(o,i,r,e)}}else{app.alertError("[[error:invalid-data]]")}});$(".privilege-table-container").on("click",'[data-action="search.user"]',t.addUserToPrivilegeTable);$(".privilege-table-container").on("click",'[data-action="search.group"]',t.addGroupToPrivilegeTable);$(".privilege-table-container").on("click",'[data-action="copyToChildren"]',function(){t.copyPrivilegesToChildren(o,"")});$(".privilege-table-container").on("click",'[data-action="copyToChildrenGroup"]',function(){var e=$(this).parents("[data-group-name]").attr("data-group-name");t.copyPrivilegesToChildren(o,e)});$(".privilege-table-container").on("click",'[data-action="copyPrivilegesFrom"]',function(){t.copyPrivilegesFromCategory(o,"")});$(".privilege-table-container").on("click",'[data-action="copyPrivilegesFromGroup"]',function(){var e=$(this).parents("[data-group-name]").attr("data-group-name");t.copyPrivilegesFromCategory(o,e)});$(".privilege-table-container").on("click",'[data-action="copyToAll"]',function(){t.copyPrivilegesToAllCategories(o,"")});$(".privilege-table-container").on("click",'[data-action="copyToAllGroup"]',function(){var e=$(this).parents("[data-group-name]").attr("data-group-name");t.copyPrivilegesToAllCategories(o,e)});t.exposeAssumedPrivileges()};t.refreshPrivilegeTable=function(){socket.emit("admin.categories.getPrivilegeSettings",o,function(e,a){if(e){return app.alertError(e.message)}var n=o?"admin/partials/categories/privileges":"admin/partials/global/privileges";r.parse(n,{privileges:a},function(e){i.translate(e,function(e){$(".privilege-table-container").html(e);t.exposeAssumedPrivileges()})})})};t.exposeAssumedPrivileges=function(){var e=[];$('.privilege-table tr[data-group-name="registered-users"] td input[type="checkbox"]').parent().each(function(i,r){if($(r).find("input").prop("checked")){e.push(r.getAttribute("data-privilege"))}});for(var i=0,r=e.length;i<r;i+=1){var a=$('.privilege-table tr[data-group-name]:not([data-group-name="registered-users"],[data-group-name="guests"],[data-group-name="spiders"]) td[data-privilege="'+e[i]+'"] input');a.each(function(e,i){if(!i.checked){i.indeterminate=true}})}};t.setPrivilege=function(e,i,r,a){socket.emit("admin.categories.setPrivilege",{cid:o,privilege:i,set:r,member:e},function(e){if(e){return app.alertError(e.message)}a.replaceWith('<i class="fa fa-spin fa-spinner"></i>');t.refreshPrivilegeTable()})};t.addUserToPrivilegeTable=function(){var i=bootbox.dialog({title:"[[admin/manage/categories:alert.find-user]]",message:'<input class="form-control input-lg" placeholder="[[admin/manage/categories:alert.user-search]]" />',show:true});i.on("shown.bs.modal",function(){var r=i.find("input");e.user(r,function(e,r){var a=o?["find","read","topics:read"]:["chat"];socket.emit("admin.categories.setPrivilege",{cid:o,privilege:a,set:true,member:r.item.user.uid},function(e){if(e){return app.alertError(e.message)}t.refreshPrivilegeTable();i.modal("hide")})})})};t.addGroupToPrivilegeTable=function(){var i=bootbox.dialog({title:"[[admin/manage/categories:alert.find-group]]",message:'<input class="form-control input-lg" placeholder="[[admin/manage/categories:alert.group-search]]" />',show:true});i.on("shown.bs.modal",function(){var r=i.find("input");e.group(r,function(e,r){var a=o?["groups:find","groups:read","groups:topics:read"]:["groups:chat"];socket.emit("admin.categories.setPrivilege",{cid:o,privilege:a,set:true,member:r.item.group.name},function(e){if(e){return app.alertError(e.message)}t.refreshPrivilegeTable();i.modal("hide")})})})};t.copyPrivilegesToChildren=function(e,i){socket.emit("admin.categories.copyPrivilegesToChildren",{cid:e,group:i},function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/categories:privileges.copy-success]]")})};t.copyPrivilegesFromCategory=function(e,i){a.modal(ajaxify.data.categories.slice(1),function(r){socket.emit("admin.categories.copyPrivilegesFrom",{toCid:e,fromCid:r,group:i},function(e){if(e){return app.alertError(e.message)}ajaxify.refresh()})})};t.copyPrivilegesToAllCategories=function(e,i){socket.emit("admin.categories.copyPrivilegesToAllCategories",{cid:e,group:i},function(e){if(e){return app.alertError(e.message)}app.alertSuccess("[[admin/manage/categories:privileges.copy-success]]")})};return t});
//# sourceMappingURL=privileges.js.map