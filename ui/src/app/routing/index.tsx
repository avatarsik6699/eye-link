import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import App from "../app";
import MainPage from "../../pages/main-page/main-page";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

export const router = createRouter({ routeTree: rootRoute.addChildren([indexRoute, aboutRoute]) });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
