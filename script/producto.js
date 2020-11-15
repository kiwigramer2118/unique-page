const parts  =location.search.split('-');
const uid= parts[0].replace('?',"");

console.log(uid);

var db = firebase.firestore();
const productref= db.collection("elementos");

productref.doc(uid).get().then(function(snapshot){
const product = snapshot.data();
const title = document.querySelector('h4')
title.innerText=product.name;

document.querySelector('article img').setAttribute('src',product.img);
document.querySelector('h5').innerText= "$"+product.price;
document.querySelector('h6').innerText= product.descrip;

const addCart = document.querySelector('.addCart');
addCart.addEventListener('click', function(event){
        event.preventDefault();
        
        if(userInfo){
          usersRef.doc(userInfo.uid).collection('shoppingCar').doc(elem.id).set(
            {
              name: product.name,
              price: product.price,
              img: product.img,
            }

          ).then(function(){
            alert('agregado');
          }).catch(function(error){
            console.log(error.message);
          })

        } else {
          alert('No has iniciado sesión')
        }
      });



});
