const pageWrapper = document.querySelector("#page-wrapper")
const footer = document.querySelector("footer")



// HANDLE FUNCTIONS
function handleDropdownOpen() {
  backgroundInset.classList.add("show-background-inset")
  dropdownMenu.classList.add("show-dropdown-menu")
  pageWrapper.classList.add("blur-background")
  footer.classList.add("blur-background")
}

function handleDropdownClose() {
  backgroundInset.classList.remove("show-background-inset")
  dropdownMenu.classList.remove("show-dropdown-menu")
  pageWrapper.classList.remove("blur-background")
  footer.classList.remove("blur-background")
}



// SHOW AND HIDE DROPDOWN MENU

// hide on resize window
let isDropdownMenuOpen = false

window.onresize = () =>{
  isDropdownMenuOpen = false
  handleDropdownClose();
}

// show and hide with hamburger button
const mobileHamburger = document.querySelector("#mobile-hamburger")
const backgroundInset = document.querySelector("#background-inset")
const dropdownMenu = document.querySelector("#dropdown-menu")

mobileHamburger.onclick = () => {
  isDropdownMenuOpen = !isDropdownMenuOpen

  if(isDropdownMenuOpen){
    handleDropdownOpen();
    return
  }

  handleDropdownClose();
}

backgroundInset.onclick = () => {
  isDropdownMenuOpen = !isDropdownMenuOpen

  handleDropdownClose();
}



// HANDLE "LEARN MORE" UNDERLINE HOVER
const type2Link1 = document.querySelector("#type2-link1")
const underLine1 = document.querySelector("#under-line-1")

type2Link1.onmouseover = () => {
  underLine1.classList.add("link-underline-hover")
}

type2Link1.onmouseout = () => {
  underLine1.classList.remove("link-underline-hover")
}



const type2Link2 = document.querySelector("#type2-link2")
const underLine2 = document.querySelector("#under-line-2")

type2Link2.onmouseover = () => {
  underLine2.classList.add("link-underline-hover")
}

type2Link2.onmouseout = () => {
  underLine2.classList.remove("link-underline-hover")
}



// HANDLE SVG FOTTER-ICONS HOVER
// Facebook icon
const fbSvg = document.querySelector("#fb-svg")
const fbPath = document.querySelector("#fb-path")
fbSvg.onmouseover = () => {
  fbPath.classList.add("hover-footer-icons")
}

fbSvg.onmouseout = () => {
  fbPath.classList.remove("hover-footer-icons")
}


// Instagram icon
const igSvg = document.querySelector("#ig-svg")
const igPath = document.querySelector("#ig-path")
igSvg.onmouseover = () => {
  igPath.classList.add("hover-footer-icons")
}

igSvg.onmouseout = () => {
  igPath.classList.remove("hover-footer-icons")
}


// Twitter icon
const twSvg = document.querySelector("#tw-svg")
const twPath = document.querySelector("#tw-path")
twSvg.onmouseover = () => {
  twPath.classList.add("hover-footer-icons")
}

twSvg.onmouseout = () => {
  twPath.classList.remove("hover-footer-icons")
}



// Pinterest icon
const ptSvg = document.querySelector("#pt-svg")
const ptPath = document.querySelector("#pt-path")
ptSvg.onmouseover = () => {
  ptPath.classList.add("hover-footer-icons")
}

ptSvg.onmouseout = () => {
  ptPath.classList.remove("hover-footer-icons")
}










