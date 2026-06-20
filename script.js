/*
=================================
ABLE GOD COLLECIONS
MAIN JAVASCRIPT
=================================
*/


// ================================
// PRODUCT SEARCH FUNCTION
// ================================


const searchBox = document.getElementById("searchBox");

const products = document.querySelectorAll(".product-card");


if(searchBox){

    searchBox.addEventListener("keyup", function(){

        const searchValue = searchBox.value.toLowerCase();


        products.forEach(product => {


            const productName =
            product.dataset.name?.toLowerCase()
            ||
            product.innerText.toLowerCase();



            if(productName.includes(searchValue)){

                product.style.display = "block";

            }

            else {

                product.style.display = "none";

            }


        });


    });

}






// ================================
// NAVBAR SCROLL EFFECT
// ================================


window.addEventListener("scroll",()=>{


const header =
document.querySelector(".header");


if(window.scrollY > 50){


header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.15)";


}

else {


header.style.boxShadow =
"0 3px 15px rgba(0,0,0,0.08)";


}


});






// ================================
// FADE-IN ANIMATION
// ================================


const animatedSections =
document.querySelectorAll("section");



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";


}


});


});



animatedSections.forEach(section=>{


section.style.opacity = "0";

section.style.transform =
"translateY(40px)";

section.style.transition =
"all .8s ease";


observer.observe(section);


});







// ================================
// CURRENT YEAR FOOTER
// ================================


const year =
document.querySelector("footer p");


if(year){

year.innerHTML =
`© ${new Date().getFullYear()} ABLE GOD COLLECIONS. All Rights Reserved.`;

}



// ================================
// MOBILE MENU
// ================================


const menuToggle =
document.getElementById("menuToggle");


const navbar =
document.getElementById("navbar");



if(menuToggle){


menuToggle.addEventListener("click",()=>{


navbar.classList.toggle("active");


});


}



// Close menu after clicking a link


document.querySelectorAll(".navbar a")
.forEach(link=>{


link.addEventListener("click",()=>{


navbar.classList.remove("active");


});


});