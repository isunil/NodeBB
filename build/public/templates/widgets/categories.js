!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function n(e,t,r,o,i){e.__escape;return n.blocks.categories(e,t,r,o,i)}return n.blocks={categories:function(e,t,r,o){var i=e.__escape;return o(r(t&&t.categories),function(e){return'\r\n<ul class="categories-list">\r\n\t<li>\r\n\t\t'+(r(t&&t.categories&&t.categories[e]&&t.categories[e].link)?'\r\n\t\t<h4><a href="'+i(r(t&&t.categories&&t.categories[e]&&t.categories[e].link))+'">'+i(r(t&&t.categories&&t.categories[e]&&t.categories[e].name))+"</a></h4>\r\n\t\t":'\r\n\t\t<h4><a href="'+i(r(t&&t.relative_path))+"/category/"+i(r(t&&t.categories&&t.categories[e]&&t.categories[e].slug))+'">'+i(r(t&&t.categories&&t.categories[e]&&t.categories[e].name))+"</a></h4>\r\n\t\t")+"\r\n\t\t<p>"+i(r(t&&t.categories&&t.categories[e]&&t.categories[e].descriptionParsed))+"</p>\r\n\t</li>\r\n</ul>\r\n"},function(){return""})}},n});