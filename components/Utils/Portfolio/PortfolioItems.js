import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PortfolioInfo from './portfolioInfo'
import Image from "next/image"

export default function PortfolioItems(props) {
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
   {props.mobile ?       
      <motion.div       
      className={"flex relative text-center mx-auto mb-48 xs:mb-20  w-full justify-around " + (props.index % 2 != 0 ? 'flex-row-reverse' : '')}   
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={PortfolioItemVariation}>          
          
          <img className="w-full h-full transition duration-500 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"  src={props.ImagePath} alt={props.alt} />         
          
          

          <div
          className={"absolute pt-40 xs:pt-0 sm top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 flex flex-col my-auto space-y-6 w-full"}>
          <PortfolioInfo index={props.index} title={props.title} tech={props.tech} filler={props.filler}/>
          </div>
        
      </motion.div>
:
<motion.div       
className={"flex mx-auto mb-20 items-center w-full justify-around text-center " + (props.index % 2 != 0 ? 'flex-row-reverse' : '')}   
ref={ref}
animate={controls}
initial="hidden"
transition={{ duration: 0.8 }}
variants={PortfolioItemVariation}>          
    
    <div className="w-6/12">
    <img className="transition duration-500 ease-in-out opacity-50 hover:opacity-100 cursor-pointer" src={props.ImagePath} alt={props.alt} /> 
    </div>        
    
    
    <div
    className={"flex flex-col my-auto space-y-6 w-6/12 "}>
    <PortfolioInfo index={props.index} title={props.title} tech={props.tech} filler={props.filler}/>
    </div>
  
</motion.div>
      }
</>
  );
}