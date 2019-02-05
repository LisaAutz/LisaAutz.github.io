// For DOM manipilation

/*
   ====== BIO popup actions ======
*/
var closeButton = document.getElementById('close');
var popUpMe = document.getElementById('pop-up-me');

closeButton.addEventListener('click', function() {
    popUpMe.className = 'pop-up animated bounceOutDown';
    setTimeout(function() {
        popUpMe.className = 'pop-up';
        popUpMe.style.display = 'none';
    }, 1000)

});