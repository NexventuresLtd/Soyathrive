import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollToHash from "./components/ui/ScrollToHash";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Services from "./pages/Services";
import Nutrition from "./pages/Nutrition";
import Partners from "./pages/Partners";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/products" element={<Services />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}
