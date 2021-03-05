import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function PortfolioInfo(props) {

    return (
        <div className={"text-matt-textdark dark:text-matt-textlight font-light py-6 " + (props.index % 2 == 0 ? 'text-right pl-6' : 'text-left pr-6')}>
            <p className="my-1 text-yellow-900 text-sm">Featured Project</p>
            <h3 className="text-2xl mb-4 font-medium">{props.title}</h3>


            <div className="lg:dark:bg-portfolioInfo lg:bg-gray-200 lg:p-6 rounded text-sm md:text-base">{props.filler}</div>

            <ul className={"flex space-x-4 mt-5 mb-4 " + (props.index % 2 == 0 ? 'justify-end' : 'justify-start')}>
                {props.tech.map((item, i) => (
                    <li className="hover:underline text-sm">{item}</li>
                ))}
            </ul>

            <div className={"flex space-x-5 " + (props.index % 2 == 0 ? 'justify-end' : 'justify-start')}>
                <FiGithub className="w-6 h-6 hover:text-yellow-900 cursor-pointer" />
                <FiExternalLink className="w-6 h-6 hover:text-yellow-900 cursor-pointer" />
            </div>
        </div>
    );
}