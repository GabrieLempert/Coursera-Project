(function(Window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === "j" || names[i].charAt(0) === "J") {
            Window.byeSpeaker.name = names[i];
            Window.byeSpeaker.speak();

        } else {
            Window.helloSpeaker.name = names[i];
            Window.helloSpeaker.speak();
        }
    }
})(Window);