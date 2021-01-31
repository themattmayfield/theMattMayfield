import Image from 'next/image'

export default function PortfolioItems(props) {

    return (
        <>
          <div className="grid md:grid-cols-3 gap-4">
          <Image
          className="rounded cursor-pointer"
      src="/test.png"
      alt="Picture of the author"
      width={500}
      height={300}
    />

<Image
          className="rounded cursor-pointer"
      src="/test.png"
      alt="Picture of the author"
      width={500}
      height={300}
    />

<Image
          className="rounded cursor-pointer"
      src="/test.png"
      alt="Picture of the author"
      width={500}
      height={300}
    />

<Image
          className="rounded cursor-pointer"
      src="/test.png"
      alt="Picture of the author"
      width={500}
      height={300}
    />
      
          </div>
        </>
    );
}