export default function PortfolioInfo(props) {


    return (
        <div className={"text-matt-textdark dark:text-matt-textlight font-light " + (props.index % 2 == 0 ? 'text-right' : 'text-left')}>
            <p className="my-1 text-yellow-900 text-sm">Featured Project</p>
            <h3 className="text-2xl mb-4 font-medium">{props.title}</h3>


            <div className="dark:bg-portfolioInfo bg-gray-200 bg-opacity-6  p-6 rounded">{props.filler}</div>

            <ul className={"flex space-x-4 mt-5 mb-4 " + (props.index % 2 == 0 ? 'justify-end' : 'justify-start')}>
                {props.tech.map((item, i) => (
                    <li className="hover:underline text-sm">{item}</li>
                ))}
            </ul>

            <div>Links</div>
        </div>
    );
}