
// Main JS - menu, forms, interactivity
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));
  }

  // Year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Join form demo
  const joinForm = document.getElementById('joinForm');
  const formMsg = document.getElementById('formMsg');
  if(joinForm){
    joinForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      // basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if(!name || !email){ alert('Please enter name and email'); return; }
      formMsg.classList.remove('hidden');
      joinForm.reset();
      setTimeout(()=> formMsg.classList.add('hidden'), 4000);
    });
  }

  // Newsletter demo
  const newsForm = document.getElementById('newsForm');
  const newsMsg = document.getElementById('newsMsg');
  if(newsForm){
    newsForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      newsMsg.classList.remove('hidden');
      newsForm.reset();
      setTimeout(()=> newsMsg.classList.add('hidden'), 3000);
    });
  }
});
