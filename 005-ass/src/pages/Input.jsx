import axios from "axios";
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa";


const Input = () => {

    // * Input kısmını gizlemek için
    const [hideShow, setHideShow] = useState(false);
    const handleHideShow = () => {
        setHideShow(!hideShow)
    }
const [getProducts, setGetProducts] = useState({
    name:"",
    price:0,
    amount:0,
    image:"",
    id:""
})
const mockapiProduct = async () => {     //** mockApi de hazırladığım Api yi localime çektim */
    const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData"
    const res = await axios(URL)
    console.log(res.data)
    setGetProducts(res.data)
} 
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState(0)
    const [image, setImage] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newProduct = { name, image, price, amount }

        try{
            const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData";
            const res = await axios.post(URL, newProduct)
        }catch (error){
            console.log(error)
        }
        mockapiProduct()
    }


  return (
    <div>
           <>
        <div className="d-flex justify-content-center mt-3"><button className={hideShow ? "btn btn-primary" : "btn btn-danger"} onClick={handleHideShow}>{!hideShow ? "Hide Input Area" : "Show Input Area"}</button></div>
        <div className="container">
        <div className={hideShow ? "d-none" : "container d-block"}>
      <div className="row">
      <form className="formContainer" onSubmit={handleSubmit}>
      <label for="basic-name">Product Name</label>
      <div className="mb-3 shadow-lg">
        <span id="basic-addon1">@</span>
        <input
          placeholder="Product Name"
          aria-label="Product Name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="basic-name"
        />
      </div>

      <label for="product-price">Product Price</label>
      <div className="mb-3 shadow-lg">
        <span>$</span>
        <input
        min={0}
          type="number"
          aria-label="Amount (to the nearest dollar)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="product-price"
        />
        <span>.00</span>
      </div>

      <label for="product-qantity">Product Qantity</label>
      <div className="mb-3 shadow-lg">
        <input min={0} type="number" value={amount}   onChange={(e) => setAmount(e.target.value)} aria-label="Amount" id="product-qantity" />
      </div>

      <label for="basic-url">Product Image</label>
      <div className="mb-3 shadow-lg">
        <span id="basic-addon3">https://</span>
        <input id="basic-url" aria-describedby="basic-addon3" value={image} onChange={(e) => setImage(e.target.value)}/>
      </div>
      <div className="btnAdd d-flex justify-content-center">
        <button type="submit" className="d-flex align-items-center gap-3 shadow-lg">
          <FaShoppingCart /> Add The Product
        </button>
      </div>
    </form>
      </div>
    </div>
        </div>
        </>
    </div>
  )
}

export default Input
