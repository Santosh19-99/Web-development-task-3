document.addEventListener('DOMContentLoaded', function(){
const backToTopButton = document.querySelector('.backtotop');

backToTopButton.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
}); 