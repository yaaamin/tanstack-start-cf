import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getCount, updateCount } from "../functions";
import Main from "../components/Main";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const state = Route.useLoaderData();
  const router = useRouter();

  return (
    <Main/>
  );
}
