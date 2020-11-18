const productList = document.querySelector('.carList');
const productsRef = db.collection("orders");
   //creacion de los productos a nivel visual
  function renderProducts (list) {
    productList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('product');
       
      newProduct.innerHTML = `
     
      <div class="product__info">
          <p class="title">${elem.name}</p>
          <p class="product__price"> ${elem.adress}</p>
          <p class="product__price"> ${elem.products}</p>
          <p class="product__price">$ ${elem.total}</p>
          <button class="carDelete">X</button>

      </div>
      `;
      const deleteCar = newProduct.querySelector('.carDelete');

      deleteCar.addEventListener('click', function(){
        productsRef.doc(elem.id).delete().then(function(){
           
           
          }).catch(function(error){
           
            
          });
      });
      productList.appendChild(newProduct);
    });
  }



var products = [];

//aqui llamo los productos de la base de datos

function getProducts() {
  productsRef.onSnapshot(function (querySnapshot) {
    var products = [];
    querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        products.push(obj);
        console.log(`${doc.id} => ${doc.data()}`);
    });

    renderProducts(products);
    
});
}
  
getProducts();


