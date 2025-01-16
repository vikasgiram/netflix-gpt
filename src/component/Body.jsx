import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProtectRoutes from "../utils/ProtectRoutes";
import SearchPage from "./SearchPage";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/browse"
          element={
            <ProtectRoutes>
              <Browse />
            </ProtectRoutes>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectRoutes>
              <SearchPage />
            </ProtectRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
