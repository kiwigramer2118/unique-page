



const productList = document.querySelector('.productList');
const productsRef = db.collection("elementos");
   //creacion de los productos a nivel visual
  function renderProducts (list) {
    productList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('product');
       
      newProduct.innerHTML = `
      <a href="./producto.html?${elem.id}"><img class="product__img" src="${elem.img}" alt=""></a> 
      <div class="product__info">
          <p class="title">${elem.name}</p>
          <p class="product__price">$ ${elem.price}</p>
      </div>
      `;
      
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


