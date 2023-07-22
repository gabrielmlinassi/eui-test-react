import React, { useState } from "react";
import { EuiPageTemplate, EuiSideNav } from "@elastic/eui";

function App() {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNav = [
    {
      name: "Example Pages",
      id: "example--id",
      items: [
        {
          name: "Page 1",
          id: "example-page-1--id",
          href: "#page-1",
          isSelected: false,
        },
        {
          name: "Page 2",
          id: "example-page-2--id",
          href: "#page-2",
          isSelected: false,
        },
        {
          name: "Page 3",
          id: "example-page-3--id",
          href: "#page-3",
          isSelected: false,
        },
        {
          name: "Page 4",
          id: "example-page-4--id",
          href: "#page-4",
          isSelected: false,
        },
        {
          name: "Page 5",
          id: "example-page-5--id",
          href: "#page-5",
          isSelected: false,
        },
      ],
    },
  ];

  return (
    <EuiPageTemplate>
      <EuiPageTemplate.Sidebar sticky>
        <EuiSideNav
          aria-label="Basic example"
          mobileTitle="Basic example"
          toggleOpenOnMobile={() => toggleOpenOnMobile()}
          isOpenOnMobile={isSideNavOpenOnMobile}
          style={{ width: 192 }}
          items={sideNav}
        />
      </EuiPageTemplate.Sidebar>
      <EuiPageTemplate.Section grow={false} bottomBorder="extended">
        {"title"}
      </EuiPageTemplate.Section>
      <div>content</div>
    </EuiPageTemplate>
  );
}

export default App;
