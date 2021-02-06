import SectionWrapper from '../Layouts/SectionWrapper'
import PortfolioItems from '../Utils/PortfolioItems'
import _ from 'lodash'
import { useState } from 'react'

export default function Portfolio() {



    return (
        <>
        <SectionWrapper id="portfolio" title="Portfolio" sub="Check out what I've been up to!">

            
           

            <PortfolioItems />


            </SectionWrapper>
        </>
    );
}