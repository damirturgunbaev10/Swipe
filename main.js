const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

const lightModeColor = '#000000';
const darkModeColor = '#FFFFFF';
const lightModeBg = '#FFFFFF';
const darkModeBg = '#1a1a1a';


function updateTextColors(isDarkMode) {
    const textColor = isDarkMode ? darkModeColor : lightModeColor;
    
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a, li, input, label');
    
    elements.forEach(element => {
        element.style.color = textColor;
    });
    
    body.style.backgroundColor = isDarkMode ? darkModeBg : lightModeBg;
}


function store(value){
  localStorage.setItem('darkmode', value);
}

function load(){
  const darkmode = localStorage.getItem('darkmode');
  let isDarkModeActive = false;

  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    isDarkModeActive = true;
  } else if(darkmode == 'false'){
    icon.classList.add('fa-sun');
    isDarkModeActive = false;
  }
  
  updateTextColors(isDarkModeActive);
}

load();

btn.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  const isDarkMode = body.classList.contains('darkmode');

  updateTextColors(isDarkMode);

  store(isDarkMode);

  if(isDarkMode){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
});
