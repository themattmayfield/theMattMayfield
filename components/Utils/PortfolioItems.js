import Image from 'next/image'
import PortfolioItem from './PortfolioItem'
import Button from '../UI/Button'

const Items = [
  {
    id: 0,
    title: 'Work',
    path: '/heroLight.png',
    alt: 'Picture of the author'
  },
  {
    id: 1,
    title: 'Work',
    path: '/heroDark.png',
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
    path: '/heroLight.png',
    alt: 'Picture of the author'
  }
]

const filler = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
 make a type specimen book. When an unknown printer took a galley of type and scrambled it to
 make a type specimen book. When an unknown printer took a galley of type and scrambled it to
 make a type specimen book.`

export default function PortfolioItems(props) {

  return (
    <>
      <div className="flex flex-col space-y-32 max-w-6xl mx-auto">

        {Items.map((item, i) => (

          <div className="space-y-12">
            <p className="text-center">Title of project</p>
            <div className={"lg:flex w-full justify-around text-center " + (i % 2 != 0 ? 'flex-row-reverse' : '')}>
              <PortfolioItem path={item.path} alt={item.alt} />
              <div className="flex flex-col my-auto space-y-6 lg:w-1/2">
                <p className={"text-left"}>{filler}</p>
                <div className="flex  space-x-4">
                  <Button>View</Button>
                  <Button>github</Button>
                </div>
              </div>
            </div>
          </div>

        ))}



      </div>
    </>
  );
}