var checkclick = false;
        var hearts = document.getElementsByClassName("corazon")

        function Puntuacion(punt) {
            event.stopPropagation();
            console.log(punt.id)
            if (punt.id == "pun1" && checkclick == false) {
                punt.classList.add("corazonnegro")
                punt.classList.remove("corazonrojo")
            } else if (punt.id == "pun2" && checkclick == false) {
                punt.classList.add("corazonnegro")
                punt.classList.remove("corazonrojo")
                document.getElementById("pun1").classList.add("corazonnegro")
                document.getElementById("pun1").classList.remove("corazonrojo")
            } else if (punt.id == "pun3" && checkclick == false) {
                punt.classList.add("corazonnegro")
                document.getElementById("pun1").classList.add("corazonnegro")
                document.getElementById("pun1").classList.remove("corazonrojo")
                document.getElementById("pun2").classList.add("corazonnegro")
                document.getElementById("pun2").classList.remove("corazonrojo")
            } else if (punt.id == "pun4" && checkclick == false) {
                punt.classList.add("corazonnegro")
                punt.classList.remove("corazonrojo")
                document.getElementById("pun1").classList.add("corazonnegro")
                document.getElementById("pun1").classList.remove("corazonrojo")
                document.getElementById("pun2").classList.add("corazonnegro")
                document.getElementById("pun2").classList.remove("corazonrojo")
                document.getElementById("pun3").classList.add("corazonnegro")
                document.getElementById("pun3").classList.remove("corazonrojo")
            } else if (punt.id == "pun5" && checkclick == false) {
                punt.classList.add("corazonnegro")
                punt.classList.remove("corazonrojo")
                document.getElementById("pun1").classList.add("corazonnegro")
                document.getElementById("pun1").classList.remove("corazonrojo")
                document.getElementById("pun2").classList.add("corazonnegro")
                document.getElementById("pun2").classList.remove("corazonrojo")
                document.getElementById("pun3").classList.add("corazonnegro")
                document.getElementById("pun3").classList.remove("corazonrojo")
                document.getElementById("pun4").classList.add("corazonnegro")
                document.getElementById("pun4").classList.remove("corazonrojo")
            }
        }

        function qPuntuacion(punt) {
            event.stopPropagation();
            if (punt.id == "pun1" && checkclick == false) {
                punt.classList.add("corazonrojo")
                punt.classList.remove("corazonnegro")
            } else if (punt.id == "pun2" && checkclick == false) {
                punt.classList.add("corazonrojo")
                punt.classList.remove("corazonnegro")
                document.getElementById("pun1").classList.add("corazonrojo")
                document.getElementById("pun1").classList.remove("corazonnegro")
            } else if (punt.id == "pun3" && checkclick == false) {
                punt.classList.add("corazonrojo")
                punt.classList.remove("corazonnegro")
                document.getElementById("pun1").classList.add("corazonrojo")
                document.getElementById("pun1").classList.remove("corazonnegro")
                document.getElementById("pun2").classList.add("corazonrojo")
                document.getElementById("pun2").classList.remove("corazonnegro")
            } else if (punt.id == "pun4" && checkclick == false) {
                punt.classList.add("corazonrojo")
                punt.classList.remove("corazonnegro")
                document.getElementById("pun1").classList.add("corazonrojo")
                document.getElementById("pun1").classList.remove("corazonnegro")
                document.getElementById("pun2").classList.add("corazonrojo")
                document.getElementById("pun2").classList.remove("corazonnegro")
                document.getElementById("pun3").classList.add("corazonrojo")
                document.getElementById("pun3").classList.remove("corazonnegro")
            } else if (punt.id == "pun5" && checkclick == false) {
                punt.classList.add("corazonrojo")
                punt.classList.remove("corazonnegro")
                document.getElementById("pun1").classList.add("corazonrojo")
                document.getElementById("pun1").classList.remove("corazonnegro")
                document.getElementById("pun2").classList.add("corazonrojo")
                document.getElementById("pun2").classList.remove("corazonnegro")
                document.getElementById("pun3").classList.add("corazonrojo")
                document.getElementById("pun3").classList.remove("corazonnegro")
                document.getElementById("pun4").classList.add("corazonrojo")
                document.getElementById("pun4").classList.remove("corazonnegro")
            }
        }

        function sPuntuacion(punt) {
            event.stopPropagation();
            if (punt.classList.contains("selected")) {
                if (punt.id == "pun1") {
                    console.log("click1")
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id != "pun1") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                    })
                    checkclick = false
                } else if (punt.id == "pun2") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id != "pun1" && heart.id != "pun2") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        /*if (heart.id != "pun2") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }*/
                    })
                    checkclick = false
                } else if (punt.id == "pun3") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id != "pun1" && heart.id != "pun2" && heart.id != "pun3") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        /*if (heart.id != "pun2") {
                            heart.classList.remove("selected")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id != "pun3") {
                            heart.classList.remove("selected")
                            heart.classList.add("corazonrojo")
                        }*/
                    })
                    checkclick = false
                } else if (punt.id == "pun4") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id != "pun1" && heart.id != "pun2" && heart.id != "pun3" && heart.id != "pun4") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        /*if (heart.id == "pun2") {
                            heart.classList.remove("selected")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun3") {
                            heart.classList.remove("selected")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun4") {
                            heart.classList.remove("selected")
                            heart.classList.add("corazonrojo")
                        }else{
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }*/
                    })
                    checkclick = false
                } else if (punt.id == "pun5") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun2") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun3") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun4") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                        if (heart.id == "pun5") {
                            heart.classList.remove("selected")
                            heart.classList.remove("corazonnegro")
                            heart.classList.add("corazonrojo")
                        }
                    })
                    checkclick = false
                }
            } else {
                if (punt.id == "pun1") {
                    console.log("click1")
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            console.log("cambiando1")
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                    })
                    checkclick = true
                } else if (punt.id == "pun2") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun2") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                    })
                    checkclick = true
                } else if (punt.id == "pun3") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun2") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun3") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                    })
                    checkclick = true
                } else if (punt.id == "pun4") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun2") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun3") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun4") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                    })
                    checkclick = true
                } else if (punt.id == "pun5") {
                    Array.from(hearts).forEach((heart) => {
                        if (heart.id == "pun1") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun2") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun3") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun4") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                        if (heart.id == "pun5") {
                            heart.classList.remove("corazonrojo")
                            heart.classList.add("selected")
                        }
                    })
                    checkclick = true
                }
            }

        }

        document.getElementById("container").onclick = function() {
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