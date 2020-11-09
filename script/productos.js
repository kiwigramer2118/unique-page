const productList = document.querySelector('.productList');

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

//productos ford
const productListFord = document.querySelector('.productListFord');

   //creacion de los productos a nivel visual
  
  function renderProductsFord (listFord) {
    productListFord.innerHTML = '';
    listFord.forEach(function (elemF) {
      if(elemF.brand =="ford"){
      const newProductFord =  document.createElement('article');
      newProductFord.classList.add('product');
       
      newProductFord.innerHTML = `
      <a href="./producto.html?${elemF.id}"><img class="product__img" src="${elemF.img}" alt=""></a> 
      <div class="product__info">
          <p class="title">${elemF.name}</p>
          <p class="product__price">$ ${elemF.price}</p>
      </div>
      `;
      
      productListFord.appendChild(newProductFord);
     } });
  }
 

  
var products = [];

//aqui llamo los productos de la base de datos

function getProducts() {
  db.collection("elementos").get().then((querySnapshot) => {
    products.splice(0, products.length);
    querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        products.push(obj);
        console.log(`${doc.id} => ${doc.data()}`);
    });

    renderProducts(products);
    renderProductsFord(products);
});
}
  
getProducts();


