import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Market from "./pages/Market";
import Operations from "./pages/Operations";
import Funding from "./pages/Funding";
import Acronyms from "./pages/Acronyms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/market" element={<Market />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/acronyms" element={<Acronyms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}
