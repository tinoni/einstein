
scramble = function(text) {
    // 7H3 M345UR3 0F 1N73LL163NC3 15 7H3 481L7Y 70 CH4N63.
    // 4L83R7 31N5731N
    translations = {
        't': '7',
        'e': '3',
        'a': '4',
        's': '5',
        'o': '0',
        'i': '1',
        'g': '6',
        'b': '8',
    };

    for (key in translations) {
        re = new RegExp(key, "gi");
        text = text.replace(re, translations[key]);
    }

    return text;
};



scramble_page = function() {
    $('body :not(script)').contents().filter(function() {
        return this.nodeType === 3;
    }).replaceWith(function() {
        return scramble(this.nodeValue);
    });
}



scramble_page();