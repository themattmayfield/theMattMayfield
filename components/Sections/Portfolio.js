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
                        <div className="lg:hidden pt-20">
                        <PortfolioItems mobile={true} tech={item.tech} ImagePath={item.ImagePath} title={item.title} alt={item.alt} filler={item.filler} index={i} />
                        </div>

                        <div className="hidden lg:block">
                        <PortfolioItems tech={item.tech} ImagePath={item.ImagePath} title={item.title} alt={item.alt} filler={item.filler} index={i} />
                        </div>
                    </>
                ))}
            </SectionWrapper>
        </>
    );
}