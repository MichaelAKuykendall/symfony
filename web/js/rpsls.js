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

        //document.getElementById(choice1).style.borderColor = "#FF0000";
        //document.getElementById(choice2).style.borderColor = "#FF0000";

        var i = document.getElementById(choice1);
        i.classList.add("winner");

        var j = document.getElementById(choice2);
        j.classList.add("winner");

        setTimeout(function () {
            var i = document.getElementById(choice1);
            i.classList.remove("winner");

            var j = document.getElementById(choice2);
            j.classList.remove("winner");

        }, 3000);

        //console.log(choice1 + result[dif] + choice2);

        alert(choice1 + result[dif] + choice2);

        playerwon = null;
        playertied = null;
        computerwon = null;
        totalplays = 0;

        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        function checkCookie(name) {
            if (document.cookie.indexOf(name) >= 0) {
                name = getCookie(name);
                return parseInt(name);
            } else {
                return 0;
            }
        }

        playerwon = checkCookie("playerwon");
        playertied = checkCookie("playertied");
        computerwon = checkCookie("computerwon");
        totalplays = checkCookie("totalplays");
        rockct = checkCookie("rockct");
        paperct = checkCookie("paperct");
        scissct = checkCookie("scissct");
        spockct = checkCookie("spockct");
        lizardct = checkCookie("lizardct");

        switch (choice1) {
            case "rock":
                rockct++;
                break;

            case "paper":
                paperct++;
                break;

            case "scissors":
                scissct++;
                break;

            case "spock":
                spockct++;
                break;

            case "lizard":
                lizardct;
                break;
        }

        switch (choice2) {
            case "rock":
                rockct++;
                break;

            case "paper":
                paperct++;
                break;

            case "scissors":
                scissct++;
                break;

            case "spock":
                spockct++;
                break;

            case "lizard":
                lizardct;
                break;
        }

        document.cookie = "rockct=" + rockct;
        document.getElementById("rockct").innerHTML = rockct;

        document.cookie = "paperct=" + paperct;
        document.getElementById("paperct").innerHTML = paperct;

        document.cookie = "scissct=" + scissct;
        document.getElementById("scissct").innerHTML = scissct;

        document.cookie = "spockct=" + spockct;
        document.getElementById("spockct").innerHTML = spockct;

        document.cookie = "lizardct=" + lizardct;
        document.getElementById("lizardct").innerHTML = lizardct;

        document.cookie = "totalplays=" + totalplays;

        switch (dif) {

            //Tied
            case 0:
                if (playertied != null) {
                    playertied++;
                    totalplays++;
                } else {
                    playertied = "1";
                    totalplays++;
                }

                document.cookie = "playertied=" + playertied;
                document.cookie = "totalplays=" + totalplays;
                document.getElementById("tie").innerHTML = playertied;
                break;

            //Player won
            case 1:
                if (playerwon != null && computerwon != null) {
                    playerwon++;
                    computerwon != 0 ? computerwon-- : computerwon = 0;
                    totalplays++;
                } else {
                    playerwon = "1";
                    computerwon = "0";
                    totalplays++;
                }

                document.cookie = "playerwon=" + playerwon;
                document.cookie = "computerwon=" + computerwon;
                document.cookie = "totalplays=" + totalplays;

                document.getElementById("human").innerHTML = playerwon;
                document.getElementById("comp").innerHTML = computerwon;
                break;

            //Computer won
            case 2:
                if (playerwon != null && computerwon != null) {
                    playerwon != 0 ? playerwon-- : playerwon = 0;
                    computerwon++;
                    totalplays++;
                } else {
                    computerwon = "1";
                    playerwon = "0";
                }

                document.cookie = "playerwon=" + playerwon;
                document.cookie = "computerwon=" + computerwon;
                document.cookie = "totalplays=" + totalplays;
                document.getElementById("human").innerHTML = playerwon;
                document.getElementById("comp").innerHTML = computerwon;
                break;
        }

    };