const parts  =location.search.split('-');
const productsRef = db.collection("elementos");
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

const deleteBtn = document.querySelector('.Delete');

        deleteBtn.addEventListener('click', function(){
            productsRef.doc(uid).delete().then(function(){
              getProducts();
              alert("Producto eliminado correctamente");
            }).catch(function(error){
             
              window.location.href = 'index.html';
            });
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
      
   alert("added to")   });

   const editBtn = document.querySelector('.Edit');

        editBtn.addEventListener('click', function(){

          const urlEdit = `edit.html?${uid}`;
          window.location.href = urlEdit;
            
        });
