import { loadProfiles } from "./../features/profileSlice";
import store from "../store/store";
import { redirect } from "react-router-dom";

export const ProfilesLoader = async ({ request }: { request: any }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page"))
    ? parseInt(url.searchParams.get("page"))
    : 1;
  const pageSize = parseInt(url.searchParams.get("pageSize"))
    ? parseInt(url.searchParams.get("pageSize"))
    : 10;
  const followers = parseInt(url.searchParams.get("followers"))
    ? parseInt(url.searchParams.get("followers"))
    : 1000;
  const engagementRate =
    parseFloat(url.searchParams.get("engagementRate")) || 0;
  const category: string = url.searchParams.get("category")
    ? url.searchParams.get("category")
    : "";
  await store.dispatch(
    loadProfiles({ page, pageSize, followers, engagementRate, category })
  );

  const url1 = new URL(window.location);
  url1.searchParams.set("page", `${page}`);
  url1.searchParams.set("pageSize", `${pageSize}`);
  url1.searchParams.set("followers", `${followers}`);
  url1.searchParams.set("engagementRate", `${engagementRate}`);
  url1.searchParams.set("category", `${category}`);
  window.history.pushState(null, "", url1.toString());

  return { page, pageSize, followers, engagementRate, category };
};
