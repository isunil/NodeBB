!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,a,n,s,i){var e=t.__escape;return'<div class="row">\r\n\t<div class="col-xs-12">\r\n\t\t<div class="post-queue panel panel-primary preventSlideout">\r\n\t\t\t<div class="panel-heading">\r\n\t\t\t\t[[admin/manage/post-queue:post-queue]]\r\n\t\t\t</div>\r\n\r\n\t\t\t'+(n(a&&a.posts&&a.posts.length)?"":'\r\n\t\t\t<p class="panel-body">\r\n\t\t\t\t[[admin/manage/post-queue:description, '+e(n(a&&a.config&&a.config.relative_path))+"/admin/settings/post#post-queue]]\r\n\t\t\t</p>\r\n\t\t\t")+'\r\n\r\n\t\t\t<div class="table-responsive">\r\n\t\t\t\t<table class="table table-striped posts-list">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>[[admin/manage/post-queue:user]]</th>\r\n\t\t\t\t\t\t\t<th>[[admin/manage/post-queue:category]]</th>\r\n\t\t\t\t\t\t\t<th>[[admin/manage/post-queue:title]]</th>\r\n\t\t\t\t\t\t\t<th>[[admin/manage/post-queue:content]] <i class="fa fa-info-circle" data-toggle="tooltip" title="[[admin/manage/post-queue:content-editable]]"></i></th>\r\n\t\t\t\t\t\t\t<th>[[admin/manage/post-queue:posted]]</th>\r\n\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t'+o.blocks.posts(t,a,n,s,i)+'\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\r\n\t<ul class="pagination hidden-xs">\r\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+e(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t'+o.blocks["pagination.pages"](t,a,n,s,i)+'\r\n\r\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+e(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\r\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.first&&a.pagination.first.qs))+'" data-page="1"><i class="fa fa-fast-backward"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+e(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t<a href="#">'+e(n(a&&a.pagination&&a.pagination.currentPage))+" / "+e(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+e(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+e(n(a&&a.pagination&&a.pagination.last&&a.pagination.last.qs))+'" data-page="'+e(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'}return o.blocks={posts:function(t,a,n,s){var i=t.__escape;return s(n(a&&a.posts),function(t){return'\r\n\t\t\t\t\t\t<tr data-id="'+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].id))+'">\r\n\t\t\t\t\t\t\t<td class="col-md-1">\r\n\t\t\t\t\t\t\t\t'+(n(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.userslug)?'\r\n\t\t\t\t\t\t\t\t<a href="'+i(n(a&&a.config&&a.config.relative_path))+"/uid/"+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.uid))+'">'+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+"</a>\r\n\t\t\t\t\t\t\t\t":"\r\n\t\t\t\t\t\t\t\t"+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+"\r\n\t\t\t\t\t\t\t\t")+'\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class="col-md-2">\r\n\t\t\t\t\t\t\t\t<a href="'+i(n(a&&a.config&&a.config.relative_path))+"/category/"+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.slug))+'">'+(n(a&&a.posts&&a.posts[t]&&a.posts[t].categiry&&a.posts[t].categiry.icon)?'<span class="fa-stack"><i style="color: '+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color: '+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.color))+';" class="fa fa-stack-1x fa-fw '+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.icon))+'"></i></span>':"")+" "+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].category&&a.posts[t].category.name))+'</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class="col-md-2 topic-title">\r\n\t\t\t\t\t\t\t\t'+(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.tid)?'\r\n\t\t\t\t\t\t\t\t<a href="'+i(n(a&&a.config&&a.config.relative_path))+"/topic/"+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.tid))+'">[[admin/manage/post-queue:reply-to, '+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].topic&&a.posts[t].topic.title))+"]]</a>\r\n\t\t\t\t\t\t\t\t":"")+"\r\n\t\t\t\t\t\t\t\t"+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.title))+'\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class="col-md-5 post-content">'+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.content))+'</td>\r\n\t\t\t\t\t\t\t<td class="col-md-5 post-content-editable hidden">\r\n\t\t\t\t\t\t\t\t<textarea>'+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.rawContent))+'</textarea>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class="col-md-1">\r\n\t\t\t\t\t\t\t\t<span class="timeago" title='+i(n(a&&a.posts&&a.posts[t]&&a.posts[t].data&&a.posts[t].data.timestampISO))+'></span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class="col-md-1">\r\n\t\t\t\t\t\t\t\t<div class="btn-group pull-right">\r\n\t\t\t\t\t\t\t\t\t<button class="btn btn-success btn-xs" data-action="accept"><i class="fa fa-check"></i></button>\r\n\t\t\t\t\t\t\t\t\t<button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t'},function(){return""})},"pagination.pages":function(t,a,n,s){var i=t.__escape;return s(n(a&&a.pagination&&a.pagination.pages),function(t){return"\r\n\t\t\t"+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].separator)?'\r\n\t\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\r\n\t\t\t</li>\r\n\t\t\t':'\r\n\t\t\t<li class="page'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].active)?" active":"")+'" >\r\n\t\t\t\t<a href="?'+i(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].qs))+'" data-page="'+i(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+'">'+i(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+"</a>\r\n\t\t\t</li>\r\n\t\t\t")+"\r\n\t\t"},function(){return""})}},o});