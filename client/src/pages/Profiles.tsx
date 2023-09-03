import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileLayout from "../components/ProfileLayout";
import Pagination from "../components/Pagination";

import { loadProfiles } from "../features/profileSlice";
import store from "../store/store";
import SearchBar from "../components/SearchBar";
import { useLoaderData } from "react-router-dom";

function Profiles() {
  const loaderData = useLoaderData();
  const [followers, setFollowers] = useState(loaderData.followers);
  const [engagementRate, setEngagementRateRange] = useState(
    loaderData.engagementRate
  );
  const [category, setCategory] = useState(loaderData.category);

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

  const next = async () => {
    if (currentPage + 1 <= totalPages) {
      const url1 = new URL(window.location);
      url1.searchParams.set(
        "page",
        `${parseInt(url1.searchParams.get("page")) + 1}`
      );
      url1.searchParams.set("followers", `${followers}`);
      url1.searchParams.set("engagementRate", `${engagementRate}`);
      url1.searchParams.set("category", `${category}`);
      window.history.pushState(null, "", url1.toString());
      await store.dispatch(
        loadProfiles({
          page: parseInt(url1.searchParams.get("page")),
          pageSize: parseInt(url1.searchParams.get("pageSize")),
          followers: parseInt(url1.searchParams.get("followers")),
          engagementRate: parseFloat(url1.searchParams.get("engagementRate")),
          category: category || "",
        })
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return null;
  };
  const confirmFilter = async () => {
    const url1 = new URL(window.location);
    url1.searchParams.set("page", `${1}`);
    url1.searchParams.set(
      "pageSize",
      `${parseInt(url1.searchParams.get("pageSize")) || 10}`
    );
    url1.searchParams.set("followers", `${followers}`);
    url1.searchParams.set("engagementRate", `${engagementRate}`);
    url1.searchParams.set("category", `${category}`);
    window.history.pushState(null, "", url1.toString());
    await store.dispatch(
      loadProfiles({
        page: 1,
        pageSize: parseInt(url1.searchParams.get("pageSize").toString()) || 10,
        followers: followers,
        engagementRate: engagementRate,
        category: category,
      })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  };
  const clearFilter = async () => {
    const url1 = new URL(window.location);
    url1.searchParams.set("page", `1`);
    url1.searchParams.set("pageSize", `${10}`);
    url1.searchParams.set("followers", `${1000}`);
    url1.searchParams.set("engagementRate", `${0}`);
    url1.searchParams.set("category", `${""}`);
    window.history.pushState(null, "", url1.toString());
    setFollowers(1000);
    setEngagementRateRange(0);
    setCategory("");

    await store.dispatch(
      loadProfiles({
        page: 1,
        pageSize: parseInt(url1.searchParams.get("pageSize")),
        followers: 1000,
        engagementRate: 0,
        category: "",
      })
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const prev = async () => {
    if (currentPage - 1 >= 1) {
      const url1 = new URL(window.location);
      url1.searchParams.set(
        "page",
        `${parseInt(url1.searchParams.get("page")) - 1}`
      );
      url1.searchParams.set("followers", `${followers}`);
      url1.searchParams.set("engagementRate", `${engagementRate}`);
      url1.searchParams.set("category", `${category}`);
      window.history.pushState(null, "", url1.toString());
      await store.dispatch(
        loadProfiles({
          page: parseInt(url1.searchParams.get("page")),
          pageSize: parseInt(url1.searchParams.get("pageSize")),
          followers: parseInt(url1.searchParams.get("followers")),
          engagementRate: parseFloat(url1.searchParams.get("engagementRate")),
          category: url1.searchParams.get("category") || "",
        })
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
                pageSize={
                  new URL(window.location).searchParams.get("pageSize")
                    ? parseInt(
                        new URL(window.location).searchParams.get("pageSize")
                      )
                    : 10
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
