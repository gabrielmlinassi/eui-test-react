import {
  EuiPageTemplate,
  EuiProvider,
  EuiSideNav,
  htmlIdGenerator,
} from "@elastic/eui";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNav = [
    {
      name: "Guidelines",
      id: htmlIdGenerator("basicExample")(),
      items: [
        {
          name: "Getting started",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/page-1"),
          isSelected: location.pathname === "/page-1",
        },
        {
          name: "Accessibility",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/page-2"),
          isSelected: location.pathname === "/page-2",
        },
        {
          name: "Writing",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/page-3"),
          isSelected: location.pathname === "/page-3",
        },
        {
          name: "Changelog",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/page-4"),
          isSelected: location.pathname === "/page-4",
        },
        {
          name: "Theming",
          id: htmlIdGenerator("basicExample")(),
          onClick: () => navigate("/page-5"),
          isSelected: location.pathname === "/page-5",
        },
      ],
    },
  ];

  return (
    <EuiProvider>
      <EuiPageTemplate panelled bottomBorder grow>
        <EuiPageTemplate.Sidebar sticky>
          <EuiSideNav
            aria-label="Guidelines"
            mobileTitle="Guidelines"
            toggleOpenOnMobile={() => toggleOpenOnMobile()}
            isOpenOnMobile={isSideNavOpenOnMobile}
            items={sideNav}
          />
        </EuiPageTemplate.Sidebar>
        {children}
      </EuiPageTemplate>
    </EuiProvider>
  );
};
