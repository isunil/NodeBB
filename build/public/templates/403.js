!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function r(r,n,t,e,o){var l=r.__escape;return'<div class="alert alert-danger">\r\n\t<strong>[[global:403.title]]</strong>\r\n\t'+(t(n&&n.error)?"\r\n\t<p>"+l(t(n&&n.error))+"</p>\r\n\t":"\r\n\t<p>[[global:403.message]]</p>\r\n\t")+"\r\n\r\n\t"+(t(n&&n.returnLink)?"\r\n\t<p>[[error:goback]]</p>\r\n\t":"")+"\r\n\r\n\t"+(t(n&&n.loggedIn)?"":"\r\n\t<p>[[global:403.login, "+l(t(n&&n.config&&n.config.relative_path))+"]]</p>\r\n\t")+"\r\n</div>"}return r.blocks={},r});