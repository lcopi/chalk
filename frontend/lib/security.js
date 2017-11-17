function OneTimePad (data, key) {
    if (key.length < data.length) {
        throw "In OneTimePad key must be larger than or equal to data size";
        while (key.length < data.length) key = key + key;
    }

    for (var i = 0; i < data.length; i++) {
        data[i] = data[i] ^ key[i];
    }

    return data;
}

