import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiGithub, FiLink } from "react-icons/fi";
import { useRouter } from "next/router";

export default function PortfolioItemModal({ activeItem, setActiveItem }) {
  const router = useRouter();

  function closeModal() {
    setActiveItem(null);
  }

  return (
    <>
      <Transition appear show={activeItem ? true : false} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl px-6 py-16 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-matt-dark shadow-xl rounded-2xl">
                <div className="space-y-1.5">
                  <p className="text-xs text-matt-orange">Featured Project</p>
                  <p className="font-bold text-3xl">{activeItem?.title}</p>
                </div>
                <p className="mt-8 text-sm text-gray-300">
                  {activeItem?.description}
                </p>
                <div className="mt-6 text-sm flex items-center space-x-4">
                  {activeItem?.tech.map((item) => (
                    <p key={item} className="">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <button
                    className="focus:outline-none"
                    onClick={() => router.push(activeItem?.github)}
                  >
                    <FiGithub className="text-xl cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out" />
                  </button>
                  <button
                    className="focus:outline-none"
                    onClick={() => router.push(activeItem?.url)}
                  >
                    <FiLink className="text-xl cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
