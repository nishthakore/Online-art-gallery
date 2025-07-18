import '../styles/Landing.css'
//import land from '../assets/images/men2.png'
//import { Link } from "react-router-dom"
// import { Button } from "@mui/material";

const Landing = () => {
    return ( 
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__discount"> ONLINE ART GALLERY</h3>
                    <h1 className="landing__header__main">Explore the boundaries of creativity</h1>
                    {/* <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link> */}
                </div>
            </div>
            {/* <div className="landing__image__container">
                <img className="landing__image" src={land} alt=""/>
            </div> */}
        </div>
     );
}
 
export default Landing;