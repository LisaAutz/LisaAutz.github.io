   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAxbkzW-8wp2qPK02mfJPNFy9dHaMagR4k",
    authDomain: "adamwritesthings-343c9.firebaseapp.com",
    databaseURL: "https://adamwritesthings-343c9.firebaseio.com",
    projectId: "adamwritesthings-343c9",
    storageBucket: "",
    messagingSenderId: "324698111470"
};
firebase.initializeApp(config);
var db = firebase.firestore();

//============== Check If the user logged in =====================
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        uid = user.uid;
        console.log(user)
        document.getElementById('private').style.display = 'block';
        document.getElementById('public').style.display = 'none';
        document.getElementById('sign-out').style.display = 'inline-block';
        document.getElementById('form').style.display = 'none';
        document.getElementById('spinner').style.display = 'flex';

    } else {
        console.log('user not', user);
        document.getElementById('public').style.display = 'block';
        document.getElementById('public').className += ' alert-danger';
        document.getElementById('sign-out').style.display = 'none';
        document.getElementById('form').style.display = 'flex'
        document.getElementById('spinner').style.display = 'none';
    }
});

var form = document.getElementById('form');
// Messages for Admin
var messages = document.getElementById('messages');

// Sign in process
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = form['email'].value;
    var password = form['password'].value;
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            // success message
            messages.className += ' alert-success d-block';
            location.reload()
        })
        .catch(function (error) {
            console.log(error.message)
            // success message
            messages.className += ' alert-danger d-block'
            document.getElementById('msg-content').innerHTML = '<strong>Login Failed!</strong> ' + error.message;
        });
});

// =============  Sign Out the user  =====================
document.getElementById('sign-out').addEventListener('click', function (event) {
    event.preventDefault();
    firebase.auth().signOut().then(function () {
        console.log('User Signed out');
        document.getElementById('sign-out').style.display = 'inline-block';
        document.getElementById('form').style.display = 'none';
        location.reload()
    }).catch(function (error) {

    });
});

// ===============  Get the all posts and load on admin dashboard  ============
db.collection("posts").get().then(function (querySnapshot) {
    var data = querySnapshot.docs;
    data.forEach(function (item, i) {
        console.log(i)
        var navBar = document.getElementById('myTab');
        navBar.innerHTML += (`
                 <a class="nav-link ${i == 0 ? 'active' : null}" id=${item.id + '-tab'} data-toggle="tab" href="#${item.id + '-tab-content'}" role="tab" aria-controls="home" aria-selected="true">${item.id}</a>
            `)
        document.getElementById('myTabContent').innerHTML +=
            `<div class="tab-pane fade ${i == 0 ? 'show active' : null}" id=${item.id + '-tab-content'} role="tabpanel" aria-labelledby=${item.id + "-tab"}>
                <h3 style="text-transform: capitalize">Edit "${item.id.replace(/-/gi, ' ')}"</h3>
                <form id=${item.id}>
                    <textarea id=${item.id + '-value'}>${item.data().content}</textarea>
                    <button class="btn btn-primary mt-3" data-parent=${item.id} data-value=${item.id + '-value'} onclick="saveContent(this)">Save</button>
                </form>
            </div>`
    });
    // Start TinyMCE onec all data are added to the DOM 
    tinymce.init({
        selector: 'textarea',
        height: 400,
        pagebreak_split_block: true,
        toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | fontsizeselect",
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "save table contextmenu directionality emoticons template paste textcolor"],
        // content_css : "/css/style.css", 
    });
    document.getElementById('spinner').style.display = 'none';
    console.log('finished')
});


// ===============  Update the post =====================
function saveContent(element) {
    document.getElementById(element.dataset.parent).addEventListener('submit', function (event) {
        event.preventDefault();
        var data = tinymce.get(element.dataset.value).getContent();
        db.collection("posts").doc(element.dataset.parent).set({
            content: data,
            updatedAt: Date.now()
        })
            .then(function () {
                messages.className += ' alert-success d-block';
                document.getElementById('msg-content').innerHTML = '<strong>Changes have been saved successfully</strong>';
            })
            .catch(function (error) {
                messages.className += ' alert-danger d-block'
                document.getElementById('msg-content').innerHTML = '<strong>Changes Failed!</strong> ' + error.message;
            });
    })
}


