
(function(window) {


var byeSpeaker = {};

var speakWord = "Good Bye";



byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
window.byeSpeaker = byeSpeaker;

})(window);
