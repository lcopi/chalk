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