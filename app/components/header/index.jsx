"use client";

import { useState } from "react";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";

function HeaderLayout() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openMobileNav = () => {
    setIsNavbarOpen(true);
  };

  const closeMobileNav = () => {
    setIsNavbarOpen(false);
  };

  const toggleMobileNav = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>
      <HeaderDesktop openMobileNav={openMobileNav} />

      {isNavbarOpen && (
        <HeaderMobile
          closeMobileNav={closeMobileNav}
          isNavbarOpen={isNavbarOpen}
          toggleMobileNav={toggleMobileNav}
        />
      )}
    </>
  );
}

export default HeaderLayout;
