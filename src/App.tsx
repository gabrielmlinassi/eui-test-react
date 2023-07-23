import "@elastic/eui/dist/eui_theme_light.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Page1, Page2, Page3, Page4, Page5 } from "./pages";
import { MainLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page-1" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/page-3" element={<Page3 />} />
          <Route path="/page-4" element={<Page4 />} />
          <Route path="/page-5" element={<Page5 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
