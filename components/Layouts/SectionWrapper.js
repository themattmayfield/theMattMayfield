export default function Wrapper({ children, id, title }) {
  return (
    <>
      <div
        id={id}
        className="text-matt-textdark dark:text-matt-textlight bg-transparent px-4 xl:px-0 max-w-6xl pt-24 container mx-auto flex flex-col min-h-full"
      >
        <h2 className="text-yellow-900 uppercase w-full text-center text-xl sm:text-2xl lg:text-4xl font-bold tracking-wide">
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </>
  );
}
