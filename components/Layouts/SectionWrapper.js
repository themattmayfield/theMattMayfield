
export default function Wrapper({ children, ...props }) {


  
  return (
    <>
      <div id={props.id} className="text-matt-textdark dark:text-matt-textlight bg-transparent px-4 xl:px-0 max-w-6xl mb-40 pt-24 container mx-auto flex flex-col min-h-full">
      <h2 className="text-yellow-900 uppercase w-full text-left text-base lg:text-2xl font-bold tracking-wide">{props.title}</h2>


        <div className="pt-12">
          {children}
        </div>
      </div>
    </>
  );
}