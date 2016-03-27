var chooseMaker = function () {
    var userChoose = function () {
        var user_choice = prompt("Do you choose rock, paper or scissors?");
        if (user_choice != "rock" && user_choice != "paper" && user_choice != "scissors") {
            user_choice = userChoose();
        }
        return user_choice;
    };
    userChoice = userChoose();
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    }
};
var compare = function (choice1,choice2) {
    if (choice1 === choice2) {
        console.log("Please choose again!");
        chooseMaker();
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }    
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};
var userChoice,computerChoice;
chooseMaker();
console.log(compare(userChoice,computerChoice));