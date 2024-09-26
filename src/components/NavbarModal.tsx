import DayNightToggle from '@/components/DayNightToggle';
import NavItems from '@/components/NavItems';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useEffect } from 'react';

export default function NavbarModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        overlay={false}
        displayCloseButton={false}
        side="left"
        className="w-full lg:hidden bg-white dark:bg-matt-darknav z-40 top-16"
      >
        <div className="flex flex-col h-[calc(100%-64px)] relative w-full">
          <ul className="space-y-6 flex flex-col h-full justify-center items-center list-none">
            <NavItems setOpen={setOpen} animate={'visible'} />
          </ul>

          <div className="px-3 py-4 mx-auto text-xs uppercase font-bold dark:text-matt-textlight dark:hover:text-matt-orange text-matt-textdark hover:text-matt-orange cursor-pointer">
            <span className="ml-2">
              <DayNightToggle mobile={true} />
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
