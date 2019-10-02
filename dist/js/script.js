// Make the DIV element draggable:
let images = document.getElementsByClassName("image");
var zIndex = 1;
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (is_safari) {
  $('body').addClass('safari');
}

if (window.innerWidth > 375) {
  for (let i = 0; i < images.length; i++) {
    dragElement(images[i]);
  }
}

function dragElement(elmnt) {
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
    zIndex++;
    elmnt.classList.add('dragged');
    elmnt.style.zIndex = zIndex;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.classList.remove('dragged');
  }
}

$(document).scroll(() => {
  let scrollHeight = $(window).scrollTop();
  let windowHeight = window.innerHeight;
  let ratio = scrollHeight / windowHeight;
  let page;
  let menuItems = document.getElementsByClassName("menu__list__item");

  if (ratio >= 9) {
    page = "contact";
  } else if (ratio >= 8) {
    page = "crowdfunding";
  } else if (ratio >= 7) {
    page = "vermicellesfans";
  } else if (ratio >= 6) {
    page = "tellhof";
  } else if (ratio >= 5) {
    page = "images";
  } else if (ratio >= 4) {
    page = "vermicelles";
  } else if (ratio >= 3) {
    page = "idee";
  } else if (ratio >= 2) {
    page = "datum";
  } else if (ratio >= 1) {
    page = "landing";
  }

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].classList.contains("menu__list__item-images")) {
      menuItems[i].classList.add('active');
    } else {
      menuItems[i].classList.remove('active');
    }
  } // console.log(scrollHeight, windowHeight, page)

});
$('#burger-icon').click(() => {
  $('.menu').toggleClass('active');
});
$('.menu__list__item').click(() => {
  $('.menu').removeClass('active');
});

if (window.innerWidth < 768) {
  document.documentElement.style.setProperty('--font-title', "6.5vh");
  document.documentElement.style.setProperty('--font-subtitle', "3.6vh");
  document.documentElement.style.setProperty('--font-menu', "2vh");
  document.documentElement.style.setProperty('--font-text', "2.9vh");
  console.log('sized to small');
} else if (window.innerWidth > 1080) {
  document.documentElement.style.setProperty('--font-title', "70px");
  document.documentElement.style.setProperty('--font-subtitle', "40px");
  document.documentElement.style.setProperty('--font-menu', "20px");
  document.documentElement.style.setProperty('--font-text', "30px");
  console.log('sized to big');
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.documentElement.style.setProperty('--font-title', "5vh");
    document.documentElement.style.setProperty('--font-subtitle', "3.6vh");
    document.documentElement.style.setProperty('--font-menu', "2vh");
    document.documentElement.style.setProperty('--font-text', "2.9vh");
    console.log('sized to small');
  } else if (window.innerWidth > 1080) {
    document.documentElement.style.setProperty('--font-title', "70px");
    document.documentElement.style.setProperty('--font-subtitle', "40px");
    document.documentElement.style.setProperty('--font-menu', "20px");
    document.documentElement.style.setProperty('--font-text', "30px");
    console.log('sized to big');
  } else if (window.innerWidth > 768) {
    document.documentElement.style.setProperty('--font-title', "6.5vw");
    document.documentElement.style.setProperty('--font-subtitle', "3.6vw");
    document.documentElement.style.setProperty('--font-menu', "2vw");
    document.documentElement.style.setProperty('--font-text', "2.9vw");
    console.log('sized to big');
  }
});