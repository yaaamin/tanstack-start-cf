import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getCount, updateCount } from "../functions";
import '../index.css';

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const state = Route.useLoaderData();
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        updateCount({ data: 2 }).then(() => router.invalidate());
      }}
      className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add 1 to {state}
    </button>
  );
}
