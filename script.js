

const signMenuSection = document.querySelector('.sign-menu-section');
const signMenuText = document.querySelector('.sign-menu-text');
const signMenuUl = document.querySelector(".sign-in-menu ul");

window.addEventListener('scroll', function(e){
   
   if(window.pageYOffset >= 234){
      signMenuSection.style.background  = '#f7f7f7';
      signMenuText.style.visibility = 'visible'
      signMenuUl.style.background = '#f7f7f7'
   }else if(this.window.pageYOffset < 234){
      signMenuSection.style.background  = 'transparent';
      signMenuText.style.visibility = 'hidden'
      signMenuUl.style.background = '#fff'
   }
})

// Language change function

const english = document.querySelector('.english');
const bangla = document.querySelector('.bangla');

bangla.addEventListener('click', function(){
   english.style.background = 'transparent'
   english.style.color = 'blue'
   bangla.style.background = 'blue'
   bangla.style.color = 'white'
})

english.addEventListener('click', function(){
   english.style.background = 'blue'
   english.style.color = 'white'
   bangla.style.background = 'transparent'
   bangla.style.color = 'blue'
})