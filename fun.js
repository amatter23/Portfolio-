// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello World.', 'Matter.', 'enjoy.'], 'text', ['white', '#33da89bd', '#889498']);
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}




const buttoncatj = [document.getElementById("Poster-button"), document.querySelector("#Degital-Art-button"), document.querySelector("#Motion-Graphics-button")];
const projectcontaner = [document.querySelector('#posters'), document.querySelector('#degital-art'), document.querySelector('#motion-graphics')];
const atrp = ["data-viseple-poster", "data-viseple-degitalart", "data-viseple-motiongraphics"]
function seclectcontenerproj(clicked_id) {
    const vispel = clicked_id;
    for (let step = 0; step < 3; step++) {
        for (let step1 = 0; step1 < 3; step1++) {
            projectcontaner[step1].setAttribute(atrp[step1], false);
        }
        if (vispel == buttoncatj[step].id) {
            projectcontaner[step].setAttribute(atrp[step], true);
            { break; }
        }

    }
}


window.addEventListener('scroll', vissr)
function vissr() {
    var visss = document.querySelectorAll('.viss');
    for (var i = 0; i < visss.length; i++) {
        var windowheight = window.innerHeight
        var visstop = visss[i].getBoundingClientRect().top
        var visspoint = 150;

        if (visstop < windowheight - visspoint) {
            visss[i].classList.add('active')
        }
        else {
            visss[i].classList.remove('active')
        }
    }
}
window.addEventListener('scroll', point)
function point() {
    var visss = document.querySelectorAll('.dots');
    var need = document.querySelectorAll('.dote')
    console.log(need.length)
    for (var i = 0; i < visss.length; i++) {
        var windowheight = window.innerHeight
        var visstop = visss[i].getBoundingClientRect().offsetTop
        var visspoint = 0;
        if (visstop < windowheight) {
            need[i].classList.add('cool')
            var set = visstop;
        }
        // else if (visstop > ) {
        //     need[i].classList.remove("cool")

        // for (var i = 0; i < visss.length; i++) {
        //     if (need[i].classList.contains("cool")) {
        //         for (i; i < 0; i--) {
        //             need[i].classList.remove("cool")
        //         }
        //     }
        // }
    }
}

