import React, { useEffect } from "react";
import AppRoutes from "./router/Routes.jsx";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="shane_tm_all_wrap">
      <ScrollToTop />
      <AppRoutes />
    </div>
  );
};

export default App;
