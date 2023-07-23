import { ReactNode, useMemo, useState } from "react";

type UseTabsOpts = {
  tabs: { id: string; name: string; content: ReactNode }[];
  defaultTab?: string;
};

const useTabs = ({ defaultTab, tabs }: UseTabsOpts) => {
  const [selectedTabId, setSelectedTabId] = useState(defaultTab);

  const selectedTabContent = useMemo(() => {
    return tabs.find((obj) => obj.id === selectedTabId)?.content;
  }, [tabs, selectedTabId]);

  const onSelectedTabChanged = (id: string) => {
    setSelectedTabId(id);
  };

  return { selectedTabId, selectedTabContent, onSelectedTabChanged };
};

export { useTabs };
