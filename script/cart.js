const productCart = document.querySelector('.carList');
var userId = localStorage.getItem('userId');
const usersRef = db.collection("users");
const carRef = usersRef.doc(userId).collection('shoppingCar');
var elemPrice;
var total;
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

    elemPrice=parseInt(elem.price);
    total= total+ elemPrice;
    
      productCart.appendChild(newProduct);



      const deleteCar = newProduct.querySelector('.carDelete');

      deleteCar.addEventListener('click', function(){
        carRef.doc(elem.id).delete().then(function(){
           
           
          }).catch(function(error){
           
            
          });
      });


    });
  }
  const totalPrice =  document.querySelector('.total');
  totalPrice.innerHTML = `
  
      <p class="productCar__title">${total}</p>
      
  
 

  `;



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