import _ from 'lodash'
import { useState } from 'react'
export default function Wrapper({ children, ...props }) {


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
      <div id={props.id} className="text-matt-textdark dark:text-matt-textlight bg-transparent my-view pt-24 px-8 lg:px-24 container mx-auto">
        <h2 className=" w-full text-center text-base lg:text-xl font-medium">{props.title}</h2>

        <div className="flex items-center justify-center space-x-4">
          {newType.map((type, i) => (

            <span onClick={() => setPosition(i)} className="cursor-pointer">{type.name}</span>
          ))}
        </div>


        <div className="pt-12">
          {children}
        </div>
      </div>
    </>
  );
}