const authWithout = document.querySelector('.auth__without');
const authWith = document.querySelector('.auth__with');
var userInfo;


firebase.auth().onAuthStateChanged(function(user) {
    //usuario ya inicio sesion o ya se registro
    if(user) {
        authWith.classList.remove('hidden');
        authWithout.classList.add('hidden');

        var db = firebase.firestore();
        const usersRef = db.collection("users");

        usersRef.doc(user.uid).get().then(function (doc){
            if(doc.exists) {
                userInfo = data;
                userInfo.uid = user.uid;
                const data = doc.data();
                authWith.innerHTML = `
                <h1>${data.name}</h1>
                `;
            }
        });

    }else {
    //el usuario no ha iniciado sesion o cerro la sesion

        authWith.classList.add('hidden');
        authWithout.classList.remove('hidden');

    }
  });
