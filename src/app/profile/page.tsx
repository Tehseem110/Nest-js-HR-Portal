"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { userApi } from "@/redux/features/userApi";
import { removeCredentials } from "@/redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";

const ProfilePage = () => {
  /// initialize
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  /// rtk query

  const onLogout = async () => {
    try {
      dispatch(userApi.endpoints.logout.initiate("_"));
      dispatch(removeCredentials());

      router.push(`/login`);
    } catch (error: any) {
      console.log("Error At Login", error.message);
    } finally {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <hr />
      <button onClick={onLogout} className="bg-blue-500 text-white">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
