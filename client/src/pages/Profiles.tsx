import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileLayout from "../components/ProfileLayout";
import Pagination from "../components/Pagination";

import { loadProfiles } from "../features/profileSlice";
import store from "../store/store";
import SearchBar from "../components/SearchBar";
import { useLoaderData, useSearchParams } from "react-router-dom";

function Profiles() {
  const [searchParams, setsearchParams] = useSearchParams();
  const loaderData = useLoaderData();
  const [followers, setFollowers] = useState(loaderData.followers);
  const [engagementRate, setEngagementRateRange] = useState(
    loaderData.engagementRate
  );
  const [category, setCategory] = useState(loaderData.category);

  // console.log(loaderData);
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

  const showProfiles = getProfiles.map((profile: any) => {
    return <ProfileLayout profile={profile} key={profile._id} />;
  });
  useEffect(() => {
    if (loaderData) {
      setsearchParams(loaderData);
    }
  }, []);
  // console.log(searchParams.get("page"));
  const next = async () => {
    if (currentPage + 1 <= totalPages) {
      await store.dispatch(
        loadProfiles({
          page: parseInt(searchParams.get("page")) + 1,
          pageSize: parseInt(searchParams.get("pageSize")),
          followers: parseInt(searchParams.get("followers")),
          engagementRate: parseInt(searchParams.get("engagementRate")),
          category: searchParams.get("category"),
        })
      );
      setsearchParams((prev) => {
        return {
          page: parseInt(prev.get("page")) + 1,
          pageSize: parseInt(prev.get("pageSize")),
          followers: parseInt(searchParams.get("followers")),
          engagementRate: parseInt(searchParams.get("engagementRate")),
          category: searchParams.get("category"),
        };
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return null;
  };
  const confirmFilter = async () => {
    await store.dispatch(
      loadProfiles({
        page: 0,
        pageSize: parseInt(searchParams.get("pageSize")),
        followers: followers,
        engagementRate: engagementRate,
        category: category,
      })
    );
    setsearchParams((prev) => {
      return {
        page: 0,
        pageSize: parseInt(searchParams.get("pageSize")),
        followers: followers,
        engagementRate: engagementRate,
        category: category,
      };
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return console.log("confirmed");
  };
  const clearFilter = async () => {
    setFollowers(1000);
    setEngagementRateRange(0);
    setCategory("");

    await store.dispatch(
      loadProfiles({
        page: 0,
        pageSize: parseInt(searchParams.get("pageSize")),
        followers: 1000,
        engagementRate: 0,
        category: "",
      })
    );
    setsearchParams((prev) => {
      return {
        page: 0,
        pageSize: parseInt(prev.get("pageSize")),
        followers: 1000,
        engagementRate: 0,
        category: "",
      };
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const prev = async () => {
    if (currentPage - 1 >= 1) {
      await store.dispatch(
        loadProfiles({
          page: parseInt(searchParams.get("page")) - 1,
          pageSize: parseInt(searchParams.get("pageSize")),
          followers: parseInt(searchParams.get("followers")),
          engagementRate: parseInt(searchParams.get("engagementRate")),
          category: searchParams.get("category"),
        })
      );
      setsearchParams((prev) => {
        return {
          page: parseInt(prev.get("page")) - 1,
          pageSize: parseInt(prev.get("pageSize")),
          followers: parseInt(searchParams.get("followers")),
          engagementRate: parseInt(searchParams.get("engagementRate")),
          category: searchParams.get("category"),
        };
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return null;
  };
  return (
    <>
      <SearchBar
        followers={followers}
        engagementRate={engagementRate}
        category={category}
        setFollowers={setFollowers}
        setEngagementRateRange={setEngagementRateRange}
        setCategory={setCategory}
        confirmFilter={confirmFilter}
        clearFilter={clearFilter}
      />
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
                pageSize={parseInt(searchParams.get("pageSize"))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
