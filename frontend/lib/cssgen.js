function Color (str) {
    if (window && window === this) return new Color(str);
    if (global && global === this) return new Color(str);

    this.red   = 0;
    this.green = 0;
    this.blue  = 0;

    this.hue        = 0;
    this.saturation = 0;
    this.luminance  = 0;

    this.alpha = 1;

    str = str.trim();
    switch (true) {
    case (/^\#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?(?:[a-fA-F0-9]{2})?$/).test(str):
        // A hexidecimal cubic-coordinate representation of a color,
        // 3 bytes or 3 4-bit nibbles (implies repitition) and 1 optional alpha byte
        str = str.replace(/(?:^\#|\s*$)/g, "");
        switch (str.length) {
        case 3:
            this.red = Number("0x" + str[0] + str[0]);
            this.blue = Number("0x" + str[1] + str[1]);
            this.green = Number("0x" + str[2] + str[2]);
            break;
        case 5:
            this.red = Number("0x" + str[0] + str[0]);
            this.blue = Number("0x" + str[1] + str[1]);
            this.green = Number("0x" + str[2] + str[2]);
            this.alpha = Number("0x" + str[3] + str[4]) / 255;
            break;
        case 6:
            this.red = Number("0x" + str[0] + str[1]);
            this.blue = Number("0x" + str[2] + str[3]);
            this.green = Number("0x" + str[4] + str[5]);
            break;
        case 8:
            this.red = Number("0x" + str[0] + str[1]);
            this.blue = Number("0x" + str[2] + str[3]);
            this.green = Number("0x" + str[4] + str[5]);
            this.alpha = Number("0x" + str[6] + str[7]) / 255;
            break;
        }
        break;
    case (/^rgb(?:a)?\s*\((?:\s*[0-9.]{1,3}\s*\,)\s*[0-9.]{1,3}\s*\)$/).test(str):
        // A decimal cubic-coordinate representation of a color,
        // 3 coordinate bytes and 1 optional alpha byte
        str = str.replace(/(?:^rgb(?:a)\s*\(|\)\s*$)/g, "");
        var arr = str.split(",");
        this.red   = Number(arr[0].trim());
        this.green = Number(arr[1].trim());
        this.blue  = Number(arr[2].trim());

        if (arr.length > 3) thia.alpha = Number(arr[3].trim());
        break;
    case (/^hsl(?:a)?\s*[0-9.]{1,3}\s*(?:deg|rad)\s*\((?:\,\s*[0-9.]{1,3}\%\s*)\)$/).test(str):
        // a decimal cylindrical-corrdinate representation of a color,
        // 3 corrdinate bytes and 1 optional alpha byte
        str = str.replace(/(?:^rgb(?:a)\s*\(|\)\s*$)/g, "");
        var arr = str.split(",");
        var mults = new Array(3);
        this.hue        = Number(arr[0].trim().replace(/(?:\s*|\%|deg|rad)/g, function (x) {
            if (x == "rad") mults[0] = 180 / Math.PI;
        })) * mults[0];
        this.saturation = Number(arr[1].trim().replace(/(?:\s*|\%|deg|rad)/g, function (x) {
            if (x == "%") mults[1] = 1E-1;
        })) * mults[1];
        this.luminance  = Number(arr[2].trim().replace(/(?:\s*|\%|deg|rad)/g, function (x) {
            if (x == "%") mults[2] = 1E-1;
        })) * mults[2];

        if (arr.length > 3) thia.alpha = Number(arr[3].trim());
        break;
    default:
        throw "Invalid Color";
        break;
    }
    this.enforceBounds();
    return this;
}


Color.prototype = {
    "constructor": Color,
    "enforceBounds": function () {
        if (this.red > 255) this.red = 255;
        if (this.blue > 255) this.blue = 255;
        if (this.green > 255) this.green = 255;
        this.hue = this.hue % 360;
        if (this.saturation > 1) this.saturation = 1;
        if (this.luminance > 1) this.luminance = 1;
        if (this.alpha > 1) this.alpha = 1;
        return this;
    },

    "getHSLA": function () {},
    "getRGBA": function () {}

    "overlay": function () {},
    "combine": function () {},
    "lighten": function () {},
    "darken" : function () {},

    "toString": function (type) {
        if (typeof type == "undefined") {

        } else if (type == "hex") {

        } else if (type == "rgb") {

        } else if (type == "hsl") {

        }
    },
}
