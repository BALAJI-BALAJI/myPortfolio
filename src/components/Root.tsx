import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { ROUTES } from "../routers/RouterPath";

// Lazy loaded header and other pages
const Header = lazy(() => import("./shared/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const AppLayout: React.FC = () => {
  const routes = [
    { path: ROUTES.HOME, component: <Home /> },
    { path: ROUTES.ABOUT, component: <About /> },
    { path: ROUTES.SKILLS, component: <Skills /> },
    { path: ROUTES.PROJECTS, component: <Projects /> },
    { path: ROUTES.CONTACT, component: <Contact /> },
  ];

  return (
      <Router>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Suspense
            fallback={
              <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Routes>
          </Suspense>
        </Box>
      </Router>
  );
};

export default AppLayout;
