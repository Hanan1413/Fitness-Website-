


let navs = document.querySelectorAll('.Navbar__Items')





function classToggle() {
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);





// To remove toggle show on nav's  link click

function remove() {
  
  navs.forEach(nav => nav.classList.remove('Navbar__ToggleShow'));
}




document.querySelectorAll('.link').forEach(item => {
  item.addEventListener('click', remove )
})




// to make content show behind navbar

let navBar = document.querySelector('.Navbar').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navBar + 50 +  "px")




