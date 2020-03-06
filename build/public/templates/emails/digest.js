!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,n,r,o){var i=t.__escape;return'<!DOCTYPE html>\r\n<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r\n<head>\r\n    <meta charset="utf-8"> \x3c!-- utf-8 works for most cases --\x3e\r\n    <meta name="viewport" content="width=device-width"> \x3c!-- Forcing initial-scale shouldn\'t be necessary --\x3e\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \x3c!-- Use the latest (edge) version of IE rendering engine --\x3e\r\n    <meta name="x-apple-disable-message-reformatting">  \x3c!-- Disable auto-scale in iOS 10 Mail entirely --\x3e\r\n    <title></title> \x3c!-- The title tag shows in email notifications, like Android 4.4. --\x3e\r\n\r\n    \x3c!-- Web Font / @font-face : BEGIN --\x3e\r\n\t\x3c!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. --\x3e\r\n\r\n    \x3c!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. --\x3e\r\n    \x3c!--[if mso]>\r\n        <style>\r\n            * {\r\n                font-family: sans-serif !important;\r\n            }\r\n        </style>\r\n    <![endif]--\x3e\r\n\r\n    \x3c!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ --\x3e\r\n    \x3c!--[if !mso]>\x3c!--\x3e\r\n        \x3c!-- insert web font reference, eg: <link href=\'https://fonts.googleapis.com/css?family=Roboto:400,700\' rel=\'stylesheet\' type=\'text/css\'> --\x3e\r\n    \x3c!--<![endif]--\x3e\r\n\r\n    \x3c!-- Web Font / @font-face : END --\x3e\r\n\r\n\t\x3c!-- CSS Reset --\x3e\r\n    <style>\r\n\r\n        /* What it does: Remove spaces around the email design added by some email clients. */\r\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\r\n        html,\r\n        body {\r\n            margin: 0 auto !important;\r\n            padding: 0 !important;\r\n            height: 100% !important;\r\n            width: 100% !important;\r\n        }\r\n\r\n        /* What it does: Stops email clients resizing small text. */\r\n        * {\r\n            -ms-text-size-adjust: 100%;\r\n            -webkit-text-size-adjust: 100%;\r\n        }\r\n\r\n        /* What it does: Centers email on Android 4.4 */\r\n        div[style*="margin: 16px 0"] {\r\n            margin:0 !important;\r\n        }\r\n\r\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\r\n        table,\r\n        td {\r\n            mso-table-lspace: 0pt !important;\r\n            mso-table-rspace: 0pt !important;\r\n        }\r\n\r\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\r\n        table {\r\n            border-spacing: 0 !important;\r\n            border-collapse: collapse !important;\r\n            table-layout: fixed !important;\r\n            margin: 0 auto !important;\r\n        }\r\n        table table table {\r\n            table-layout: auto;\r\n        }\r\n\r\n        /* What it does: Uses a better rendering method when resizing images in IE. */\r\n        img {\r\n            -ms-interpolation-mode:bicubic;\r\n        }\r\n\r\n        /* What it does: A work-around for email clients meddling in triggered links. */\r\n        *[x-apple-data-detectors],\t/* iOS */\r\n        .x-gmail-data-detectors, \t/* Gmail */\r\n        .x-gmail-data-detectors *,\r\n        .aBn {\r\n            border-bottom: 0 !important;\r\n            cursor: default !important;\r\n            color: inherit !important;\r\n            text-decoration: none !important;\r\n            font-size: inherit !important;\r\n            font-family: inherit !important;\r\n            font-weight: inherit !important;\r\n            line-height: inherit !important;\r\n        }\r\n\r\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\r\n        .a6S {\r\n\t        display: none !important;\r\n\t        opacity: 0.01 !important;\r\n        }\r\n        /* If the above doesn\'t work, add a .g-img class to any image in question. */\r\n        img.g-img + div {\r\n\t        display:none !important;\r\n\t   \t}\r\n\r\n        /* What it does: Prevents underlining the button text in Windows 10 */\r\n        .button-link {\r\n            text-decoration: none !important;\r\n        }\r\n\r\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r\n        /* Create one of these media queries for each additional viewport size you\'d like to fix */\r\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\r\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\r\n            .email-container {\r\n                min-width: 375px !important;\r\n            }\r\n        }\r\n\r\n    </style>\r\n\r\n    \x3c!-- Progressive Enhancements --\x3e\r\n    <style>\r\n\r\n        /* What it does: Hover styles for buttons */\r\n        .button-td,\r\n        .button-a {\r\n            transition: all 100ms ease-in;\r\n        }\r\n        .button-td:hover,\r\n        .button-a:hover {\r\n            background: #555555 !important;\r\n            border-color: #555555 !important;\r\n        }\r\n\r\n        /* Media Queries */\r\n        @media screen and (max-width: 600px) {\r\n\r\n            /* What it does: Adjust typography on small screens to improve readability */\r\n\t\t\t.email-container p {\r\n\t\t\t\tfont-size: 17px !important;\r\n\t\t\t\tline-height: 26px !important;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n        .notification-body img {\r\n            max-width: 100%;\r\n        }\r\n\t</style>\r\n\r\n\t\x3c!-- What it does: Makes background images in 72ppi Outlook render at correct size. --\x3e\r\n\t\x3c!--[if gte mso 9]>\r\n\t<xml>\r\n\t\t<o:OfficeDocumentSettings>\r\n\t\t\t<o:AllowPNG/>\r\n\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\r\n\t\t</o:OfficeDocumentSettings>\r\n\t</xml>\r\n\t<![endif]--\x3e\r\n\r\n</head>\r\n\r\n<body width="100%" bgcolor="#f6f6f6" style="margin: 0; mso-line-height-rule: exactly;">\r\n\t<center style="width: 100%; background: #f6f6f6; text-align: left;">\r\n\r\n\t\t\x3c!--\r\n\t\t\tSet the email width. Defined in two places:\r\n\t\t\t1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\r\n\t\t\t2. MSO tags for Desktop Windows Outlook enforce a 600px width.\r\n\t\t--\x3e\r\n\t\t<div style="max-width: 600px; margin: auto;'+(n(e&&e.rtl)?" text-align: right; direction: rtl;":"")+'" class="email-container">\r\n\t\t\t\x3c!--[if mso]>\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">\r\n\t\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<![endif]--\x3e\r\n\r\n\t\t\t\x3c!-- Email Header : BEGIN --\x3e\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 20px 0; text-align: center">\r\n\t\t\t\t\t\t'+(n(e&&e.logo&&e.logo.src)?'\r\n\t\t\t\t\t\t<img src="'+i(n(e&&e.logo&&e.logo.src))+'" height="'+i(n(e&&e.logo&&e.logo.height))+'" width="'+i(n(e&&e.logo&&e.logo.width))+'" alt="'+i(n(e&&e.site_title))+'" border="0" style="height: '+i(n(e&&e.logo&&e.logo.height))+"px; width: "+i(n(e&&e.logo&&e.logo.width))+'px; background: #f6f6f6; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #333333;">\r\n\t\t\t\t\t\t':"\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t")+'\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\x3c!-- Email Header : END --\x3e\r\n\r\n\x3c!-- Email Body : BEGIN --\x3e\r\n<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\r\n\r\n\t\x3c!-- 1 Column Text + Button : BEGIN --\x3e\r\n\t<tr>\r\n\t\t<td bgcolor="#ffffff">\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 40px 40px 6px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<h1 style="margin: 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;">[[email:greeting_with_name, '+i(n(e&&e.username))+']]</h1>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<h1 style="margin: 0 0 10px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.title.'+i(n(e&&e.interval))+"]]</h1>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t"+(n(e&&e.notifications&&e.notifications.length)?'\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\r\n\t\t\t\t\t\t\t'+a.blocks.notifications(t,e,n,r,o)+"\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t":"")+"\r\n\t\t\t\t"+(n(e&&e.recent&&e.recent.length)?'\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<h1 style="margin: 16px 0 24px 0; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 18px; line-height: 21px; color: #aaaaaa; font-weight: normal;">[[email:digest.latest_topics, '+i(n(e&&e.site_title))+']]</h1>\r\n\t\t\t\t\t\t<ul style="margin: 0; padding: 0;">\r\n\t\t\t\t\t\t\t'+a.blocks.recent(t,e,n,r,o)+"\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t":"")+'\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 32px 40px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t\x3c!-- Button : BEGIN --\x3e\r\n\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto;">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style="border-radius: 3px; background: #222222; text-align: center;" class="button-td">\r\n\t\t\t\t\t\t\t\t\t<a href="'+i(n(e&&e.url))+'" style="background: #222222; border: 15px solid #222222; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;" class="button-a">\r\n\t\t\t\t\t\t\t\t\t\t<span style="color:#ffffff;" class="button-link">[[email:digest.cta, '+i(n(e&&e.site_title))+']] &rarr;</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\x3c!-- Button : END --\x3e\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t\x3c!-- 1 Column Text + Button : END --\x3e\r\n\r\n</table>\r\n\x3c!-- Email Body : END --\x3e\r\n\r\n\t\t\t\x3c!-- Email Footer : BEGIN --\x3e\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height:18px; text-align: center; color: #888888;">\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t'+(n(e&&e.showUnsubscribe)?'\r\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href="'+i(n(e&&e.url))+"/uid/"+i(n(e&&e.uid))+'/settings">[[email:unsub.cta]]</a>.\r\n\t\t\t\t\t\t<br />[[email:notif.post.unsub.one-click]] <a href="'+i(n(e&&e.unsubUrl))+'">[[email:unsubscribe]]</a>.\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\x3c!-- Email Footer : END --\x3e\r\n\r\n\t\t\t\x3c!--[if mso]>\r\n\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<![endif]--\x3e\r\n\t\t</div>\r\n\r\n\t</center>\r\n</body>\r\n\r\n</html>\r\n"}return a.blocks={notifications:function(t,e,n,r){var o=t.__escape;return r(n(e&&e.notifications),function(t){return'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\r\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px;">\r\n\t\t\t\t\t\t\t\t\t\t\t'+(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].image)?'\r\n\t\t\t\t\t\t\t\t\t\t\t<img style="vertical-align: middle; width: 32px; height: 32px; border-radius: 50%" src="'+o(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].image))+'" />\r\n\t\t\t\t\t\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t\t\t\t\t\t<div style="vertical-align: middle; width: 32px; height: 32px; line-height: 32px; font-size: 16px; background-color: '+o(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].user&&e.notifications[t].user["icon:bgColor"]))+'; color: white; text-align: center; display: inline-block; border-radius: 50%">'+o(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].user&&e.notifications[t].user["icon:text"]))+"</div>\r\n\t\t\t\t\t\t\t\t\t\t\t")+'\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+o(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].notification_url))+'">'+o(n(e&&e.notifications&&e.notifications[t]&&e.notifications[t].bodyShort))+"</a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t"},function(){return""})},recent:function(o,i,a,t,l){var s=o.__escape;return t(a(i&&i.recent),function(t,e,n,r){return'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\r\n\t\t\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; width: 32px; vertical-align: middle;">'+s(l(i,o,"renderDigestAvatar",[a(r)]))+'</td>\r\n\t\t\t\t\t\t\t\t\t\t<td style="padding: 6px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a style="text-decoration:none !important; text-decoration:none; color: #333333;" href="'+s(a(i&&i.url))+"/topic/"+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].slug))+'"><strong>'+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].title))+'</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; font-size: 12px;"><a style="text-decoration:none !important; text-decoration:none; color: #aaaaaa; line-height: 16px;" href="'+s(a(i&&i.url))+"/uid/"+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].user&&i.recent[t].user.uid))+'"><strong>'+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].teaser&&i.recent[t].teaser.user&&i.recent[t].teaser.user.username))+'</strong></a></p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan="2" style="padding: 8px 16px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px; color: #333333;">\r\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 13px; line-height: 26px; color: #666666;">'+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].teaser&&i.recent[t].teaser.content))+'</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; padding: 6px 0px; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; line-height: 16px;">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a style="text-decoration:none !important; text-decoration:none; text-transform: capitalize; color: #666666; line-height: 16px;" href="'+s(a(i&&i.url))+"/topic/"+s(a(i&&i.recent&&i.recent[t]&&i.recent[t].slug))+'">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small><strong><span style="color: #aaaaaa;">&rsaquo;</span> [[global:read_more]]</strong></small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t'+(e===n-1?"":'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; margin: 0px 64px 16px 64px; border-bottom: 1px solid #dddddd"></li>\r\n\t\t\t\t\t\t\t')+"\r\n\t\t\t\t\t\t\t"},function(){return""})}},a});