import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "../components/manajemen/SidebarData";
import SubMenu from "../components/manajemen/SubMenu";
import { IconContext } from "react-icons/lib";
import { Image, Navbar } from "react-bootstrap";
// import produksiIn from "../img/produksi.in.png";

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #0771b8;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div class="shadow-sm bg-black rounded">
          <Navbar
            fixed="top"
            style={{ backgroundColor: "white", boxShadow: "black" }}
          >
            <NavIcon to="#">
              <FaIcons.FaBars
                onClick={showSidebar}
                style={{ color: "black" }}
              />
            </NavIcon>
            <NavIcon
              to="/manajemen/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Image
                style={{ height: "45px", width: "110px" }}
                // src={produksiIn}
              />
            </NavIcon>
          </Navbar>
        </div>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu props={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
