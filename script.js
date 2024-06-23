window.addEventListener('scroll', function() {
    const navigation = document.querySelector('.navigation');
    if (window.scrollY > 0) {
        navigation.style.backgroundColor = '#fff';
    } else {
        navigation.style.backgroundColor = 'transparent';
    }
});
//scroll animation
const components = document.querySelectorAll('.component');
const triggerButton = window.innerHeight;

window.addEventListener('scroll', componentUp);

function componentUp() {
  components.forEach(component => {
    const componentTop = component.getBoundingClientRect().top;
    if (componentTop < triggerButton) {
      component.classList.add('up');
    } else {
      component.classList.remove('up');
    }
  });

}
