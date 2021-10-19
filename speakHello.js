(function(Window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function() {
        console.log(speakWord + " " + helloSpeaker.name);
    }
    Window.helloSpeaker = helloSpeaker;
})(Window);