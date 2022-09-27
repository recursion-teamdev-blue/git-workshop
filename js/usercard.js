function makeCard(cardDataObject){
    // <article<
    let innerFlex = document.createElement("article");
    innerFlex.classList.add("col-12", "col-lg-6", "mt-2", "mb-4");

    // <div class="card card-style">
    let card = document.createElement("div");
    card.classList.add("card", "card-style");

    // <div class="card-body">
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h2 = document.createElement("h2");
    h2.innerHTML = cardDataObject.title;
    
    let textPictureBox = document.createElement("div");
    textPictureBox.classList.add("d-flex", "justify-content-around", "aling-items-center");
    let textP = document.createElement("p");
    textP.classList.add("card-text", "col-5");
    textP.innerHTML = cardDataObject.text;

    let foodImg = document.createElement("img");
    foodImg.src = cardDataObject.imgUrl
    foodImg.classList.add("col-5");

    textPictureBox.append(textP);
    textPictureBox.append(foodImg);

    cardBody.append(h2);
    cardBody.append(textPictureBox);

    card.append(cardBody);
    innerFlex.append(card);
    return innerFlex;
}


class cardData{
    constructor(title, text, imgUrl){
        this.title = title;
        this.text = text;
        this.imgUrl = imgUrl;
    }
}

let data1 = new cardData("What's New?", "春の新メニュー「フルーツパイ」をご用意しました。新鮮なフルーツと生クリームのハーモニーをお楽しみください。", "img/cake-4910417_1280.jpg");
let data2 = new cardData("Recommendation", "今月のお薦めは「ラムダブレンド」。やや苦みのある上品な香りのコーヒーです。", "img/coffee-6632524_1280.jpg" );

let target = document.getElementById("target");

let ele1 = makeCard(data1);
let ele2 = makeCard(data2);

target.append(ele1);
target.append(ele2);