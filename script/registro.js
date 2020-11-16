var db = firebase.firestore();
const usersRef = db.collection("users");

const registro = document.querySelector('.form')

registro.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = registro.nameU.value;
    const email = registro.email.value;
    const passWord = registro.passWord.value;

    firebase.auth().createUserWithEmailAndPassword(email, passWord)
    .then(function (credentials) {

        const uid = credentials.user.uid;
        usersRef.doc(uid).set({
            name: name,
            email: email,
        })

        .then(function () {
            window.location.href = 'productos.html';
        })
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        document.querySelector('.form__error').classList.remove('hidden');
        // ...
      });

});