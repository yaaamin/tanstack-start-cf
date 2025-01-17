import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
// import './index.css'; // Adjust the path if necessary

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
