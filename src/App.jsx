// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter> */}
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
