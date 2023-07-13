"use client";

import { MyUserContextProvider } from "@/app/(hooks)/useUser";
import { ReactNode } from "react";

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
