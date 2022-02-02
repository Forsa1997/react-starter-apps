import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Picture from './Picture.js';

/* Use this data to create an array of objects that you loop through
to create the carousel. 

Hong Kong: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg
Singapore: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp
Japan: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp
Las Vegas: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp

Use the react-responsive-carousel package to create the Carousel: 
https://www.npmjs.com/package/react-responsive-carousel


*/


const Carsl = () => {

  const pictures = [
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
      name: "Hong Kong"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
      name: "Singapore"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
      name: "Japan"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
      name: "Las Vegas"
    }
  ]
  return (
    <Carousel emulateTouch="true" autoPlay="1" useKeyboardArrows="true" infiniteLoop="true">
      {/* {pictures.map((picture) => (<Picture name={picture.name} src={picture.src} />))} */}
      {pictures.map((picture) => (<div>
        <img src={picture.src} alt="test" />
        <p className="legend">{picture.name}</p>
      </div>))}
    </Carousel>
  )
}
export default Carsl;