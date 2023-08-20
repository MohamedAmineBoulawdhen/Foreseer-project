import { useState } from "react";
import ProfileModal from "./ProfileModal";

function ProfileLayout({ profile }: { profile: any }) {
  const [showModal, setShowModal] = useState(false);
  {
    /*follower_count:877050
following_count:144
biography:"Host of The Minority Mindset Show
Chief Money Nerd @briefsmediaofficial 
👇 Get some FREE stuff!"
full_name:𝐉𝐚𝐬𝐩𝐫𝐞𝐞𝐭 𝐒𝐢𝐧𝐠𝐡
**contact_phone_number:
**city_name:"New York
**public_email:mike@example.com
*username:traderkang
engagementRate:0.46646764952606073
sentimentAnalysis
categories:Entrepreneur-Investor-Crypto-Daily Trader-Stocks */
  }
  return (
    <>
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-4/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 flex flex-wrap"
      >
        <div className="rounded overflow-hidden shadow-md bg-white border border-gray-200 justify-center h-96 min-w-80 flex flex-wrap">
          <div className="absolute -mt-20 w-full flex justify-center flex-wrap">
            <div className="h-32 w-32">
              {/* https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif */}
              <img
                src={profile.profilePhoto}
                alt={`Display Picture of ${profile.full_name}`}
                role="img"
                crossOrigin="anonymous"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">
              {profile.full_name}
            </h1>
            <p className="text-gray-800 text-sm text-center">
              {profile.username}
            </p>
            <p className="text-justify text-gray-600 text-base pt-3 font-normal">
              {profile.biography}biography
            </p>
            <div className="absolute bottom-1 left-0 right-0 flex justify-center">
              <div className="w-full flex justify-center pt-5 pb-5 flex-col">
                <a className="mx-5   ">
                  <div aria-label="Github" role="img">
                    <span className="font-semibold">Followers</span>{" "}
                    <span className="font-black">{profile.follower_count}</span>
                  </div>
                </a>
                <a className="mx-5   ">
                  <div aria-label="Twitter" role="img">
                    <span className="font-semibold">Following</span>{" "}
                    <span className="font-black">
                      {profile.following_count}
                    </span>
                  </div>
                </a>
                <a className="mx-5  ">
                  <div aria-label="Instagram" role="img">
                    <span className="font-semibold">Engagement Rate</span>{" "}
                    <span className="font-black">
                      {" "}
                      {Math.ceil(profile.engagementRate * 100) / 100}
                    </span>
                  </div>
                </a>
                <button
                  className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow relative -bottom-6 w-20 text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 "
                  onClick={() => setShowModal(true)}
                >
                  More Details...
                </button>
                <ProfileModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  profile={profile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
