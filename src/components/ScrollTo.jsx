import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ScrollTo = () => {

    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    return(
        <div>
            {showScrollTopButton && <Link onClick={scrollTop}><img className="mx-4 position-fixed bottom-0 end-0 translate-middle-y" src={"/images/scroll.svg"} alt={"Boton Scroll"} /></Link>}
        </div>
        
    )
}

export default ScrollTo;