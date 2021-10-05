





//make navbar
const sections =Array.from( document.querySelectorAll("section"));
const menu = document.getElementById("nav-list");
const navbarToggler = document.querySelector(".nav-toggle");
let numberOfListItem = sections.length;
function creatItem() {
document.addEventListener('scroll', toggelClass);
navbarToggler.addEventListener("click", navbarTogglerClick);
function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-nav-toggle");
  menu.classList.toggle("open");
}
  for (let section of sections) {
     
   let sectionName = section.getAttribute("data-nav");
   let sectionLink = section.getAttribute('id');
   let listItem = document.createElement('li');
   listItem.innerHTML =`<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`
     listItem.addEventListener('click',navbarLinkClick)
     
function navbarLinkClick(event) {

  smoothScroll(event); 

  if(menu.classList.contains("open")) { 
    navbarToggler.click();
  }

}  
// scroll smooth
     function smoothScroll(event) {
  event.preventDefault();
  const targetId = `#${
            event.target.innerText.replace(/\s/g, "").toLowerCase()}`
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  
  window.requestAnimationFrame(step);
// animation in sections
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);

    function easeInOutCubic(a, b, c, d) {
      let ans=0;
	a /= d/2;
	if (a < 1) {
    ans=c/2*Math.pow(a,3) + b;
    return ans;
  }
	a -= 2;
  ans=c/2*(Math.pow(a,3) + 2) + b
	return ans;
};

  }
}

    menu.appendChild(listItem);
}
}

// Add class 'active' to section when near top of viewport

function sectionInViewPort(elm) {
  let setctionPos = elm.getBoundingClientRect();
  return (setctionPos.top >= -200 && setctionPos.top<=400);
}
function toggelClass(){
  for (let section of sections) {
  section.classList.remove('sec-active');
    if (sectionInViewPort(section)) {
      (!section.classList.contains('active-class'))?section.classList.add('sec-active'):section.classList.remove('active-class');
    }
  }
}

creatItem();
document.addEventListener('scroll', toggelClass);


