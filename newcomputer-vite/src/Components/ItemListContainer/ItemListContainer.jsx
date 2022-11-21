import './ItemListContainer.css'
export const saludar = () => console.log('saludo')

const ItemListContainer = ( { greeting } ) => {
  return (
    <section className='section'>ItemListContainer
        
        <p> { greeting }</p>
    </section>
  )
}

export default ItemListContainer