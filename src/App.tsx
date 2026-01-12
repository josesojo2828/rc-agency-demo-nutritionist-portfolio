import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";
import Version3 from "./pages/Version3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" replace />} />
        <Route path="/v1" element={<Version1 />} />
        <Route path="/v2" element={<Version2 />} />
        <Route path="/v3" element={<Version3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
