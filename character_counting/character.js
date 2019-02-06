function countLetters(uniqueString) {
    // take uniqueString and count unique characters
    var cHolder = ""
    var holder = 0
    // loop through each letter 
    var object = {}
    for (var i = 0; i < uniqueString.length; i++) {
        cHolder = uniqueString[i]; 
        for (var x = 0; x < uniqueString.length; x++) {
            if (uniqueString[x] === cHolder) {
                holder += 1;
            }
        } object[cHolder] = holder; 
        holder = 0;
        cHolder = ""; 
    }  console.log(object);
}

countLetters('lighthouse in the house')