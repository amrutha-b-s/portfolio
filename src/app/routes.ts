import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { SkillsPage } from "./components/SkillsPage";
import { ExperiencePage } from "./components/ExperiencePage";
import { ProjectsPage } from "./components/ProjectsPage";
import { AchievementsPage } from "./components/AchievementsPage";
import { ContactPage } from "./components/ContactPage";
import ResumePage from "./components/ResumePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "skills", Component: SkillsPage },
      { path: "experience", Component: ExperiencePage },
      { path: "projects", Component: ProjectsPage },
      { path: "achievements", Component: AchievementsPage },
      { path: "contact", Component: ContactPage },
      { path: "resume", Component: ResumePage },
    ],
  },
]);