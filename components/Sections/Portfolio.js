import Wrapper from '../Layouts/SectionWrapper'
import PortfolioItems from '../Utils/PortfolioItems'

export default function Portfolio() {

    return (
        <>
        <Wrapper id="portfolio">
            <h2 className="w-full text-center">Portfolio</h2>

            <PortfolioItems />


            </Wrapper>
        </>
    );
}