import Wrapper from '../Layouts/SectionWrapper'
import PortfolioItems from '../Utils/PortfolioItems'
import _ from 'lodash'
import { useState } from 'react'

export default function Portfolio() {

    const types = [
        {
          name: 'Personal',
          id: 1,
          position: 0
        },
        {
          name: 'Work',
          id: 2,
          position: 1
        },
        {
          name: 'Coming Soon',
          id: 3,
          position: 2
        }
      ]
    
      const [newType, setNew] = useState(types)
    
      const currentTypes = []
      const setPosition = (current) => {
    
        if (current == 0) {
          currentTypes[0] = newType[2]
          currentTypes[1] = newType[0]
          currentTypes[2] = newType[1]
          setNew(currentTypes)
    
        } else if (current == 2) {
          currentTypes[0] = newType[1]
          currentTypes[1] = newType[2]
          currentTypes[2] = newType[0]
          setNew(currentTypes)
        }
    
      }

    return (
        <>
        <Wrapper id="portfolio" title="Portfolio">
            <div className="flex items-center justify-center space-x-4">
          {newType.map((type, i) => (

            <span onClick={() => setPosition(i)} className="cursor-pointer">{type.name}</span>
          ))}
        </div>

            <PortfolioItems />


            </Wrapper>
        </>
    );
}