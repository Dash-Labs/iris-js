function getDisplayName(name) {
    return getDisplayName(name, false);
}

function getDisplayName(name, onlyFirstCapitalize) {
    if (name == null || name.length === 0) {
        return name;
    }
    var displayName = "";
    var words = name.split(/(?=[A-Z])/);
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        word = word.trim().toLowerCase();
        if (word.length === 0) {
            continue;
        }
        if (onlyFirstCapitalize && (i > 0)) {
            displayName += word;
        } else {
            displayName += word.substring(0, 1).toUpperCase();
            displayName += word.substring(1);
        }
        if (i !== (words.length - 1)) {
            displayName += " ";
        }
    }
    return displayName;
}