var options = ["paper", "rock", "lizard", "spock", "scissors"],

    result = [" ties ", " beats ", " loses to "],

    i = Math.floor(Math.random() * 5),

    randomChoice = options[i],

    doIt = function (choice1, choice2) {
        var index1 = options.indexOf(choice1),
            index2 = options.indexOf(choice2),
            dif = index2 - index1;
        if (dif < 0) {
            dif += options.length;
        }
        while (dif > 2) {
            dif -= 2;
        }
        //return choice1 + result[dif] + choice2;

        document.getElementById(choice1).style.borderColor = "#FF0000";
        document.getElementById(choice2).style.borderColor = "#FF0000";


        //console.log(choice1 + result[dif] + choice2);

        //alert(choice1 + result[dif] + choice2);

        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        playerwon = null;
        playertied = null;
        playerlost = null;

        if (document.cookie.indexOf("playerwon") >= 0) {
            playerwon = getCookie("playerwon");
            playerwon = parseInt(playerwon);
            console.log(playerwon);
        }

        if (document.cookie.indexOf("playertied") >= 0) {
            playertied = getCookie("playertied");
            playertied = parseInt(playertied);
            console.log(playertied);
        }

        if (document.cookie.indexOf("playerlost") >= 0) {
            playerlost = getCookie("playerlost");
            playerlost = parseInt(playerlost);
            console.log(playerlost);
        }

        switch (dif) {
            case 0:
                if(playertied != null) {
                    playertied++;
                } else {
                    playertied = "1";
                }

                document.cookie = "playertied=" + playertied;
                break;

            case 1:
                if(playerwon != null) {
                    playerwon++;
                } else {
                    playerwon = "1";
                }
                document.cookie = "playerwon=" + playerwon;
                break;

            case 2:
                if(playerlost != null) {
                    playerlost++;
                } else {
                    playerlost = "1";
                }
                document.cookie = "playerlost=" + playerlost;
                break;
        }

        //var cookie = document.cookie;
        //var cstart = cookie.indexOf("playerwon=");
        //console.log(getCookie());

        //alert("Your Cookie : " + document.cookie);
    };