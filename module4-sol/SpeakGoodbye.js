(function(Window) {
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    byeSpeaker.speak = function() {
        console.log(speakWord + " " + byeSpeaker.name);
    }
    Window.byeSpeaker = byeSpeaker;
})(Window);