let petsCardContainer = document.getElementById("petsCardInfos");
let likeBtn = document.getElementById("likebtn");
let unLike = document.getElementById("unlikebtn");
let card = document.getElementById("card");
let petsArray = [];

let image = document.getElementById("image");
let info = document.getElementById("catinfos");

petsArray = [
  { src: "img1.jpg", catName: "Sina", info: "a very calm cat" },
  { src: "img2.jpg", catName: "Besbosa", info: "angry cat" },
  { src: "img3.jpg", catName: "Rena", info: "a very calm cat" },
  { src: "img4.jpg", catName: "Zetao", info: "funny cat" },
  {prblm: "No more Cats", msg: "You can come another time for more!"}
];

let i = 0;
likeCat();

let inLiked = [];

function likeCat() {
  if (i < petsArray.length - 1) {
    info.innerHTML = "";
    image.setAttribute("src", petsArray[i].src);

    let h2 = document.createElement("h2");
    h2.innerText = petsArray[i].catName;

    let p = document.createElement("p");
    p.innerText = petsArray[i].info;

    info.appendChild(h2);
    info.appendChild(p);

    i++;
  }else {
    
    info.innerHTML = "";
    card.innerHTML = "";

    let div = document.createElement("div");
    
    let problem = document.createElement("h2");
    problem.innerHTML = petsArray[i].prblm;

    let message = document.createElement("p");
    message.innerHTML = petsArray[i].msg;
    
    card.appendChild(div);
    div.appendChild(problem);
    div.appendChild(message);
  }
}

// function unLike(){
    
// }