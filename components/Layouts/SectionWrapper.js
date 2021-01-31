
export default function Wrapper({ children, ...props }) {


  
  return (
    <>
      <div id={props.id} className="text-matt-textdark dark:text-matt-textlight bg-transparent my-view pt-24 px-8 lg:px-24 container mx-auto">
        <h2 className=" w-full text-center text-base lg:text-xl font-medium">{props.title}</h2>

        


        <div className="pt-12">
          {children}
        </div>
      </div>
    </>
  );
}