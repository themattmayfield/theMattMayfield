import Image from 'next/image'
import PortfolioItem from './PortfolioItem'



const Items = [
  {
    id: 0,
    title: 'Work',
    path: '/test.png',
    alt: 'Picture of the author'
  },
  {
    id: 1,
    title: 'Work',
    path: '/test.png',
    alt: 'Picture of the author'
  },
  {
    id: 2,
    title: 'Work',
    path: '/test.png',
    alt: 'Picture of the author'
  },
  {
    id: 3,
    title: 'Work',
    path: '/test.png',
    alt: 'Picture of the author'
  }
]

export default function PortfolioItems(props) {

  return (
    <>
      <div className="flex flex-col space-y-12">

        {Items.map((item, i) => (
          
            <div className="">
            <p className="text-center">Title of project</p>
            <div className="flex items-center w-full justify-around">
              <PortfolioItem path={Items[0].path} alt={Items[0].alt} />
              <p>sometihng</p>
            </div>
            </div>
          
        ))}



      </div>
    </>
  );
}