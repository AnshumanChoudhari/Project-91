player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score = player1_score;
document.getElementById("player2_score").innerHTML = player2_score = player2_score;

document.getElementById("player_question").innerHTML = "Quetion Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);
    charAT1 = word.charAT(1);
    console.log(charAT1);
    length_divide_2 = Math.floor(word.length/2);
    charAT2 = word.charAT(length_divide_2);
    console.log(charAT2);
    length_minus_1 = word.length-1;
    charAT3 = word.charAT(length_minus_1)

    remove_charAT1= word.replace(charAT1,"_");
    remove_charAT2= remove_charAT1(charAT2,"_");
    remove_charAT3= remove_charAT2(charAT3,"_");
    question_word = "<h4 id='word_display'> q. " + remove_charAT3 + "</h4>";
    input_box = "<br> answer: <input type='text'id='input_check_box'> ";
    
}