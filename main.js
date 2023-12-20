
let ListaProductos = []

let respuesta = document.getElementById("ValorProductos")

let boton = document.getElementById("agregarProducto")

let resultado = document.getElementById("resultado")


window.onload = function(){
    let valorGuardado = localStorage.getItem("productoGuardado")

    if (valorGuardado){
        ListaProductos =JSON.parse(valorGuardado)
        mostrarProductos()
    
    }
    
}


boton.addEventListener("click",function(){

    let valorinput = respuesta.value;

    let ProductoObjeto = {
        producto:valorinput,
        fecha:new Date().toLocaleString()
    }

    ListaProductos.push(ProductoObjeto)
    

    

    localStorage.setItem("productoGuardado",JSON.stringify(ListaProductos))
    
    respuesta.value = ""
    
    mostrarProductos()
})

let mostrarProductos = () => {
    resultado.innerHTML = ""
    ListaProductos.forEach(function(Producto) {

    resultado.innerHTML += `Producto: ${Producto.producto}, Fecha: ${Producto.fecha}<br/>`
})

}