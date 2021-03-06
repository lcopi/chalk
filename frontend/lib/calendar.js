var DatePicker = function (els) {
    if (window === this) return new Calendar();

    this.months = [
        {"full":"January",   "abbr":"Jan", "len": function (y) { return new Date(y, 1, 0).getDate(); },     "first": function (y) { return new Date(y, 0, 1).getDay(); }},
        {"full":"February",  "abbr":"Feb", "len": function (y) { return new Date(y, 2, 0).getDate(); },     "first": function (y) { return new Date(y, 1, 1).getDay(); }},
        {"full":"March",     "abbr":"Mar", "len": function (y) { return new Date(y, 3, 0).getDate(); },     "first": function (y) { return new Date(y, 2, 1).getDay(); }},
        {"full":"April",     "abbr":"Apr", "len": function (y) { return new Date(y, 4, 0).getDate(); },     "first": function (y) { return new Date(y, 3, 1).getDay(); }},
        {"full":"May",       "abbr":"May", "len": function (y) { return new Date(y, 5, 0).getDate(); },     "first": function (y) { return new Date(y, 4, 1).getDay(); }},
        {"full":"June",      "abbr":"Jun", "len": function (y) { return new Date(y, 6, 0).getDate(); },     "first": function (y) { return new Date(y, 5, 1).getDay(); }},
        {"full":"July",      "abbr":"Jul", "len": function (y) { return new Date(y, 7, 0).getDate(); },     "first": function (y) { return new Date(y, 6, 1).getDay(); }},
        {"full":"August",    "abbr":"Aug", "len": function (y) { return new Date(y, 8, 0).getDate(); },     "first": function (y) { return new Date(y, 7, 1).getDay(); }},
        {"full":"September", "abbr":"Sep", "len": function (y) { return new Date(y, 9, 0).getDate(); },     "first": function (y) { return new Date(y, 8, 1).getDay(); }},
        {"full":"October",   "abbr":"Oct", "len": function (y) { return new Date(y, 10, 0).getDate(); },    "first": function (y) { return new Date(y, 9, 1).getDay(); }},
        {"full":"November",  "abbr":"Nov", "len": function (y) { return new Date(y, 11, 0).getDate(); },    "first": function (y) { return new Date(y, 10, 1).getDay(); }},
        {"full":"December",  "abbr":"Dec", "len": function (y) { return new Date(y + 1, 0, 0).getDate(); }, "first": function (y) { return new Date(y, 11, 1).getDay(); }}
    ];
    this.week = [
        {"full":"Sunday",    "abbr":"Sun", "sabbr":"Su"},
        {"full":"Monday",    "abbr":"Mon", "sabbr":"Mo"},
        {"full":"Tuesday",   "abbr":"Tue", "sabbr":"Tu"},
        {"full":"Wednesday", "abbr":"Wed", "sabbr":"We"},
        {"full":"Thursday",  "abbr":"Thu", "sabbr":"Th"},
        {"full":"Friday",    "abbr":"Fri", "sabbr":"Fr"},
        {"full":"Saturday",  "abbr":"Sat", "sabbr":"Sa"}
    ];
    this.mode = "DAY";
    this.elements = els;
    this.date = new Date();
    this.current = {
        "Month": this.date.getMonth(),
        "Year" : this.date.getFullYear(),
        "Date" : this.date.getDate()
    };
    this.setDate(this.current.Year, this.current.Month, this.current.Date);
    return this;
};
DatePicker.prototype = {
    constructor: DatePicker,
    "PopulateGrid": function () {
        this.elements.table.child("td").text("");
        var i, j;
        var offset = this.months[this.current.Month].first(this.current.Year);
        var mlen   = this.months[this.current.Month].len(this.current.Year);
        var total_rows = Math.ceil((mlen + offset) / 7);
        /*  To increase Performance DocumentFragments should be used,
            however that feature is not supported on all major browsers so
            in the interest of cross-browser stability it is not used  */
        for (i = 0; i < total_rows; i++) {
            current_row = _(this.elements.table.child("tr")[i + 1]);
            for (j = 0; j < 7; j++) {
                var cell = _(current_row.child("td")[j]);
                var dayn = (i * 7) + j + 1 - offset;
                if (dayn > 0 && dayn <= mlen) {
                    var btn  = cell.text(dayn.toString()).dropClass("sel");
					if (!btn.prop("cal_evt")) {
						btn.on("click", function (ev) {
							var day = Number(ev.target.innerText);
							if (day > 0 && day <= this.months[this.current.Month].len(this.current.Year)) this.setDate(this.current.Year, this.current.Month, day);
						}.bind(this)).prop("cal_evt", true);
					}
                    if (this.current.Date == dayn) cell.addClass("sel");
                } else {
                    cell.dropClass("sel");
                }
            }
        }
    },
    "setDate": function (year, month, date) {
        this.current.Year  = year;
        this.current.Month = month;
        this.current.Date  = date;
        this.date.setFullYear(year);
        this.date.setMonth(month);
        this.date.setDate(date);
        this.PopulateGrid();
        this.elements["disp_top"].text(year.toString());
        this.elements["disp_bottom"].text(this.week[this.date.getDay()].abbr + ", " + this.months[month].abbr + " " + date.toString());
        this.elements["pick_top"].html(this.months[month].full + " " + year.toString())
    },
    "incrementRotate": function () {
        if (this.current.Month == 11) {
            this.setDate(this.current.Year + 1, 0, 1);
        } else {
            this.setDate(this.current.Year, this.current.Month + 1, 1);
        }
    },
    "decrementRotate": function () {
        if (this.current.Month == 0) {
            this.setDate(this.current.Year - 1, 11, 1);
        } else {
            this.setDate(this.current.Year, this.current.Month - 1, 1);
        }
    }
}