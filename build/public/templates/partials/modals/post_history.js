!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,n,r,f,i){var s=t.__escape;return"<p>\r\n\t"+(r(n&&n.numDiffs)?"\r\n\t[[topic:diffs.description, "+s(r(n&&n.numDiffs))+"]]\r\n\t":"\r\n\t[[topic:diffs.no-revisions-description, "+s(r(n&&n.numDiffs))+"]]\r\n\t")+"\r\n</p>\r\n"+(r(n&&n.numDiffs)?'\r\n<div class="form-group">\r\n\t<select class="form-control">\r\n\t\t'+o.blocks.diffs(t,n,r,f,i)+'\r\n\t</select>\r\n\r\n\t<hr />\r\n\r\n\t<ul class="posts-list diffs"></ul>\r\n</div>\r\n':"")}return o.blocks={diffs:function(t,f,i,n){var s=t.__escape;return n(i(f&&f.diffs),function(t,n,r){return'\r\n\t\t<option value="'+s(i(f&&f.diffs&&f.diffs[t]&&f.diffs[t].timestamp))+'">\r\n\t\t\t'+s(i(f&&f.diffs&&f.diffs[t]&&f.diffs[t].pretty))+"\r\n\t\t\t"+(0===n?"([[topic:diffs.current-revision]])":"")+"\r\n\t\t\t"+(n===r-1?"([[topic:diffs.original-revision]])":"")+"\r\n\t\t</option>\r\n\t\t"},function(){return""})}},o});