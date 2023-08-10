import React from "react";
import Navbar from "../shared/Navbar";
import FooterPage from "../shared/Footer";

interface IProps {
  children: React.ReactNode;
}
const RootLayout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      {children}
     <FooterPage />
    </>
  );
};

export default RootLayout;
