import { createRoot, hydrateRoot } from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router";
import { routes } from "./routes";

const createRouter = process.env?.GITHUB_WORKFLOW!!
  ? createHashRouter
  : createBrowserRouter;
const router = createRouter(routes);
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);
