_(".button").on("click", function () {
    _(this).toggleClass("selec");
    switch (this.id) {
    case "lm_btn":
        _("#leftmenu").toggleClass("open");
        break;
    case "nf_btn":
        break;
    case "ac_btn":
        break;
    }
});