const profile = document.querySelector('.user-section_profile');
const userOptions = document.querySelector('.user-section_options');
const exitProfile = document.querySelector('.exit-btn');
const sideNav = document.querySelector('.header-side-nav');
const sideNavInfo = document.querySelector('.header-side-nav_options');
const refresh = document.querySelector('.collection-btn');



profile.addEventListener('click', () => {
    userOptions.classList.add('visible');
})
exitProfile.addEventListener('click', () => {
    userOptions.classList.remove('visible')
})
sideNav.addEventListener('click', () => {
    sideNavInfo.classList.toggle('side-nav-visible')
})
refresh.addEventListener('click', () => {
    location.reload();
})