

export default function Wrapper({children, ...props}) {

    return (
        <>
          <div id={props.id} className="bg-transparent my-view pt-24 px-8 lg:px-24 container mx-auto">
          {children} 
          </div> 
        </>
    );
}