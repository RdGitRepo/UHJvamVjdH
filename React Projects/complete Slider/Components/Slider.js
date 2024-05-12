import { useEffect, useRef, useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react';

import image1 from '../slide-image/1.jpg';
import image2 from '../slide-image/2.jpg';
import image3 from '../slide-image/3.jpg';
import image4 from '../slide-image/4.jpg';
import image5 from '../slide-image/5.jpg';
import image6 from '../slide-image/6.jpg';

const imageArray = [image6, image1, image2, image3, image4, image5, image6, image1];

export default function Slider(){
    const [imageIndex, setImageIndex] = useState(1);
    const ref = useRef(null);


    useEffect(() => {
        const out = setTimeout(() => {
            if(imageIndex === 0) {
                ref.current.classList.add("transition");
                return setImageIndex(imageArray.length - 2);
            }
            if(imageIndex === imageArray.length - 1){
                ref.current.classList.add("transition");
                return setImageIndex(1);
            }
        }, 950)
        return () => clearTimeout(out);
    }, [imageIndex])

    function handlePrev(){
        ref.current.classList.remove("transition");
        if(imageIndex === 0) return;
        return setImageIndex(imageIndex - 1);
    }
    
    function handleNext(){
        ref.current.classList.remove("transition");
        if(imageIndex === imageArray.length - 1) return;
        return setImageIndex(imageIndex + 1)
    }

    return (
        <section>
            <div className="slider" ref={ref}>
                {imageArray.map((imageUrl, index) => (
                    <div key={index} className="slide" style={{translate: `-${100 * imageIndex}%`}}> <img src={imageUrl} alt={`product ${index + 1}`} /> </div>
                ))}
            </div>
            <button className="nav-prev" onClick={() => handlePrev()}><ArrowBigLeft/></button>
            <button className="nav-next" onClick={() => handleNext()}><ArrowBigRight/></button>
            <div className="pagination">
                {imageArray.map((imageUrl, index) => {
                    if(index === 0 || index === imageArray.length - 1) return null; 
                    return <button key={index} onClick={() => setImageIndex(index)} style={{background: imageIndex === index ? "blue" : "#7e7e7e"}}><div class='icon'></div></button>
                })}
            </div>

        </section>
    )
}