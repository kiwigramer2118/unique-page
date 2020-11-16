const productCart = document.querySelector('.carList');
var userId = localStorage.getItem('userId');
const usersRef = db.collection("users");
const carRef = usersRef.doc(userId).collection('shoppingCar');
   //creacion de los productos a nivel visual
  function renderProductsCar (list) {
    productCart.innerHTML = '';

    
    list.forEach(function (elem) {
     


      const newProduct =  document.createElement('article');
      newProduct.classList.add('productCar');
       
      newProduct.innerHTML = `
      <a href="./producto.html?${elem.id}"><img class="productCar__img" src="${elem.img}" alt=""></a> 
      <div class="productCar__info">
          <p class="productCar__title">${elem.name}</p>
          <p class="productCar__price">$ ${elem.price}</p>
      </div>
      <button class="carDelete">X</button>
      `;
      const deleteCar = newProduct.querySelector('.carDelete');

      deleteCar.addEventListener('click', function(){
        carRef.doc(elem.id).delete().then(function(){
            getProducts();
            alert("Producto eliminado correctamente");
          }).catch(function(error){
           
            
          });
      });
     
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