import { EuiPageTemplate } from "@elastic/eui";

export const HomePage = () => {
  return (
    <EuiPageTemplate.EmptyPrompt title={<span>Dashboards</span>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </EuiPageTemplate.EmptyPrompt>
  );
};
