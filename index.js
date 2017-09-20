_(".button").on("click", function () {
    if(_(this).hasClass("selec")) {
        _(".button.selec").dropClass("selec");
        _(".rightmenu, #leftmenu").dropClass("open");
    } else {
        _(".button.selec").dropClass("selec");
        _(".rightmenu, #leftmenu").dropClass("open");
        _(this).addClass("selec");
        switch (this.id) {
        case "lm_btn":
            _("#leftmenu").addClass("open");
            break;
        case "nf_btn":
            _("#notifmenu").addClass("open");
            break;
        case "ac_btn":
            _("#accountmenu").addClass("open");
            break;
        }
    }
});

var calendar = new Calendar({
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
calendar.PopulateGrid();