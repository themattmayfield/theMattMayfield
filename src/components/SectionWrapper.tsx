import type { ReactNode } from 'react';

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <>
      <div
        id={id}
        className="text-matt-textdark dark:text-matt-textlight bg-transparent px-4 xl:px-0 max-w-6xl pt-24 container mx-auto flex flex-col min-h-full"
      >
        <div>{children}</div>
      </div>
    </>
  );
}
