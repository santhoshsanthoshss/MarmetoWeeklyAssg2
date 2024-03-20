// NAVBAR

let mainview = document.querySelector(".mainview");
let shop = document.getElementById("shop");
let brand = document.getElementById("brand");
let contact = document.getElementById("contact");
let signbtn = document.querySelector(".signbtn");

// navbar
async function displaynav() {
  let navlist = await fetch("./data.json");
  navlist = await navlist.json();
  //   console.log(navlist[0]);

  navlist[0].map((item) => {
    console.log(item.navigation[0]);
    shop.innerHTML = `${item.navigation[0].shop}`;
    brand.innerHTML = `${item.navigation[1].brand}`;
    contact.innerHTML = `${item.navigation[2].contact}`;
    signbtn.innerHTML = `${item.navigation[3].button}`;
  });
}
displaynav();

//bodycontent
let discover = document.getElementById("discover");
let heading1 = document.getElementById("heading1");
let subHeading = document.getElementById("subHeading");
let prices = document.getElementById("prices");

async function displaycontent() {
  let bodydetails = await fetch("./data.json");
  bodydetails = await bodydetails.json();

  bodydetails[1].map(
    ({ heading_text, id, description, sub_heading_text, price }) => {
      if (id === 0) {
        subHeading.innerHTML = sub_heading_text;
        discover.innerHTML = description;
        prices.innerHTML = price;
      }
    }
  );
}
displaycontent();

let parentcontainer = document.getElementById("parentcontainer");
let contenttheme = document.getElementById("contenttheme");

// console.log(parentcontainer);
// console.log(contenttheme);

document.addEventListener("DOMContentLoaded", async function () {
  let productdata = await fetch("./data.json");
  productdata = await productdata.json();
  productdata = productdata;
  //   console.log(productdata[1]);

  var splide = new Splide(".splide", {
    pagination: false,
  });

  splide.on("move", function (newItem) {
    productdata[1].find((item) => {
      //   console.log(newItem); //total item in the json 1111 , 2222, 3333
      //   console.log(item.id); 0,1,2,3
      console.log(item);
      let {
        id,
        heading_text,
        description,
        price,
        background,
        sub_heading_text,
      } = item;

      if (newItem === id) {
        console.log("Tomatch");
        contenttheme.innerHTML = `
        <h2>${heading_text} <br> <span class="subHeading">${sub_heading_text}</span></h2>
       <p>${description}</p>
       <h1>${price}</h1>
        `;
        parentcontainer.style.background = `${background}`;
      }
    });
  });
  splide.mount();
});
