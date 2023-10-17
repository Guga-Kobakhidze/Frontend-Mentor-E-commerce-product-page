// Menu for mobile -->

const navMenu = document.getElementById("nav");
const navClose = document.getElementById("close-btn");
const navToggle = document.getElementById("toggle-btn");
const navLinks = document.querySelectorAll(".nav_link");

const removeMenu = (nav, menu) => {
  nav.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
};

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

removeMenu(navClose, navMenu);

navLinks.forEach((link) => {
  removeMenu(link, navMenu);
});

// Buttons for Cart Section

const equalNum = document.querySelector(".number");
const plusBtn = document.querySelector(".plus"); // for quantity
const minusBtn = document.querySelector(".minus"); // for quantity
const proQuantity = document.querySelector(".pro_quantity");
const proQuantity1 = document.querySelector(".pro_quantity1");
const addToCart = document.querySelector(".toCart_btn"); // Add to cart button
const lastPrice = document.querySelector(".last_price"); // multiply quantity and price

const productDetails = document.querySelector(".product_details");
const trash = document.querySelector(".trash");

// for quantity

let result = 0;

plusBtn.addEventListener("click", () => {
  result += 1;
  equalNum.textContent = result;
});

minusBtn.addEventListener("click", () => {
  if (result > 0) {
    result -= 1;
    equalNum.textContent = result;
  }
});

// price

const price = document.querySelector(".new_price");

let priceString = "$125";
price.textContent = priceString;

const priceNumber = parseInt(priceString.replace("$", ""));

const textEmpty = document.querySelector(".textEmpty");

// Add to cart Button -->

let firstResult = 0;

addToCart.addEventListener("click", () => {
  if (result > 0) {
    firstResult = result;
    proQuantity.textContent = firstResult;
    proQuantity1.textContent = firstResult;

    lastPrice.textContent = `$${firstResult * priceNumber}.00`;
    productDetails.style.scale = "1";
    result = 0;
    equalNum.textContent = 0;
    textEmpty.style.display = "none";
  }

  trash.addEventListener("click", () => {
    productDetails.style.scale = "0";
    proQuantity.textContent = "0";
    firstResult = 0;
    textEmpty.style.display = "block";
  });
});

// inside cart methods

const shopIcon = document.querySelector(".cart_btn");

shopIcon.addEventListener("click", () => {
  const productCart = document.querySelector(".cart_info");
  if (productCart.style.display === "block") {
    productCart.style.display = "none";
  } else {
    productCart.style.display = "block";
  }
});

// Changing products images Function

const imgFunc = (
  mainImg,
  smallImages,
  smallImageHover,
  leftHandle,
  rightHandle
) => {
  smallImages.forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
    });
  });

  smallImageHover.forEach((image) => {
    image.addEventListener("click", () => {
      smallImageHover.forEach((otherImage) => {
        otherImage.classList.remove("smallImageBorder");
      });
      image.classList.add("smallImageBorder");
    });
  });

  let currentIndex = 0;

  leftHandle.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + smallImages.length) % smallImages.length;
    mainImg.src = smallImages[currentIndex].src;
  });

  rightHandle.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % smallImages.length;
    mainImg.src = smallImages[currentIndex].src;
  });

  console.log(smallImages.length);
  return;
};

const mainImg = document.getElementById("mainImg");
const smallImages = document.querySelectorAll(".small-img");
const smallImageHover = document.querySelectorAll(".smallImage");
const leftHandle = document.querySelector(".left_handle");
const rightHandle = document.querySelector(".right_handle");

imgFunc(mainImg, smallImages, smallImageHover, leftHandle, rightHandle); // For desktop

// Overlay

const overlayClose = document.querySelector(".overlay_btn");
const overlay = document.querySelector(".overlay");
const overlayImg = document.getElementById("overlay-img");
const overlaySmImgs = document.querySelectorAll(".small-img1");
const leftHandle1 = document.querySelector(".left_handle1");
const rightHandle1 = document.querySelector(".right_handle1");

mainImg.addEventListener("click", () => {
  overlay.style.display = "block";
});

overlayClose.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

imgFunc(overlayImg, overlaySmImgs, smallImageHover, leftHandle1, rightHandle1); // for overlay
