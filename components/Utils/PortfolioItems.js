import Image from 'next/image'


export default function PortfolioItems(props) {

    return (
        <>
          <Image
        src="/test.png"
        alt="Picture of the author"
        width={300}
        height={300}
      />
        </>
    );
}