// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { useAuth } from "../context/auth";

// const HomePage = () => {
//   const [auth, setAuth] = useAuth();
//   return (
//     <Layout>
//       <h1>HomePage</h1>
//       {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
//     </Layout>
//   );
// };

// export default HomePage;
import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/HomePage.css"; // Assuming you have a CSS file for styling
import Landing from "../pages/Landing";
import NewsLetter from '../pages/Newsletter';
import starryNight from '../assets/images/starry-sky-1948523_1280.jpg';
import monaLisa from '../assets/images/art-74050_1280.jpg';
import persistenceOfMemory from '../assets/images/mother-of-perpetual-help-1060612_1280.jpg';
import starryNight1 from '../assets/images/mandala art/mandala-5945231_1280.jpg';
import monaLisa1 from '../assets/images/sketches/owl-701522_1280.jpg';
import persistenceOfMemory1 from '../assets/images/oil painting/oil-painting-5261775_1280.jpg';


const artworks = [
  {
    id: 1,
    image:starryNight, // Assuming this is the path to your local image
    title: "Starry Night",
    artist: "Vincent van Gogh",
    description: "A famous painting by Vincent van Gogh, depicting a night sky filled with swirling clouds and stars."
  },
  {
    id: 2,
    image: monaLisa, // Assuming this is the path to your local image
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    description: "A portrait of a woman by Leonardo da Vinci, known for her enigmatic expression."
  },
  {
    id: 3,
    image :persistenceOfMemory, // Assuming this is the path to your local image
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    description: "A surreal painting by Salvador Dalí, featuring melting clocks in a desert landscape."
  },
  {
    id: 1,
    image:starryNight1, // Assuming this is the path to your local image
    title: "Mandala art",
    artist: "Robin Sharma",
    description: "Mandala art is a spiritual and symbolic art style that evolved in various cultures worldwide, including Hinduism, Buddhism, and Native American traditions."
  },
  {
    id: 2,
    image: monaLisa1, // Assuming this is the path to your local image
    title: " Pencil Sketch",
    artist: "Ted Mosby",
    description: "composed of graphite enclosed in a wood casing and intended either as a sketch "
  },
  {
    id: 3,
    image :persistenceOfMemory1, // Assuming this is the path to your local image
    title: "Oil Painting",
    artist: "John Doe",
    description: "The outstanding facility with which fusion of tones or colour is achieved makes it unique among fluid painting mediums"
  },
  
  // Add more artworks as needed
];

const HomePage = () => {
  return (
    <Layout>
      <div className="homepage">
        <Landing />
        <h1 className="homepage-title">Welcome to Our Art Gallery</h1>
        
        {/* Featured Artworks Section */}
        <section className="featured-artworks">
          <h2>Featured Artworks</h2>
          <div className="art-gallery">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="artwork">
                <img src={artwork.image} alt={artwork.title} />
                <h3>{artwork.title}</h3>
                <p>by {artwork.artist}</p>
                <p>{artwork.description}</p>
                <button className="view-more" onClick={() => window.location.href = '/category'}>View More</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <NewsLetter/>
    </Layout>
  );
};

export default HomePage;
