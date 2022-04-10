const sideNav = document.getElementById('sideNav');
const header = document.getElementById('header');
const content = document.getElementById('content');

const sideNavToggler = document.getElementById('sideNavToggler');
const mainNavToggler = document.getElementById('mainNavToggler');

sideNavToggler.addEventListener('click', function(){
  sideNav.style.left = '0%';
  sideNav.style.zIndex = '5';
  sideNav.style.width = '40%';
});

mainNavToggler.addEventListener('click', function(){
  header.style.top = '0%';
  header.style.top = '0%';
});