
var productInfo;

var db = firebase.firestore();
const usersRef = db.collection("users");
const productsRef = db.collection("elementos");


const form = document.querySelector('.form');

const productId = location.search.replace('?', '');

productsRef.doc(productId).get().then(function (snapshot) {
 
    productInfo = snapshot.data();
    form.name.value = productInfo.name;
    form.price.value = productInfo.price;
    form.descrip.value = productInfo.descrip;
    form.brand.value = productInfo.brand;
    form.img.value = productInfo.img;

   
      
});


 

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newProduct = {
      name: form.name.value,
      price: form.price.value,
      brand:form.brand.value,
      descrip: form.descrip.value,
      img: form.img.value, 
    };

    console.log(newProduct);

    productsRef.doc(productId).set(newProduct)
    .then(function(docRef) {
        alert("Se editó correctamente");
        //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });

form.addEventListener('reset', function (event){
  event.preventDefault();
  location.href = 'index.html';
});