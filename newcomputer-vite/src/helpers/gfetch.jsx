let obj = [{    id: '1', nombre: 'Notebook Hp',categoria: 'notebook', modelo: '14-dq2029la plata natural 14', caracteristicas: 'Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1366x768px Windows 10 Home', stock: '20', precio: '152.999', foto: '/public/Imagenes/miniatura-HP.webp'},

{ id: '2', nombre: 'Notebook Lenovo',categoria: 'notebook', modelo: 'IdeaPad 15ITL6 arctic grey táctil 15.6', caracteristicas: 'Intel Core i5 1135G7 12GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px Windows 11 Home', stock: '20', precio: '179.999', foto: '/public/Imagenes/miniatura-Lenovo.webp'},

{ id: '3', nombre: 'Notebook Asus',categoria: 'notebook', modelo: 'VivoBook X512JA slate gray 15.6', caracteristicas: 'Intel Core i7 1065G7 8GB de RAM 1TB HDD 256GB SSD, Intel Iris Plus Graphics G7 1920x1080px Windows 10 Home', stock: '20', precio: '199.999', foto: '/public/Imagenes/miniatura-Asus VivoBook.webp'},

{ id: '4', nombre: 'Notebook Dell',categoria: 'notebook', modelo: 'Inspiron 5510 blue 15.6', caracteristicas: 'Intel Core i5 11320H 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 96EUs 60 Hz 1920x1080px Windows 11 Home', stock: '20', precio: '283.999', foto: '/public/Imagenes/miniatura-Dell.webp'},

{ id: '5', nombre: 'Notebook Apple',categoria: 'notebook', modelo: 'Marcbook Air', caracteristicas: 'Macbook Air 13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM - Gris espacial', stock: '20', precio: '299.699', foto: '/public/Imagenes/miniatura-Apple.webp'},

{ id: '6', nombre: 'Notebook Bangho',categoria: 'notebook', modelo: 'Bangho Max L4', caracteristicas: 'Bang Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home', stock: '20', precio: '75.999',foto: '/public/Imagenes/miniatura-Bangho.webp'},
{ id: '7', nombre: 'Auriculares',categoria: 'audio', modelo: 'xxxx', caracteristicas: 'xxxxx', stock: '20', precio: '19.999',foto: '/public/Imagenes/'}]

export const gFetch = (id) => {
    return new Promise( (resolve, reject)=>{
        //acciones 
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                resolve(obj )            
            }, 3000)
        } else {
            reject( 'olvidate de tu cash' )        
        }
    } )
}
