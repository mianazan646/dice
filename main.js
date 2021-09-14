var random=Math.floor(Math.random()*6)+1;

    document.querySelector(".img1").setAttribute("src", "images/dice"+random+".png")

var pandom=Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img2").setAttribute("src", "images/dice"+pandom+".png")

if (random==pandom) {
    document.querySelector("h1").textContent="Draw!";
}
else if(random>pandom){
    document.querySelector("h1").textContent="Player 1 Wins! 🚩";
}
else if(random<pandom){
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}