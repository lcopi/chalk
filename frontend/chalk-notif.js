// Chalk Notification Menu needs to be manually defined
var CHALK_NOTIF_MENU = _("#notifmenu");

if (typeof Chalk == "undefined") {
    window.Chalk = {};
}

Chalk.Notifications = {
    "OK": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("clear_all").on("onclick", function () {
            if (this.onclear) this.onclear();
            this.dismiss();
        }.bind(this)).appendTo(this.actions_el).attr("title", "Dismiss");
        this.actions.ok = btn;
    },
    "YES": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("check").css("color","#1B5E20").on("onclick", function () {
            this.onaffirm();
            this.dismiss();            
        }.bind(this)).appendTo(this.actions_el).attr("title", "Yes");
        this.actions.yes = btn;
    },
    "NO": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("close").css("color","#B71C1C").on("onclick", function () {
            this.ondecline();
            this.dismiss();
        }.bind(this)).appendTo(this.actions_el).attr("title", "No");
        this.actions.no = btn;
    },
    "TEXT": function () {
        let btn = _("<input.chalk-notif-action-txtin>").appendTo(this.actions_el).attr("placeholder", "Enter Response Here");
        this.actions.txtin = btn;
    },
    "SEND": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("send").css("display", "none","color","#0D47A1").on("onclick", function () {
            this.onreply(this.actions.txtin.value());
            this.dismiss();            
        }.bind(this)).appendTo(this.actions_el).attr("title", "Send");
        this.actions.send = btn;
    },
    "RESPOND": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("reply").css("color","#0D47A1").on("click", function () {
            if ("txtin" in this.actions) {
                this.actions.txtin.css("display","inline-block");
                this.actions.send.css("display", "inline-block");
                this.actions.respond.css("display", "none");
                if ("open" in this.actions) this.actions.txtin.css("width", "calc(100% - 126px)");
            } else {
                this.onreply();
                this.dismiss();
            }
        }.bind(this)).appendTo(this.actions_el).attr("title", "Respond");
        this.actions.respond = btn;
    },
    "OPEN": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("open_in_new").on("onclick", function () {
            this.onopen();
            this.dismiss();            
        }.bind(this)).appendTo(this.actions_el).attr("title", "Open");
        this.actions.open = btn;
    },
    "IGNORE": function () {
        let btn = _("<div.chalk-notif-action-button.material-icons>").html("close").css("color","#B71C1C").on("onclick", function () {
            if (this.onclear) this.onclear();
            console.log(this);
            this.dismiss();
        }.bind(this)).appendTo(this.actions_el).attr("title", "Dismiss");
        this.actions.ignore = btn;
    },
    "NewNotification": function (service, ico, text, actions__) {
        var notif = ChalkNotification(...arguments);
        return notif;
    }
};

function ChalkNotification (service, ico, text) {
    if (window === this) {
        return new ChalkNotification(...arguments);
    }

    this.onreply   = undefined;
    this.onsend    = undefined;
    this.onaffirm  = undefined;
    this.ondecline = undefined;
    this.onclear   = undefined;

    this.parent_el  = _("<div.chalk-notif-item>");
    this.service_el = _("<div.chalk-notif-serv>").appendTo(this.parent_el);
    this.actions_el = _("<div.chalk-notif-actions>").appendTo(this.parent_el);
    this.text_el    = _("<div.chalk-notif-text>").html(text).appendTo(this.parent_el);

    this.serv_ico_el = _("<div.chalk-notif-serv-ico>").css({"background-image":"url(" + ico + ")"}).appendTo(this.service_el);
    this.serv_txt_el = _("<div.chalk-notif-serv-text>").html(service).appendTo(this.service_el);

    this.actions = {};

    for (var i = 3; i < arguments.length; i++) {
        arguments[i].call(this);
    }

    CHALK_NOTIF_MENU.append(this.parent_el);

    return this;
};

ChalkNotification.prototype = {
    "constructor":ChalkNotification,
    "dismiss": function () {
        this.parent_el.css("left", "100%");
        window.setTimeout(function () {
            this.parent_el.remove();
        }.bind(this), 500);
    }
};