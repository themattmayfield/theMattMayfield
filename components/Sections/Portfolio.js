import SectionWrapper from '../Layouts/SectionWrapper'
import PortfolioItems from '../Utils/Portfolio/PortfolioItems'
import _ from 'lodash'
import { Items } from '../Utils/Portfolio/ItemObject'

export default function Portfolio() {

    return (
        <>
            <SectionWrapper id="portfolio" title="Check out what I've been up to!" >
                {Items.map((item, i) => (
                    <>
                        <PortfolioItems tech={item.tech} path={item.path} title={item.title} alt={item.alt} filler={item.filler} index={i} />
                    </>
                ))}
            </SectionWrapper>
        </>
    );
}