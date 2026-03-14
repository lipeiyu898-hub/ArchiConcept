/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectInput from "./pages/ProjectInput";
import Results from "./pages/Results";
import SchemeDetails from "./pages/SchemeDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects/new" element={<ProjectInput />} />
          <Route path="/projects/:id/results" element={<Results />} />
          <Route path="/projects/:id/schemes/:schemeId" element={<SchemeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
