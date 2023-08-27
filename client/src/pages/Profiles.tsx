import { useSelector } from "react-redux";
import ProfileLayout from "../components/ProfileLayout";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { loadProfiles } from "../features/profileSlice";
import store from "../store/store";
import SearchBar from "../components/SearchBar";

function Profiles() {
  const getProfiles = useSelector((state: any) => {
    return state.profile.profiles;
  });
  const currentPage: number = useSelector((state: any) => {
    return state.profile.currentPage;
  });
  const totalPages: number = useSelector((state: any) => {
    return state.profile.totalPages;
  });
  const totalProfiles: number = useSelector((state: any) => {
    return state.profile.totalProfiles;
  });
  useEffect(() => {
    console.log(currentPage, totalPages, totalProfiles);
  });
  const showProfiles = getProfiles.map((profile: any) => {
    return <ProfileLayout profile={profile} key={profile._id} />;
  });
  const next = async () => {
    if (currentPage + 1 <= totalPages) {
      await store.dispatch(
        loadProfiles({ page: currentPage + 1, pageSize: 10 })
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return null;
  };

  const prev = async () => {
    if (currentPage - 1 >= 1) {
      await store.dispatch(
        loadProfiles({ page: currentPage - 1, pageSize: 10 })
      );
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return null;
  };
  return (
    <>
      <SearchBar />
      <div className="mb-16">
        {/*  bg-gray-100 */}
        <div className="w-full px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              className="lg:flex md:flex sm:flex items-center xl:justify-around flex flex-wrap md:justify-around sm:justify-around lg:justify-around "
            >
              {showProfiles}
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalProfiles={totalProfiles}
                next={next}
                prev={prev}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
