import { loadProfiles } from "./../features/profileSlice";
import store from "../store/store";

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
  const engagementRate = parseInt(url.searchParams.get("engagementRate"))
    ? parseInt(url.searchParams.get("engagementRate"))
    : 0;
  const category: string = url.searchParams.get("category")
    ? url.searchParams.get("category")
    : "";
  await store.dispatch(
    loadProfiles({ page, pageSize, followers, engagementRate, category })
  );

  return { page, pageSize, followers, engagementRate, category };
};
