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

let get_resume = document.getElementById("Download_Resume");
let modal = document.getElementById("thanks-modal");
let modalContent = document.getElementById("modal-content");
let modal_button = document.getElementById("modal-button");

modal_button.addEventListener('click',function() {
  modal.style.display = "none";
}
)
get_resume.addEventListener('click', function() {
  modal.style.display = "flex";
  setTimeout(function() {
    modal.style.display = "none";
  }, 15000); 
});
 
function add_music(event){

  const fav_song = document.getElementById('favourite-song').value;
  const f_name = document.getElementById('first-name').value;

  
  // add_mus3.style.transition = 'opacity 1s ease-in-out';
  

    add_mus1.innerHTML = add_mus2.textContent;
    add_mus2.innerHTML = add_mus3.textContent;
    add_mus3.innerHTML = "♫ "+ fav_song;
    

  wholeform.innerHTML = `
    <center>
      <div class="new-content" data-aos="fade-up" data-aos-delay="300">
        <p>It is so good to know you ${f_name}!</p>
        <p>I will get back to you as soon as possible.</p>
        <p>I will make sure to listen your favourite song "${fav_song}" too. </p>
      </div>
    </center>
  `;


  add_mus1.classList.add('fade-in');
  add_mus2.classList.add('fade-in');
  add_mus3.classList.add('fade-in');



  


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

function scrollToSection(to_section) {
  const section = document.querySelector(to_section);
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
    duration:2000
  });
}

window.onbeforeunload = function () {
  window.scrollTo({
    behavior: 'smooth',
    duration:2000
  });
  
}
  
about.addEventListener('click', function () {scrollToSection('.About_ME')});
resume.addEventListener('click', function () {scrollToSection('.Resume_ME')});
projects.addEventListener('click', function () {scrollToSection('.Projects_ME')});
interests.addEventListener('click', function () {scrollToSection('.Interests_ME')});
contact.addEventListener('click', function () {scrollToSection('.Contact_ME')});
chat.addEventListener('click', function () {scrollToSection('.Contact_ME')});

const validateForm = (event) => {

  let containsErrors = false;

  var userInputs = document.getElementById("contact_form").elements;
  for (let i = 0; i < userInputs.length-1; i++) {
    if (userInputs[i].value.length < 2) {
      containsErrors = true;
      userInputs[i].classList.add('error');
    } else {
      if (i == 2 && !userInputs[i].value.includes('@')){
          userInputs[i].classList.add('error');
          containsErrors= true;
          alert("Please include your email address too.");
      }
      else{
      userInputs[i].classList.remove('error');
    }
    }
    if (containsErrors) {
      break; // exit loop if there are errors
    } 
    }

  if (containsErrors) {
    event.preventDefault(); // prevent form submission
  } else {
    add_music(); // call add_music if there are no errors
  }
}

form.addEventListener('submit', validateForm);


