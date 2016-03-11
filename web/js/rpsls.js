var options = ["paper", "rock", "lizard", "spock", "scissors"],

    result = [" ties ", " beats ", " loses to "],

    i = Math.floor(Math.random() * 5),

    randomChoice = options[i],

    doIt = function(choice1, choice2) {
        var index1 = options.indexOf(choice1),
            index2 = options.indexOf(choice2),
            dif = index2 - index1;
        if(dif < 0) {
            dif += options.length;
        }
        while(dif > 2) {
            dif -= 2;
        }
         //return choice1 + result[dif] + choice2;
        document.getElementById(choice1).style.borderColor="#FF0000";
        document.getElementById(choice2).style.borderColor="#FF0000";

        document.cookie = 'cookie1=test; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/';

        console.log(choice1 + result[dif] + choice2);
        // /alert(choice1 + result[dif] + choice2);

        alert("Your Cookie : " + document.cookie);
    };