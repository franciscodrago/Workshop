
let carrito=[];

if(localStorage.getItem("carrito")){
  carrit0=JSON.parse(localStorage.getItem("carrito"))
}
let lista=document.getElementById("miLista");

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");



renderizarProductos();

function renderizarProductos() {
  for (const producto of productos) {
      lista.innerHTML+=`<div class="card" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5>${producto.nombre}</h5>
        <h5 class="card-title">ID ${producto.id}</h5>
        <p class="card-text">$ ${producto.precio}</p>
        <a href="#" class="btn btn-dark"id="btn${producto.id}">Comprar</a>
      </div>
    </div>
      
  `
  }



  productos.forEach(producto => {
    
    document.getElementById(`btn${producto.id}`).addEventListener("click",function() 
    {agregrarAlCarrito(producto)
    });
  });
}

function agregrarAlCarrito(producto) {
  carrito.push(producto);
  console.log(carrito);
  alert("Producto: "+producto.nombre+ " agregado al carro");
  document.getElementById("tabBody").innerHTML+=`
  <tr>
  <td>${producto.id}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  </tr>
  `;

  localStorage.setItem("carrito",JSON.stringify(carrito));
}


const objeto = {
  tipo: "Remera",
  color: "Blanca",
}

console.log(objeto);

const objeto2 = {
  ...objeto,
  talle: "XL",
  precio:4500,
}

console.log(objeto2)

const objeto3 = {
  ...objeto2,
  talle: "L",
  precio:5500,

}
console.log(objeto3)

const objeto4 = {
...objeto3,
color:"azul",
talle:"M",
}
console.log(objeto4)

const {tipo, color} = objeto4
console.log(tipo, color);
