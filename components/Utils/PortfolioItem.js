import Image from 'next/image'


export default function PortfolioItem(props) {

    return (
        <>
          <img
          className="rounded"
      src={props.path}
      alt={props.alt}
      width={500}
      height={293.44}
    />
        </>
    );
}