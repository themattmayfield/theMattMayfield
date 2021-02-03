import Image from 'next/image'

export default function PortfolioItem(props) {

    return (
        <>
          <Image
          className="rounded cursor-pointer"
      src={props.path}
      alt={props.alt}
      width={500}
      height={300}
    />
        </>
    );
}