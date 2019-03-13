// For DOM manipilation

/*
   ====== BIO popup actions ======
*/

function closePopUp(parent) {
    var parentElId =parent.dataset.target;
    var parent = document.getElementById(parentElId);

    parent.classList.add('hide-me');
    setTimeout(function() {
        parent.className = 'pop-up';
        parent.style.display = 'none !important';
    }, 1000)
}

// For Loading Posts data from Firestore
var config = {
    apiKey: "AIzaSyAxbkzW-8wp2qPK02mfJPNFy9dHaMagR4k",
    authDomain: "adamwritesthings-343c9.firebaseapp.com",
    databaseURL: "https://adamwritesthings-343c9.firebaseio.com",
    projectId: "adamwritesthings-343c9",
    storageBucket: "",
    messagingSenderId: "324698111470"
};
firebase.initializeApp(config);
// Initialize database
var db = firebase.firestore();
// Get all posts from posts array

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    setTimeout(function() {
        db.collection('posts').get().then(function(data) {
            data.docs.forEach(function(item) {
                document.getElementById('myposts').innerHTML += `
                <div id=${item.id} class="pop-up">
                    <button data-target=${item.id} class="close-btn" onclick="closePopUp(this)">X</button>
                    <div class="pop-up-content">
                        ${item.data().content}
                    </div>
                </div>
                `
            })
        });
    }, 4000)
} else {
    db.collection('posts').get().then(function(data) {
        data.docs.forEach(function(item) {
            document.getElementById('myposts').innerHTML += `
            <div id=${item.id} class="pop-up">
                <button data-target=${item.id} class="close-btn" onclick="closePopUp(this)">X</button>
                <div class="pop-up-content">
                    ${item.data().content}
                </div>
            </div>
            `
        })
    });
}

