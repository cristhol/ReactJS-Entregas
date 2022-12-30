const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { cartList, cartTotalPrice } = useContext(CartContext);
    
    
    const createOrder = (e) => {
        e.preventDefault()

        const order = {};
        order.buyer = { name, email, phone };
        order.total = cartTotalPrice();
        order.items = cartList.map(CartItem => {
            const id = CartItem.id;
            const nombre = CartItem.nombre;
            const precio = CartItem.precio;
            const cantidad = CartItem.quantity;
            return { id, nombre, precio, cantidad };
        })
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)     
            .then((docRef) => {
                setOrderId(docRef.id);
                setShowModal(true)
            })
            .catch(err => console.log('ERROR AL GENERAL LA ORDEN', err))
            .finally()
    }


    const notValid = !(name.length && email.length && phone.length > 0);


    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Completá tus datos</h2>
            <p className="checkout-p">Esto nos permitirá confirmar la compra</p>
            
            <OrderForm 
            createOrder={createOrder}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            notValid={notValid}
            phone={phone}
            setPhone={setPhone}
            setShowModal={setShowModal} />

            {showModal &&<Modal
            showModal={showModal}
            setShowModal={setShowModal}
            orderId={orderId} />}
        </div>
    )

}

export default Checkout;