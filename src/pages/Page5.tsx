import {
  EuiPageTemplate,
  EuiSpacer,
  EuiTab,
  EuiTabs,
  EuiText,
} from "@elastic/eui";
import { useTabs } from "hooks";
import { Fragment } from "react";

const tabs = [
  {
    id: "cobalt--id",
    name: "Cobalt",
    content: (
      <Fragment>
        <EuiSpacer />
        <EuiText>
          <p>
            Cobalt is a chemical element with symbol Co and atomic number 27.
            Like nickel, cobalt is found in the Earth&rsquo;s crust only in
            chemically combined form, save for small deposits found in alloys of
            natural meteoric iron. The free element, produced by reductive
            smelting, is a hard, lustrous, silver-gray metal.
          </p>
        </EuiText>
      </Fragment>
    ),
  },
  {
    id: "dextrose--id",
    name: "Dextrose",
    content: (
      <Fragment>
        <EuiSpacer />
        <EuiText>
          <p>
            Intravenous sugar solution, also known as dextrose solution, is a
            mixture of dextrose (glucose) and water. It is used to treat low
            blood sugar or water loss without electrolyte loss.
          </p>
        </EuiText>
      </Fragment>
    ),
  },
];

export const Page5 = () => {
  const tabControls = useTabs({ tabs, defaultTab: "cobalt--id" });

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        key={index}
        onClick={() => tabControls.onSelectedTabChanged(tab.id)}
        isSelected={tab.id === tabControls.selectedTabId}
      >
        {tab.name}
      </EuiTab>
    ));
  };

  return (
    <div>
      <EuiPageTemplate.Section grow={false} bottomBorder="extended">
        Theming
      </EuiPageTemplate.Section>
      <EuiPageTemplate.Section>
        <EuiTabs>{renderTabs()}</EuiTabs>
        {tabControls.selectedTabContent}
      </EuiPageTemplate.Section>
    </div>
  );
};
