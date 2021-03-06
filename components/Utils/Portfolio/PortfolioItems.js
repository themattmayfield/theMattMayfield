import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PortfolioInfo from './portfolioInfo'
import Image from "next/image"
import useDarkMode from 'use-dark-mode';


export default function PortfolioItems(props) {

  const darkMode = useDarkMode();

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  const PortfolioItemVariation = {
    visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
  }

  return (    
   <>
   
<motion.div       
className={"lg:flex mx-auto items-center w-full justify-around text-center " + (props.index % 2 != 0 ? 'flex-row-reverse' : '')}   
ref={ref}
animate={controls}
initial="hidden"
transition={{ duration: 0.8 }}
variants={PortfolioItemVariation}>          
    
    <div className="lg:w-6/12 mx-auto">
    <h3 className="lg:hidden text-2xl mb-4 font-medium">{props.title}</h3>
    <img className="cursor-pointer" src={darkMode.value && props.index == 0 ? '/heroLight.png': props.ImagePath} alt={props.alt} /> 
    </div>        
    
    
    <div
    className={"mx-auto flex flex-col my-auto space-y-6 lg:w-6/12 "}>
    <PortfolioInfo index={props.index} title={props.title} tech={props.tech} filler={props.filler}/>
    </div>
  
</motion.div>
      
</>
  );
}