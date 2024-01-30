function scrolll(){
    document.querySelector(".section3-right").scroll(300, 0);
}

function hamburger(){
    console.log("open");
    document.querySelector(".hamburger").style.cssText = "display: none;";
    document.querySelector(".close").style.cssText = "display: block;";
    document.querySelector(".navbar-second").style.cssText = "display: flex; right: 40%; z-index:1;";
    document.querySelector(".navbar-third").style.cssText = "display: flex; right: 42%; top: 190px; z-index: 1;";
    document.querySelector(".navbar-first").style.cssText = "padding-bottom: 200px;";
}

function hamclose(){
    console.log("close");
    document.querySelector(".close").style.cssText = "display: none;";
    document.querySelector(".hamburger").style.cssText = "display: block;";
    document.querySelector(".navbar-second").style.cssText = "right: 0px; z-index: -1;";
    document.querySelector(".navbar-third").style.cssText = "right: 0px; z-index: -1;";
    document.querySelector(".navbar-first").style.cssText = "padding-bottom: 0px;";
}

function counterNext(){
    let count = document.getElementById("section3-left-count-box-number").textContent;
    document.getElementById("section3-right-card1").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card2").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card3").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card4").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card5").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    if(count == "01"){
        document.querySelector(".section3-right").scroll(210, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "02";
        document.getElementById("section3-right-card2").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
        document.querySelector(".section3-left-prev").style.cssText = "background-color: #FB9333;";
    }
    else if(count == "02"){
        document.querySelector(".section3-right").scroll(420, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "03";
        document.getElementById("section3-right-card3").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
    else if(count == "03"){
        document.querySelector(".section3-right").scroll(630, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "04";
        document.getElementById("section3-right-card4").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
    else if(count == "04"){
        document.querySelector(".section3-right").scroll(840, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "05";
        document.getElementById("section3-right-card5").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
        document.querySelector(".section3-left-next").style.cssText = "background-color: #FFC87A;";
    }
    else{
        // document.querySelector(".section3-right").scroll(0, 0);
        // document.getElementById("section3-left-count-box-number").innerHTML = "01";
        document.getElementById("section3-right-card5").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
}

function counterPrev(){
    let count = document.getElementById("section3-left-count-box-number").textContent;
    document.getElementById("section3-right-card1").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card2").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card3").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card4").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    document.getElementById("section3-right-card5").style.cssText = "transform: scale(1); box-shadow: 0px 0px 0px #FFC87A;";
    if(count == "01"){
        // document.querySelector(".section3-right").scroll(840, 0);
        // document.getElementById("section3-left-count-box-number").innerHTML = "05";
        document.getElementById("section3-right-card1").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
    else if(count == "02"){
        document.querySelector(".section3-right").scroll(0, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "01";
        document.getElementById("section3-right-card1").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
        document.querySelector(".section3-left-prev").style.cssText = "background-color: #FFC87A;";
    }
    else if(count == "03"){
        document.querySelector(".section3-right").scroll(210, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "02";
        document.getElementById("section3-right-card2").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
    else if(count == "04"){
        document.querySelector(".section3-right").scroll(420, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "03";
        document.getElementById("section3-right-card3").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
    }
    else{
        document.querySelector(".section3-right").scroll(630, 0);
        document.getElementById("section3-left-count-box-number").innerHTML = "04";
        document.getElementById("section3-right-card4").style.cssText = "transform: scale(1.01); box-shadow: 0px 4px 8px #FFC87A;";
        document.querySelector(".section3-left-prev").style.cssText = "background-color: #FB9333;";
        document.querySelector(".section3-left-next").style.cssText = "background-color: #FB9333;";
    }
}
