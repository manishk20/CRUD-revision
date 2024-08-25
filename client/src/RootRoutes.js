import { Route, Routes } from "react-router-dom";
import FrontPage from "./Components/FrontPage";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Create from "./Components/Create";
import Delete from "./Components/Delete";

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<Update />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>
  );
}
