import {
  createFileRoute,
  redirect,
  useLoaderData,
} from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import { useAppSession } from "../utils/session";
import { useMutation } from "@tanstack/react-query";

const currentSession = createServerFn().handler(async () => {
  const session = await useAppSession();

  const sessionDeets = session.data;

  return { sessionDeets, success: true, email: sessionDeets.userEmail };
});

const logout = createServerFn().handler(async () => {
  const session = await useAppSession();

  await session.clear();

  throw redirect({
    to: "/auth",
  });
});

export const Route = createFileRoute("/home")({
  component: RouteComponent,
  loader: async () => {
    const { sessionDeets, success, email } = await currentSession();
    if (!success) {
      return { sessionDeets, success, email };
    }

    return { sessionDeets, success, email };
  },
});

function RouteComponent() {
  // const

  const loaderData = useLoaderData({ strict: false });

  const logoutFn = useServerFn(logout);

  const logoutMutation = useMutation({
    mutationFn: () => logoutFn(),
  });

  return (
    <div>
      Hello "/home"!
      <pre>{JSON.stringify(loaderData, null, 2)}</pre>
      <button
        onClick={() => {
          //   logout();
          logoutMutation.mutate();
        }}
      >
        Logout
      </button>
    </div>
  );
}
