let sections = document.querySelectorAll("section"); //get node object of all sections
let ul = document.getElementById("navbar__list"); 
let fragment = document.createDocumentFragment();


for (let i = 0; i < sections.length; i++){
    let element = sections[i].getAttribute("data-nav"); 
    let li = document.createElement("LI"); // create list element
    li.textContent = element;
    fragment.appendChild(li); // appnd list to fragment document
    li.addEventListener ("click", function () { // on click function to detect which section to scroll to
    sections[i].scrollIntoView({ behavior: "smooth" }); // make scroll movement
          
      });
}
ul.appendChild(fragment); // append list from the fragment to the unordered list

let list = document.querySelectorAll("li"); // get node object of all lists

document.addEventListener("scroll",function(){ 
    for (let i = 0; i < sections.length; i++){
    if (sections[i].getBoundingClientRect().top >= -100 && sections[i].getBoundingClientRect().top <= 350){ //check sections boundries in the document
         list[i].classList.add("active-class"); //change bacground list in the nav bar of the section in the boundry of view port (active state)
     } else{
         list[i].classList.remove("active-class"); // change background list in the nav of the section that is not int the boundry of the view port(active state)
     }    
  } 
});
