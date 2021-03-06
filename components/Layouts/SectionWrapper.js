
export default function Wrapper({ children, ...props }) {


  
  return (
    <>
      <div id={props.id} className="text-matt-textdark dark:text-matt-textlight bg-transparent px-4 xl:px-0 max-w-6xl pt-24 container mx-auto flex flex-col min-h-full">
      <h2 className="text-yellow-900 uppercase w-full text-center text-xl sm:text-2xl lg:text-4xl font-bold tracking-wide">{props.title}</h2>


        <div >
          {children}
        </div>
      </div>
    </>
  );
}