const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const a_tag = document.querySelector('.nav_link');
const a_tag_hov = document.querySelector('li');
const self_write = document.querySelector('.selfwrite');

const home = document.querySelector('.Logo');
const about = document.getElementById('About');
const resume = document.getElementById('Resume');
const projects = document.getElementById('Projects');
const interests = document.getElementById('Interests');
const contact = document.getElementById('Contact');
const chat = document.querySelector('.chat')



toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  if (this.classList.toggle('bi-brightness-high-fill')) {
    a_tag.color = 'black';
    body.style.background = 'white';
    body.style.color = 'black';
    self_write.style.color = 'black';

  } else {
    a_tag.color = 'white';
    body.style.background = 'black';
    body.style.color = 'white';
    self_write.style.color = 'white';
  }
});

function scrollToSection0() {
  const section = document.querySelector('.Home_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}
function scrollToSection1() {
  const section = document.querySelector('.About_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}
function scrollToSection2() {
  const section = document.querySelector('.Resume_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}
function scrollToSection3() {
  const section = document.querySelector('.Projects_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}
function scrollToSection4() {
  const section = document.querySelector('.Interests_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}
function scrollToSection5() {
  const section = document.querySelector('.Contact_ME');
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}

home.addEventListener('click', scrollToSection0);
about.addEventListener('click', scrollToSection1);
resume.addEventListener('click', scrollToSection2);
projects.addEventListener('click', scrollToSection3);
interests.addEventListener('click', scrollToSection4);
contact.addEventListener('click', scrollToSection5);
chat.addEventListener('click', scrollToSection5);

