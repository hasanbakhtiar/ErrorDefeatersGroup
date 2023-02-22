import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { ProductContext } from '../context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const notify = () => toast.success('🦄 Has been added!', {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });;
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const [products, setProduct] = useContext(ProductContext);
  const { url } = useParams();
  const productdetails = products.find(p => p.id == url);
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{productdetails.title}</h1>
          <p>Price:${productdetails.price}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to="/shop" className="btn btn-primary btn-lg px-4 me-md-2">Back</Link>
            <Button onClick={() => { notify(addItem(productdetails)) }}>Add to cart</Button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Button onClick={() => { addWishlistItem(productdetails) }}>Add to wishlist</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductDetails