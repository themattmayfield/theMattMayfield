import { useRouter } from 'next/navigation';
import { FiGithub, FiLink } from 'react-icons/fi';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

export default function PortfolioItemModal({
  activeItem,
  setActiveItem,
}: {
  activeItem: any;
  setActiveItem: any;
}) {
  const router = useRouter();

  function closeModal() {
    setActiveItem(null);
  }

  return (
    <Dialog open={!!activeItem} onOpenChange={closeModal}>
      <DialogOverlay className="bg-black/40" />
      <DialogContent className="sm:max-w-3xl bg-white dark:bg-matt-dark border-none">
        <div className="px-2 py-6 space-y-6">
          <div className="space-y-1.5">
            <p className="text-xs text-matt-orange">Featured Project</p>
            <p className="font-bold text-3xl">{activeItem?.title}</p>
          </div>
          <p className="text-sm dark:text-gray-300">
            {activeItem?.description}
          </p>
          <div className="text-sm flex items-center space-x-4">
            {activeItem?.tech.map((item: any) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {activeItem?.github && (
              <button
                type="button"
                className="focus:outline-none"
                onClick={() => router.push(activeItem.github)}
              >
                <FiGithub className="text-xl cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out" />
              </button>
            )}
            <button
              type="button"
              className="focus:outline-none"
              onClick={() => router.push(activeItem?.url)}
            >
              <FiLink className="text-xl cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
