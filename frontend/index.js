_(".button").on("click", function () {
    if(_(this).hasClass("selec")) {
        _(".button.selec").dropClass("selec");
        _(".rightmenu, #leftmenu").dropClass("open");
        switch (this.id) {
        case "lm_btn":
            _(this).html("menu");
            break;
        case "nf_btn":
            _(this).html("notifications");
            _("#search, #ac_btn").css({"display":"inline-block"});
            _("#left_btns").css({"right":"382px"});
            break;
        case "ac_btn":
            _(this).html("person");
            _("#search, #nf_btn").css({"display":"inline-block"});
            _("#left_btns").css({"right":"382px"});
            break;
        }
    } else {
        _(".button.selec").dropClass("selec");
        _(".rightmenu, #leftmenu").dropClass("open");
        _(this).addClass("selec");
        switch (this.id) {
        case "lm_btn":
            _(this).html("arrow_back");
            _("#leftmenu").addClass("open");
            _("#search, #nf_btn, #ac_btn").css({"display":"inline-block"});
            _("#left_btns").css({"right":"382px"});
            _("#ac_btn").html("person");
            _("#nf_btn").html("notifications");
            break;
        case "nf_btn":
            _(this).html("arrow_forward");
            _("#notifmenu").addClass("open");
            _("#search, #ac_btn").css({"display":"none"});
            _("#left_btns").css({"right":"0"});
            _("#lm_btn").html("menu");
            break;
        case "ac_btn":
            _(this).html("arrow_forward");
            _("#accountmenu").addClass("open");
            _("#search, #nf_btn").css({"display":"none"});
            _("#left_btns").css({"right":"0"});
            _("#lm_btn").html("menu");
            break;
        }
    }
});

/*var calendar = new Calendar({
    "table"    :_("#cal_picker_grid"),
    "rotdisp"  :_("#cal_picker_rot_disp"),
    "dispmonth":_("#cal_picker_mnth"),
    "dispdow"  :_("#cal_picker_dow"),
    "dispyear" :_("#cal_picker_year"),
    "dispdate" :_("#cal_picker_day")
});
_("#cal_rot_back").on("click", function () {
    calendar.decrementRotate();
});
_("#cal_rot_frwd").on("click", function () {
    calendar.incrementRotate();
});
calendar.PopulateGrid();*/

var notif = Chalk.Notifications.NewNotification(
    "Messaging / <b>First Last</b>", 
    "", 
    "HJbv nfjkls fnsjk. njknsvf njknkvfs iopq vboq hvuiw jlvns iogwb. Ohwiubvp rijwi iuwbqpv. Nvjnfsjkvf ?", 
    Chalk.Notifications.TEXT, 
    Chalk.Notifications.SEND, 
    Chalk.Notifications.RESPOND,
    Chalk.Notifications.OPEN, 
    Chalk.Notifications.IGNORE
);

var notif2 = Chalk.Notifications.NewNotification(
    "Service Notification",
    "",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros sapien, vulputate eget sem non, condimentum pharetra odio. Nulla lobortis.",
    Chalk.Notifications.YES,
    Chalk.Notifications.NO
);

var notif3 = Chalk.Notifications.NewNotification(
    "Service Notification",
    "",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros sapien, vulputate eget sem non, condimentum pharetra odio. Nulla lobortis.",
    Chalk.Notifications.OPEN,
    Chalk.Notifications.IGNORE
);

var notif4 = Chalk.Notifications.NewNotification(
    "Service Notification",
    "",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros sapien, vulputate eget sem non, condimentum pharetra odio. Nulla lobortis.",
    Chalk.Notifications.OK
);