let obj = [{    id: '1', nombre: 'Notebook Hp', modelo: '14-dq2029la plata natural 14', caracteristicas: 'Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1366x768px Windows 10 Home', precio: '152.999', imagen: 'miniatura-HP'},

{ id: '2', nombre: 'Notebook Lenovo', modelo: 'IdeaPad 15ITL6 arctic grey táctil 15.6', caracteristicas: 'Intel Core i5 1135G7 12GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px Windows 11 Home', precio: '179.999', imagen: '../../catalog/imagenes/miniatura-Lenovo.webp'},

{ id: '3', nombre: 'Notebook Asus', modelo: 'VivoBook X512JA slate gray 15.6', caracteristicas: 'Intel Core i7 1065G7 8GB de RAM 1TB HDD 256GB SSD, Intel Iris Plus Graphics G7 1920x1080px Windows 10 Home', precio: '199.999', imagen: 'miniatura-Asus VivoBook'},

{ id: '4', nombre: 'Notebook Dell', marca: 'Dell', modelo: 'Inspiron 5510 blue 15.6', caracteristicas: 'Intel Core i5 11320H 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 96EUs 60 Hz 1920x1080px Windows 11 Home', precio: '283.999', imagen: 'miniatura-Dell'},

{ id: '5', nombre: 'Notebook Apple', modelo: 'Marcbook Air', caracteristicas: 'Macbook Air 13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM - Gris espacial', precio: '299.699', imagen: 'miniatura-Apple'},

{ id: '6', nombre: 'Notebook Bangho', modelo: 'Bangho Max L4', caracteristicas: 'Bang Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home', precio: '75.999',imagen: 'miniatura-Bangho'}]

export const gFetch = (nro) => {
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
