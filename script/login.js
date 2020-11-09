const login = document.querySelector('.form');

    login.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const email = login.emaill.value;
        const passWord = login.passWordl.value;
      
    
        firebase.auth().signInWithEmailAndPassword(email, passWord)
        .then(function () {
    
            window.location.href = 'productos.html';
        })
        
        .catch(function(error) {
            // Handle Errors here.
            console.log(error)
    
            login.querySelector('.form__error').classList.remove('hidden');
            // ...
          });
    
    });