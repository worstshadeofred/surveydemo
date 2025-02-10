
let currentBox = 0;
let maxBoxes = 2;

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function updateButtons(){
    var next = document.getElementById("next");
    var back = document.getElementById("back");
    var submit = document.getElementById("submit");
    if (currentBox==0){
        console.log("F");
        back.style = "display: none;";
        next.style ="display: flex;";
        submit.style ="display: none;";
    } else if (currentBox>0 && currentBox<maxBoxes) {
        console.log("AAF")
        next.style ="display: flex;";
        back.style ="display: flex;";
        submit.style ="display: none;";
    } else if (currentBox == maxBoxes) {
        next.style = "display: none;";
        submit.style ="display: flex;";
        back.style = "display:flex;";
    }
}


function updateBox(newBox){
    currentBox = newBox;
    updateButtons();
    for (let i=0; i<=maxBoxes; i++){
        if (newBox == i){
            console.log(i)
            document.getElementById("b"+(i+1).toString()).style = "visiblity: visible;";
        } else {
            console.log(i)
            document.getElementById("b"+(i+1).toString()).style = "visibility: hidden;"
        }
    }
    
}

function special(fullname, age, gender, date, country, dreamjob, color){
    document.getElementById("main-container").style = "visibility: hidden;";
    document.getElementById("buttons").style = "visibility: hidden;";
    document.getElementById("container2").style = "visibility: visible;";
    document.getElementById("haha").innerHTML = "You! Yes you. Hi "+fullname.value+", a "+gender.value+" born on "+date.value+" in the country of "+country.value+" who's "+age.value.toString()+" years old now. You dreamt of being a "+dreamjob.value+" back then, didn't you? And your favorite color is "+color.value+" isn't it??"
}

var bruhImages = ["https://i.pinimg.com/736x/5a/ed/cf/5aedcfe4159b1be073efa2f9dc6683dc.jpg", "https://i.pinimg.com/736x/79/15/b5/7915b50d3a556bc4aa4e726c714b1313.jpg", "https://i.pinimg.com/736x/6f/ef/a0/6fefa03ff24d4f3f01ce4fbe5b93baa4.jpg", "https://i.pinimg.com/736x/cb/7e/2c/cb7e2c47422735c20370fec38ab96ce9.jpg"]

function playSound(url) {
    var a = new Audio(url);
    a.play();
}

function YEHEY(){
    window.location = "https://youtu.be/62J5hTHKbHs";
}

function bruh(){
    var bruhElement = document.getElementById("bruh");
    var randomImage = bruhImages[Math.floor(Math.random()*bruhImages.length)];
    console.log(randomImage);
    bruhElement.style.zIndex = "4"
    bruhElement.style.backgroundSize = "70%";
    bruhElement.style.backgroundImage = "url('"+randomImage+"')";
    bruhElement.style.opacity = 1;
    playSound("boom.mp3");
    for (o = 1; o > 0.1; o = o - 0.1){           
        setTimeout(function(){bruhElement.style.opacity = o;},200);                   
    }  

    bruhElement.style.zIndex = "2"
}


let noI = 0

window.onload = function(){
    var next = document.getElementById("next");
    var back = document.getElementById("back");
    var submit = document.getElementById("submit");
    var fullname = document.getElementById("fullname");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");
    var date = document.getElementById("date");
    var country = document.getElementById("country");
    var dreamjob = document.getElementById("dreamjob");
    var color = document.getElementById("color");
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    next.addEventListener("click", function(){
        updateBox(clamp(currentBox+1, 0, maxBoxes));
    })
    back.addEventListener("click", function(){
        updateBox(clamp(currentBox-1, 0, maxBoxes));
    })
    submit.addEventListener("click", function(){
        special(fullname, age, gender, date, country, dreamjob, color);
    })
    yes.addEventListener("click", function(){
        YEHEY();
    })
    no.addEventListener("click", function(){
        if (noI == 0) {
            bruh();
            no.innerHTML = "BRUH";
            noI++;
        } else if (noI == 1) {
            bruh();
            no.innerHTML = "FR???";
            noI++;
        } else if (noI == 2) {
            bruh();
            no. innerHTML = "I THINK YOU MADE A MISTAKE";
            noI++;
            
        } else if (noI == 3) {
            bruh();
            no. innerHTML = "SANDALI AYUSIN KO";
            noI++;
        } else if (noI == 4) {
            bruh();
            no. innerHTML = "AYAN";
            noI++;
        } else if (noI == 5) {
            bruh();
            no. innerHTML = "YES";
            no.style = "background-color: green;"
            noI++;
        } else {
            YEHEY();
        }
    })
    updateBox(0);
}


