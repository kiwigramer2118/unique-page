



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
     products = [];
    querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        products.push(obj);
        console.log(`${doc.id} => ${doc.data()}`);


        let copy = products.slice();
        const filterForm= document.querySelector('.filterForm');
        filterForm.addEventListener('change', function(){
          const order = filterForm.order.value;
          

          switch(order){
            case "":
              copy = products.slice();
              break;
            case "price_asc":
              copy.sort(function(a, b){
                return a.price - b.price;
              });
            break;
            case "price_desc":
              copy.sort(function(a, b){
                return b.price - a.price;
              });
            break;
          }



          
          
          const nameFilter= filterForm.name.value;
          copy =copy.filter(function(elem){

            if(nameFilter===''){
    
              return true;
              
                      }

            if(nameFilter==='FORD'&& elem.name.includes('FORD')){
    
    return true;
    
            }
            if(nameFilter==='BMW'&& elem.name.includes('BMW')){
    
              return true;
              
                      }
                      
          
              return false;
          
    
          });
          console.log(order);
          renderProducts(copy);
          
        });

       
    });


    
    renderProducts(products);
});

}



    
getProducts();



