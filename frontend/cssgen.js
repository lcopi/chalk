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
    case (/^hsl(?:a)?\s*\((?:\s*[0-9.]{1,3}\s*\,)\s*[0-9.]{1,3}\s*\)$/).test(str):
        // a decimal cylindrical-corrdinate representation of a color,
        // 3 corrdinate bytes and 1 optional alpha byte
        str = str.replace(/(?:^rgb(?:a)\s*\(|\)\s*$)/g, "");
        var arr = str.split(",");
        this.hue        = Number(arr[0].trim());
        this.saturation = Number(arr[1].trim());
        this.luminance  = Number(arr[2].trim());

        if (arr.length > 3) thia.alpha = Number(arr[3].trim());
        break;
    }
}
