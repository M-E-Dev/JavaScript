// const myDom = document.getElementById("dom");
// console.log(myDom);


// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);

// const withClassName = document.getElementsByClassName("class-info");
// // console.log(withClassName);
// console.log(withClassName[0]);


// const cw = document.getElementsByTagName("h3");
// console.log(cw);


const brands = document.querySelector('#brands');
console.log(brands);

const innerBrands = document.querySelectorAll(".brand");
console.log(innerBrands)

innerBrands.innerHTML += "<li>Muhammed</li>";
console.log(innerBrands[4].innerText)