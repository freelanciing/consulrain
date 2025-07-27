import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import { HomePage, SplashPage , About } from "../pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Splash Page - No Layout */}
      <Route path="/" element={<SplashPage />} />

      {/* Main App Routes with Layout */}
      <Route path="/home" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/about" element={<RootLayout />} >
        <Route index element={<About />} />
      </Route>
    </>
  )
);

export default router;
