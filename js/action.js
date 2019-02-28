// For DOM manipilation

/*
   ====== BIO popup actions ======
*/

function closePopUp(parent) {
    var parentElId =parent.dataset.target;
    var parent = document.getElementById(parentElId);

    parent.className = 'pop-up animated fadeOutDown slow';
    setTimeout(function() {
        parent.className = 'pop-up';
        parent.style.display = 'none';
    }, 1000)
}
