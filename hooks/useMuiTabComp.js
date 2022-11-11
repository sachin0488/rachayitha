import React from "react";
import BookAboutContent from "../Container/BookDetail/BookAboutContent";
import BookTableOfContent from "../Container/BookDetail/BookTableOfContent";
import LikedComp from "../Container/BookDetail/LikedComp";
import NewestComp from "../Container/BookDetail/NewestComp";
import DashBoardPoem from "../Container/Create/DashBoardPoem";
import DashBoardShort from "../Container/Create/DashBoardShort";
import DashBoardStories from "../Container/Create/DashBoardStories";
import Badges from "../Container/UserProfile/Badges";
import UserLibrary from "../Container/UserProfile/UserLibrary";
import UserWorks from "../Container/UserProfile/UserWorks";

export const genreLeadMuiTabList = [
  {
    labelComp: [
      {
        label: "Male Lead",
        genre_lead: "male",
      },
      {
        label: "Female Lead",
        genre_lead: "female",
      },
    ],
    component: [{}],
  },
];

export const bookAboutAndContentDetailMuiTabList = [
  {
    labelComp: [{ label: "About" }, { label: "Table of Content" }],
    component: [
      { com: <BookAboutContent />, index: 0 },
      { com: <BookTableOfContent />, index: 1 },
    ],
  },
];

export const bookLikedAndNewReviewDetailMuiTabList = [
  {
    labelComp: [{ label: "Liked" }, { label: "Newest" }],
    component: [
      { com: <LikedComp />, index: 0 },
      { com: <NewestComp />, index: 1 },
    ],
  },
];

export const UserProfileMuiTabList = [
  {
    labelComp: [
      { label: "Library" },
      { label: "Activity" },
      { label: "Original Works" },
    ],
    component: [
      { com: <UserLibrary />, index: 0 },
      { com: <Badges />, index: 1 },
      { com: <UserWorks />, index: 2 },
    ],
  },
];

export const CreateUserDashboardMuiTabList = [
  {
    labelComp: [
      {
        label: "STORIES",
      },
      {
        label: "POEMS",
      },
      {
        label: "SHORTS",
      },
    ],
    component: [
      { com: <DashBoardStories />, index: 0 },
      { com: <DashBoardPoem />, index: 1 },
      { com: <DashBoardShort />, index: 2 },
    ],
  },
];
