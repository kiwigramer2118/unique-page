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


});
