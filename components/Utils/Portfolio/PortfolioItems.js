import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import PortfolioItem from './PortfolioItem'
import Button from '../../UI/Button'

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
    
      <div className="flex flex-col space-y-32 max-w-6xl mx-auto">        
      <motion.div        
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={PortfolioItemVariation}>
        <p className="text-center">{props.title}</p>
        <div className={"lg:flex w-full justify-around text-center " + (props.index % 2 != 0 ? 'flex-row-reverse' : '')}>
          <PortfolioItem path={props.path} alt={props.alt} />
          <div className="flex flex-col my-auto space-y-6 lg:w-1/2">
            <p className={"text-left"}>{props.filler}</p>
            <div className="flex  space-x-4">
              <Button>View</Button>
              <Button>github</Button>
            </div>
          </div>
        </div>
      </motion.div>
    
      </div>    
  );
}