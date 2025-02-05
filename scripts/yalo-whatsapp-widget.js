var WIDGET_DATA, yalochat = {
    css: function () {
        return `
            .widget_bg1{background:#25d366!important}.widget_bg2{background:#3f50b5!important}.widget_bg3{background:#2f3542!important}.widget_bg4{background:#ff6566!important}.widget_bg5{background:#00bcd4!important}.widget_bg6{background:#006064!important}.widget_bg7{background:#ee6123!important}.widget_bg8{background:#34b7f1!important}.widget_bg9{background:#53cec6!important}.widget_bg10{background:#6d68cb!important}.widget_bg11{background:#903671!important}#floating_button_yalochat{font-size-adjust:none;letter-spacing:normal;font-stretch:normal;font:normal normal 100% 'Helvetica Neue',Helvetica,Arial,sans-serif;text-align-last:auto;text-decoration:none;-webkit-text-emphasis:none}#floating_button_yalochat{max-width:300px;overflow:hidden;transition:all .4s ease-out;min-width:60px;height:60px;border-radius:60px;cursor:pointer;box-shadow:0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16);position:fixed;bottom:20px;background:#29323c;z-index:9999}#floating_button_yalochat.left{left:20px}#floating_button_yalochat.right{right:20px}#floating_button_yalochat span{position:relative;top:19px;font-size:16px;color:#fff;font-weight:500;display:block;float:left;box-sizing:border-box;padding-left:60px;padding-right:20px;transition:all .3s ease}#yalochat_widget_box,#widget_popup{width:290px;border-radius:5px;background-color:rgba(255,255,255,.98);box-shadow:rgba(0,0,0,.05) 0 0 0 1px,rgba(0,0,0,.15) 0 5px 30px 0,rgba(0,0,0,.05) 0 3px 3px 0;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:16px 10px 16px 10px;position:fixed;bottom:96px;transition:all .3s ease-out;padding-bottom:0;transform:translate3d(0,20px,0);opacity:0}#widget_logo{position:absolute;top:16px;left:15px!important;transition:all .3s ease;opacity:1;width:28px}#floating_button_yalochat:hover{box-shadow:0 2px 3px 0 rgba(60,64,67,.16),0 1px 5px 2px rgba(60,64,67,.32)}#yalochat_notification,#yalochat_notification *{font-family:"Open Sans",Helvetica,Arial,sans-serif,Tahoma!important}#yalochat_notification{transition-duration:.3s;opacity:0;transform:scale(.9)}#yalochat_notification.yalochat_notification_active{opacity:1;transform:scale(1)}#yalochat_notification{background:#006064;border-radius:2px;position:fixed;z-index:2147483646;top:20px;left:20px;width:400px;padding:25px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#yalochat_notification .yalochat_notification_status{float:left;margin:0 20px 0 0;border-radius:50%;width:50px;height:50px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#yalochat_notification .yalochat_notification_status_good{background:url(https://script.hotjar.com/checkmark@2x.6c5c82.png) no-repeat 52% 53% #3acc40;background-size:25px 18px}#yalochat_notification .yalochat_notification_status_bad{background:url(https://script.hotjar.com/attention@2x.0ae767.png) no-repeat center center #ea4031;background-size:6px 30px}#yalochat_notification .yalochat_notification_status_warning{background:url(https://script.hotjar.com/attention@2x.0ae767.png) no-repeat center center #f39c11;background-size:6px 30px}#yalochat_notification .yalochat_notification_status{float:left}#yalochat_notification .yalochat_notification_content{float:left;color:#dedede;font-size:13px;width:78%;min-height:50px;vertical-align:middle}#yalochat_notification .yalochat_notification_title{color:white;font-size:16px;font-weight:700;margin:0 0 4px 0;display:inline-block}.yalochat_notification_close{position:absolute;top:15px;right:15px;font-size:22px;color:white;cursor:pointer;line-height:11px}.yalochat_clear{clear:both}.powered-by{text-decoration:none;color:#454545;font:normal normal 100% 'Helvetica Neue',Helvetica,Arial,sans-serif;display:none;transition:all .4s ease-out;position:fixed;right:25px;bottom:2px;font-size:10px;z-index:9999;-webkit-font-smoothing:antialiased}#yalochat_button:hover>.powered-by{display:block};.powered-by:hover{display:block}#yalochat_button{position:absolute;height:80px;bottom:0;right:0;min-width:60px}#yalochat_button.title{min-width:160px}#yalochat_button.right{right:20px}#yalochat_button.left{left:20px}[data-tooltip]{display:inline-block;position:relative;cursor:help;padding:4px}[data-tooltip]:before{content:attr(data-tooltip);display:none;position:absolute;background:#000;opacity:.5;color:#fff;padding:4px 8px;font-size:14px;line-height:1.4;min-width:150px;text-align:center;border-radius:4px}[data-tooltip-position="top"]:before,[data-tooltip-position="bottom"]:before{left:50%;-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%)}[data-tooltip-position="right"]:before,[data-tooltip-position="left"]:before{top:45%;-ms-transform:translateY(-50%);-moz-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-tooltip-position="top"]:before{bottom:100%;margin-bottom:6px}[data-tooltip-position="right"]:before{left:60px;margin-left:6px}[data-tooltip-position="bottom"]:before{top:100%;margin-top:6px}[data-tooltip-position="left"]:before{right:60px;margin-right:6px}[data-tooltip]:after{content:'';display:none;position:absolute;width:0;height:0;border-color:transparent;border-style:solid}[data-tooltip-position="top"]:after,[data-tooltip-position="bottom"]:after{left:50%;margin-left:-6px}[data-tooltip-position="right"]:after,[data-tooltip-position="left"]:after{top:45%;margin-top:-6px}[data-tooltip-position="top"]:after{bottom:100%;border-width:6px 6px 0;border-top-color:#000}[data-tooltip-position="right"]:after{left:60px;border-width:6px 6px 6px 0;border-right-color:#000;opacity:.5}[data-tooltip-position="bottom"]:after{top:100%;border-width:0 6px 6px;border-bottom-color:#000;opacity:.5}[data-tooltip-position="left"]:after{right:60px;border-width:6px 0 6px 6px;border-left-color:#000;opacity:.5}[data-tooltip]:hover:before,[data-tooltip]:hover:after{display:block;z-index:50}
        `;
    },

    init: function (options) {
        yalochat.reInitWidget(options);
        yalochat.appendStyleButton(options);
        yalochat.appendButton();
    },

    appendStyleButton: function (options) {
        head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style");

        var custom_style = options.style;

        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = this.css() + custom_style
        } else {
            style.appendChild(document.createTextNode(this.css() + custom_style));
        }

        head.appendChild(style);
    },

    appendButton: function () {
        var tooltip_position = WIDGET_DATA.position === 'right'? 'left': 'right';
        var yalochat_widget = document.createElement("div");
        yalochat_widget.setAttribute("id", "yalochat_button");
        yalochat_widget.setAttribute("data-tooltip", WIDGET_DATA.tooltip);
        yalochat_widget.setAttribute("data-tooltip-position", tooltip_position);
        document.body.appendChild(yalochat_widget);

        yalochat_widget = document.getElementById("yalochat_button");

        yalochat_widget.classList = `${WIDGET_DATA.position} icon`;

        yalochat_widget.innerHTML = `
                <a id='floating_button_yalochat' class='widget_bg1 ${WIDGET_DATA.position}' href='${WIDGET_DATA.url}' target='_blank'>
                    <img src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-3-1.png' alt='WhatsApp' id='widget_logo' style='right:10px;'>
                </a>
            `;
    },

    reInitWidget: function (options) {
        WIDGET_DATA = {
            phone: options.whatsapp,
            text: options.text,
            tooltip: options.tooltip,
            currentUrl: options.send_url,
            url: `https://wa.me/${options.whatsapp}`,
            position: options.position? options.position: 'right',
            style: ``
        }

        if (WIDGET_DATA.text) {
            WIDGET_DATA.url = `${WIDGET_DATA.url}?text=${WIDGET_DATA.text}`;
            if (WIDGET_DATA.currentUrl) {
                WIDGET_DATA.url = `${WIDGET_DATA.url} ${window.location.href}`;
            }
        } else if (WIDGET_DATA.currentUrl) {
            WIDGET_DATA.url = `${WIDGET_DATA.url}?text=${window.location.href}`;
        }
    }
};
