const parts  =location.search.split('-');
const uid= parts[0].replace('?',"");
var product;
var userId = localStorage.getItem('userId');
console.log(uid);

var db = firebase.firestore();
const productref= db.collection("elementos");
const usersRef = db.collection("users");
productref.doc(uid).get().then(function(snapshot){
 product = snapshot.data();
const title = document.querySelector('h4')
title.innerText=product.name;

document.querySelector('article img').setAttribute('src',product.img);
document.querySelector('h5').innerText= "$"+product.price;
document.querySelector('h6').innerText= product.descrip;


});

const addCart = document.querySelector('.addCart');

addCart.addEventListener('click', function(event){
        event.preventDefault();
        usersRef.doc(userId).collection('shoppingCar').doc(uid).set(
          {
            name: product.name,
            price: product.price,
            img: product.img,
          }

        );
      
      });
