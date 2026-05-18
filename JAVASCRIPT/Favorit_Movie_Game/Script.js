let favoite_movie = "KGF"
let guess = prompt("Enter a movie name.").trim().toUpperCase();

while((guess != favoite_movie) && (guess != "QUIET")){
    guess = prompt("Wrong movie please again enter a movie name.").trim().toUpperCase();
}

if(guess == favoite_movie){
    console.log("Congratulation you won the game...");
}
else{
    console.log("You quiet the game..");
}
 console.log("Thank you for the particpation");