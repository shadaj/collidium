function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var version = "1.0.0"

var howToPlays = [
    "Welcome to Collidium!",
    "Shoot the ball into the red hole",
    "Going the wrong way?<br/>Sketch some lines onto the board!",
    "Slowing down?<br/>Use some rocket fuel!",
    "Have Fun!"]
var howToPlayIndex = 0

function howToPlay(index) {
    if (index == 5) {
        $("#game").fadeIn(1000, function () {
            $("html,body").animate({ scrollTop: document.getElementById("game").offsetTop }, 500)
            Main().start()
            setCookie("version", version, 365)
        })
    } else {
        document.getElementById("howToPlay").innerHTML = howToPlays[index]
        $("#howToPlay").fadeIn(1000, function() {
            $("#howToPlay").fadeOut(1000, function() {
                howToPlay(index + 1)
            })
        })
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function showHowToPlay() {
    if (getCookie("version") != version ) {
        howToPlay(0)
    } else {
        $("#game").fadeIn(1000, function () {
            $("html,body").animate({ scrollTop: document.getElementById("game").offsetTop }, 500)
            Main().start()
            setCookie("version", version, 365)
        })
    }
}