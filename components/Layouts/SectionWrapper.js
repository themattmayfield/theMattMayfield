
export default function Wrapper({ children, ...props }) {


  
  return (
    <>
      <div id={props.id} className="text-matt-textdark dark:text-matt-textlight bg-transparent mb-40 pt-24 px-8 lg:px-24 container mx-auto flex flex-col min-h-full">
        <h2 className="text-yellow-900 uppercase w-full text-center text-base lg:text-2xl font-bold tracking-wide">{props.title}</h2>
        <p className="text-center text-xl pt-2">{props.sub}</p>     


        <div className="pt-12">
          {children}
        </div>
      </div>
    </>
  );
}