const productCart = document.querySelector('.productCart');
var userId = localStorage.getItem('userId');
const usersRef = db.collection("users");
const carRef = usersRef.doc(userId).collection('shoppingCar');
   //creacion de los productos a nivel visual
  function renderProductsCar (list) {
    productCart.innerHTML = '';
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
      
      productCart.appendChild(newProduct);
    });
  }



function getProductsCar() {
   
    carRef.onSnapshot(function (querySnapshot) {
        var carProducts = [];
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id;
            carProducts.push(obj);
            console.log(`${doc.id} => ${doc.data()}`);
        });
  
      renderProductsCar(carProducts);
      
  });
  }
    
  getProductsCar();