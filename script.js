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

let add_mus1 = document.getElementById("changesong1");
let add_mus2 = document.getElementById("changesong2");
let add_mus3 = document.getElementById("changesong3");
const form = document.querySelector("#contact_form");
const wholeform = document.getElementById('wholeform');

function add_music(event){
  const fav_song = document.getElementById('favourite-song').value;
  const f_name = document.getElementById('first-name').value;
  

  add_mus3.style.opacity = '0';
  add_mus3.style.transition = 'opacity 1s ease-in-out';
  

  setTimeout(() => {
    add_mus1.innerHTML = add_mus2.textContent;
    add_mus2.innerHTML = add_mus3.textContent;
    add_mus3.innerHTML = "♫ "+ fav_song;
    add_mus3.style.opacity = '1'; 
  }, 1000);
  wholeform.innerHTML = `
    <center>
      <div class="new-content">
        <p>It is so good to know you ${f_name}!</p>
        <p>I will get back to you as soon as possible.</p>
        <p>I will make sure to listen your favourite song "${fav_song}" too. </p>
      </div>
    </center>
  `;
  const newContent = document.querySelector('.new-content');
  newContent.classList.add('fade-in');
  add_mus1.classList.add('fade-in');
  add_mus2.classList.add('fade-in');
  


  event.preventDefault();

}




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

form.addEventListener('submit', add_music);

