var checkclick = false;
var hearts = document.getElementsByClassName("corazon")
function Puntuacion(punt, clase) {
    event.stopPropagation();
    var comp = true;
    Array.from(hearts).forEach((heart) => {
        if (punt.id != heart.id && comp == true) {
            heart.classList.add("corazonnegro")
            heart.classList.remove("corazonrojo")
        } else {
            punt.classList.add("corazonnegro")
            punt.classList.remove("corazonrojo")
            comp = false
        }
    })
}

function qPuntuacion(punt) {
    event.stopPropagation();
    let comp = true;
    Array.from(hearts).forEach((heart) => {
        if (punt.id != heart.id && comp == true) {
            heart.classList.add("corazonrojo")
            heart.classList.remove("corazonnegro")
        } else {
            punt.classList.add("corazonrojo")
            punt.classList.remove("corazonnegro")
            comp = false
        }
    })
}

function sPuntuacion(punt) {
    event.stopPropagation();
    let comp = true;
    if (punt.classList.contains("selected")) {
        Array.from(hearts).forEach((heart) => {
            if (comp == false) {
                heart.classList.remove("selected")
                heart.classList.remove("corazonnegro")
                heart.classList.add("corazonrojo")
                comp = false
            }else if (punt.id == heart.id) {
                comp = false
            }
        })
        checkclick = true
    } else {

        Array.from(hearts).forEach((heart) => {
            if (punt.id != heart.id && comp == true) {
                heart.classList.remove("corazonrojo")
                heart.classList.add("selected")
            } else {
                punt.classList.remove("corazonrojo")
                punt.classList.add("selected")
                comp = false
            }
        })
        checkclick = true
    }
}

document.getElementById("container").onclick = function () {
    event.stopPropagation();
    if (checkclick) {
        Array.from(hearts).forEach((heart) => {
            if (heart.classList.contains("selected")) {
                heart.classList.remove("selected")
                heart.classList.remove("corazonnegro")
                heart.classList.add("corazonrojo")
            }
        })
        checkclick = false
    }
}
