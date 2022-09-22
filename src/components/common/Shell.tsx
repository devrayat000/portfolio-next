import { AppShell } from "@mantine/core";
import React from "react";
import MyHeader from "./Header";

const Shell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AppShell header={<MyHeader />} fixed={false}>
      {children}
    </AppShell>
  );
};

export default Shell;
