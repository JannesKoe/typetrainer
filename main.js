alert("Hi");
manytexts() //call function manytexts()
highlight(0) //call function highlight() to highlight the first letter

let wrong = 0; //Definition for wrong
document.getElementById("wrongtyping").innerHTML = "wrong: " + wrong; //wrong output at the beginning
let position = 0; // letter position

function input() {
    document.getElementById("box").innerHTML = textoutput //textouput

    let input = document.getElementById("myInput").value; //input definition
    let wrongtyping = document.getElementById("wrongtyping");

    if (textoutput[position] == input) { //check input for the same as the letters
        position += 1; //set positon +1 for the next letters
        setTimeout(highlight(position), 0); //call function highlight with the new position  
        setTimeout(clearInput, 0); //to clear the input, without it wouldn't work
    } else { //if  the input isn't the same as the letter    
        highlight(position) //highlight call again with the old position
        wrong += 1; //wrong get add +1
        wrongtyping.innerHTML = "wrong: " + wrong; //wrong will updatet in the html
        setTimeout(clearInput, 0); //call function highlight with the new position
    }

    if (position >= textoutput.length) { //if the text is on the end
        position = 0; //position updated to 0 again
        wrong = 0; //wrong updated to 0 again     
        setTimeout(manytexts, 0); //manytextes has to be called with a "setTimeout()" cause idk why
        setTimeout(restyle, 0); //here is the same problem as before
        alert("Finish") //Finish will get alert
    }
} //function input end

function clearInput() { //clear the input
    document.getElementById("myInput").value = ""; //clear the input
} //clearInput end

var textoutput; //String with the text

function manytexts() { //text will get from there

    //all defintion of the textes at the moment
    let texts = ["he sells seashells by the seashore",
    "How can a clam cram in a clean cream can?",
    "I scream, you scream, we all scream for ice cream",
    "I saw Susie sitting in a shoeshine shop",
    "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines",
    "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t fuzzy, was he?",
    "Can you can a can as a canner can can a can?",
    "I have got a date at a quarter to eight; I'll see you at the gate, so don't be late",
    "You know New York, you need New York, you know you need unique New York",
    "saw a kitten eating chicken in the kitchen",
    "If a dog chews shoes, whose shoes does he choose?",
    "I thought I thought of thinking of thanking you"];
    //all defintion of the textes at the momen
    console.log(texts)
    let rdm = Math.round(Math.random() * (texts.length - 1)); //random Number for a random row of textes
    textoutput = texts[rdm];

    let box = document.getElementById("box");

    box.innerHTML = textoutput; //text output in the text

} //end of the manytexts

//Maybe dont work cause nothing call it
//or wrong style in span

//highlight the letters

function highlight(index) {
    console.log("highlight")
    var text = $("#box").text();
    text = text.substr(0, index) + "<span style='background-color: aqua'>" + text[index] + "</span>" + text.substr(index + 1, text.length);
    $("#box").html(text);
}

//to color the background of the text type "background-color:" for the text "color:"

//Maybe dont work cause nothing call it
