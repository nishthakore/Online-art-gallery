// // import { Link } from 'react-router-dom';
// import './CategoryCard.css'
// // import { Button } from '@mui/material';

// const CategoryCard = (props) => { 
//     return ( 
//         <div className="category__card__card">
//                 <div className="category__image"> 
//                    <img src= {props.data.image} alt="" className="product__img"/> 
//                 </div>
//                 <div className="category__card__detail">
//                     <div className="category__name">
//                         <span>{props.data.name}</span>
//                     </div>
//                     {/* <div className="category__card__action">
//                         <Link to={props.data.url}>
//                             <Button variant='outlined' sx={[{'&:hover': { backgroundColor: 'none', borderColor: '#FFE26E', color: '#FFE26E'}, borderRadius: '20px' , borderColor: '#FFE26E', backgroundColor: "#FFE26E" , color: "#000", fontWeight: '700'}]}>SHOP NOW</Button>
//                         </Link>
//                     </div> */}
//             </div>
//         </div>
//      );
// }
 
// export default CategoryCard;

import toast from "react-hot-toast";
import './CategoryCard.css';

const CategoryCard = ({ data, isSelected, onSelect }) => {
    const handleBuyNow = () => {
        const options = {
            key: "rzp_test_aVFsXiQpfzHd7p",
            amount: data.price * 10000, 
            currency: "INR",
            name: "e-Muse",
            description: "Purchase Artwork",
            image: "https://www.vecteezy.com/vector-art/12747244-nt-initial-letter-gold-calligraphic-feminine-floral-hand-drawn-heraldic-monogram-antique-vintage-style-luxury-logo-design-premium-vector",
            handler: function (response) {
                toast.success("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
            },
            prefill: {
                name: "User Name",
                email: "user@example.com",
                contact: "8780702581"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="category__card__card">
            <div className="category__image" onClick={onSelect}> 
                <img src={data.image} alt="" className="product__img" />
            </div>
            <div className="category__card__detail">
                <div className="category__name">
                    <span>{data.name}</span>
                </div>
                {isSelected && (
                    <div className="buy__now__container">
                        <button onClick={handleBuyNow} className="buy__now__button">
                            Buy Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryCard;