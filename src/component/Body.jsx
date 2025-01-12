import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ProtectRoutes from "../utils/ProtectRoutes";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
