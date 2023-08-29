import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

//load profiles
export const loadProfiles = createAsyncThunk(
  "loadPofiles", //must be unique
  async (
    {
      page,
      pageSize,
      followers,
      engagementRate,
      category,
    }: {
      page: number;
      pageSize: number;
      followers: number;
      engagementRate: number;
      category: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get(
        `/profiles?page=${page}&pageSize=${pageSize}&engagementRate=${engagementRate}&followers=${followers}&category=${category}`
      );
      return response.data;
    } catch (error: any) {
      // console.log("error.response",error.response ,"error.response.status",error.response.statusText)
      return rejectWithValue(error?.response?.data);
    }
  }
);
interface Profile {
  follower_count: number;
  following_count: number;
  biography: string;
  full_name: string;
  is_private: boolean;
  category: string;
  contact_phone_number: string;
  city_name: string;
  public_email: string;
  pk_id: string;
  username: string;
  engagementRate: number;
  posts: string;
  tags: [string];
  comments: [string];
  sentimentAnalysis: {
    emotions: [
      {
        emotion: string;
        value: number;
      }
    ];
    feelings: [
      {
        feeling: string;
        value: number;
      }
    ];
  };
  wordCloudComments: [
    {
      word: string;
      value: number;
    }
  ];
  wordCloudPosts: [
    {
      word: string;
      value: number;
    }
  ];
  categories: [[string, number]];
  categoriesByWordCloud: [[string, number]];
  profilePhoto: string;
}
export interface ProfileState {
  profiles: Profile[];
  currentPage: number;
  totalPages: number;
  totalProfiles: number;
  error: string | null;
}

const initialState: ProfileState = {
  profiles: [],
  currentPage: 0,
  totalPages: 0,
  totalProfiles: 0,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProfiles.fulfilled, (state, action: PayloadAction<any>) => {
        state.profiles = action.payload.profiles;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalProfiles = action.payload.totalProfiles;
        state.error = null;
      })
      .addCase(loadProfiles.rejected, (state, action: PayloadAction<any>) => {
        state.profiles = [];
        state.error = action.payload;
      });
  },
});

export const { setProfiles, setError, resetError } = profileSlice.actions;
export default profileSlice.reducer;
