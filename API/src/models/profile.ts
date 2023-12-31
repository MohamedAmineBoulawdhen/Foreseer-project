import mongoose from "mongoose";
export const ProfileSchema = new mongoose.Schema(
  {
    follower_count: Number,
    following_count: Number,
    biography: String,
    full_name: String,
    is_private: Boolean,
    category: String,
    contact_phone_number: String,
    city_name: String,
    public_email: String,
    pk_id: String,
    username: String,
    engagementRate: Number,
    posts: String,
    tags: [String],
    comments: [String],
    sentimentAnalysis: {
      emotions: [
        {
          emotion: String,
          value: Number,
        },
      ],
      feelings: [
        {
          feeling: String,
          value: Number,
        },
      ],
    },
    wordCloudComments: [
      {
        word: String,
        value: Number,
      },
    ],
    wordCloudPosts: [
      {
        word: String,
        value: Number,
      },
    ],
    categories: [[String, Number]],
    categoriesByWordCloud: [[String, Number]],
    profilePhoto: String,
    base64: String,
  },
  { timestamps: true, strict: true }
);
ProfileSchema.index({ follower_count: 1, engagementRate: 1 });
ProfileSchema.index({ "categories.0": 1 });
export const ProfileModel = mongoose.model("profile", ProfileSchema);
