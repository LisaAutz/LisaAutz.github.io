// For DOM manipilation
var closeButton = document.getElementById('close');
var popUpMe = document.getElementById('pop-up-me');
closeButton.addEventListener('click', function() {
    popUpMe.style.display = 'none';
})