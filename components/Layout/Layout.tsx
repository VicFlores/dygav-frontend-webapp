import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { BurgerMenu, NavBar } from "..";
import { Session } from "next-auth";

interface Props {
  children?: ReactNode;
  session?: Session | null;
}

export const Layout: FC<Props> = ({ children, session = null }) => {
  return (
    <div>
      <NavBar session={session} />
      <BurgerMenu session={session} />

      <>{children}</>
    </div>
  );
};
