//--Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//--Dropdown Level
const inputBtn = document.getElementById('input-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('now-input-item');

//поворот стрелочки при нажатии на кнопку
inputBtn.addEventListener('click', function() {
  inputBtn.classList.toggle('active');
});

for(options of option) {
  options.onclick = function() {
    //пункты списка при нажатии появляются в верху
    text.innerHTML = this.textContent;
    //при выборе пункта остальныепрячутся снова
    inputBtn.classList.remove('active');
  };
};

/*========== CHANGE BACKGROUND HEADER ===========*/
const blurHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*============ REMOVE MRNU MOBILE ============= */
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========= SCROLL SECTIONS ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {

    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a[href*='+ sectionId +']')


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', scrollActive)

/*================ SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*===============    CARD ACTIVE BUTTON ============= */
const btnOne = document.getElementById('btn-One'),
      btnTwo = document.getElementById('btn-Two'),
      btnThree = document.getElementById('btn-Three')


if(btnOne) {
  btnOne.addEventListener('click', () => {
    btnOne.classList.add('active-btn'),
    btnTwo.classList.remove('active-btn'),
    btnThree.classList.remove('active-btn')
  })
}

if(btnTwo) {
  btnTwo.addEventListener('click', () => {
    btnTwo.classList.add('active-btn'),
    btnOne.classList.remove('active-btn'),
    btnThree.classList.remove('active-btn')
  })
}

if(btnThree) {
  btnThree.addEventListener('click', () => {
    btnThree.classList.add('active-btn'),
    btnOne.classList.remove('active-btn'),
    btnTwo.classList.remove('active-btn')
  })
}

/*============= FORM =================*/
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
  wrapper.classList.add('active');
};

loginLink.onclick = () => {
  wrapper.classList.remove('active');
};

btnPopup.onclick = () => {
  wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
};

