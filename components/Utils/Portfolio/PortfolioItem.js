import { motion, useMotionValue, useTransform } from "framer-motion"
import React, { useRef } from 'react'
export default function PortfolioItem(props) {
    
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    const areaRef = useRef(null);

    function handleMouse(event) {
        // using a ref because event.target will switch to the values of the child div when you hover over it
        var rect = areaRef.current.getBoundingClientRect();
        // calculating the x and y position within the element
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    function handleMouseLeave(event) {
x.set(220),
y.set(220)
    }


    return (
        <>
        <motion.div
                style={{
                    // width: 500,
                    height: 300,
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    borderRadius: 30,
                    // backgroundColor: "rgba(255, 255, 255, 0.05)",
                    perspective: 1000
                }}
                ref={areaRef}
                onMouseMove={handleMouse}
                // onTap={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
                <motion.img
                src={props.path}
                alt={props.alt}
                    style={{
                        width: 500,
                        rotateX: rotateX,
                        rotateY: rotateY
                    }}
                />
            </motion.div>

        </>
    );
}