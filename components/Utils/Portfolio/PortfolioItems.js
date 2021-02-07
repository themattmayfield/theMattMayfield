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
   
      <motion.div       
      className={"mx-auto mb-20 lg:flex w-full justify-around text-center " + (props.index % 2 != 0 ? 'flex-row-reverse' : '')}   
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={PortfolioItemVariation}>          
          
          <Image className="transition duration-500 ease-in-out opacity-50 hover:opacity-100 cursor-pointer" width={579} height={360} src={props.path} alt={props.alt} />         
          

          <div className={"z-10 flex flex-col my-auto space-y-6 lg:w-1/2 "}>
          <PortfolioInfo index={props.index} title={props.title} tech={props.tech} filler={props.filler}/>
          </div>
        
      </motion.div>
      
  );
}