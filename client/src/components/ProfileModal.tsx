import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SentimentBarChart from "./SentimentBarChart";
import EmotionPieChart from "./EmotionPieChart";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function ProfileModal({
  showModal,
  setShowModal,
  profile,
}: {
  showModal: any;
  setShowModal: any;
  profile: any;
}) {
  const [open, setOpen] = useState(showModal);
  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);
  useEffect(() => {
    if (open === false) {
      setShowModal(false);
    }
  }, [open, setShowModal]);

  const cancelButtonRef = useRef(null);
  return (
    <>
      {" "}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl ">
                  <div className="w-full  px-6 py-6">
                    <div className="flex flex-col items-start w-full m-auto sm:flex-row">
                      <div className="flex mx-auto sm:mr-10 sm:m-0">
                        <div className="items-center justify-center w-20 h-20 m-auto -mr-6 sm:w-32 sm:h-32">
                          <img
                            src={profile.profilePhoto}
                            alt={`Display Picture of ${profile.full_name}`}
                            role="img"
                            crossOrigin="anonymous"
                            className="rounded-xl object-cover h-full w-full shadow-md"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-0 mx-auto my-auto sm:pt-0 sm:mx-0 ">
                        <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
                          <h2 className="flex pr-4 text-xl  text-gray-900 sm:text-3xl font-semibold">
                            {profile.full_name}
                          </h2>
                        </div>
                        <div className="flex items-center justify-between mt-10 space-x-2">
                          <div className="flex">
                            <span className="mr-1 font-semibold">
                              {profile.follower_count}{" "}
                            </span>{" "}
                            Followers
                          </div>
                          <div className="flex">
                            <span className="mr-1 font-semibold">
                              {Math.ceil(profile.engagementRate * 100) / 100}
                            </span>{" "}
                            Engagement Rate
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0  md:pl-12 ">
                        <div className="flex flex-col mx-auto sm:flex-row sm:mx-0 ">
                          <h5 className=" sm:pr-4   sm:text-base pl-1 flex items-center px-1 text-sm font-medium text-gray-900 bg-transparent  outline-none sm:ml-2   focus:outline-none pt-2 pr-44">
                            Categories
                          </h5>
                        </div>
                        <div className="flex items-center justify-between -mt-8 space-x-2">
                          <div className="flex ">
                            <div className="flex justify-center pb-3 px-3 ml-28 pt-2">
                              <div className="text-center mr-3 border-r pr-3">
                                {profile.categories.map(
                                  (arr: any, index: any) => (
                                    <div key={index}>
                                      <h3>{arr[0]}</h3>
                                    </div>
                                  )
                                )}
                              </div>
                              <div className="text-center ">
                                {profile.categories.map(
                                  (arr: any, index: any) => (
                                    <div key={index}>
                                      <h2>{Math.ceil(arr[1] * 100) / 100}</h2>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pt-5 flex mx-auto flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col">
                      <EmotionPieChart profile={profile} />
                      <SentimentBarChart profile={profile} />
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full hover:bg-gray-100 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setOpen(false);
                        setShowModal(false);
                      }}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default ProfileModal;
