var userId = localStorage.getItem('userId');
const usersRef = db.collection("users");
const carRef = usersRef.doc(userId).collection('shoppingCar');
const form = document.querySelector('.form');
const orderRef=db.collection("orders");
const totalP =localStorage.getItem("total");
const productId =localStorage.getItem("productId");
var productInfo;
var products =[];
carRef.onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(elem){
        productInfo = elem.data();
        productInfo.id = elem.id;
        products.push(productInfo.name);
    });
    
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newOrder = {
      name: form.name.value,
      adress: form.adress.value,
     products:products,
     total:totalP,
    };

    console.log(newOrder);

   orderRef.add(newOrder)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        window.location.href = 'index.html';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });