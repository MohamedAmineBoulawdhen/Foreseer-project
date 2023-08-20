import { loadProfiles } from "./../features/profileSlice";
import store from "../store/store";

export const ProfilesLoader = async () => {
  await store.dispatch(loadProfiles({ page: 1, pageSize: 10 }));
  return null;
};
