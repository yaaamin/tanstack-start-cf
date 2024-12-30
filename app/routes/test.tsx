import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import axios from "axios";
import xior from "xior";
import { useQuery } from "@tanstack/react-query";

const todos = createServerFn().handler(async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return { time: new Date().toISOString(), data: res.data };
});

export const Route = createFileRoute("/test")({
  component: RouteComponent,
  loader: async () => {
    const time = await todos();

    return {
      time,
    };
  },
});

function RouteComponent() {
  const todosData = useServerFn(todos);

  const todosFromClient = useQuery({
    queryKey: ["todos"],
    queryFn: () => todosData(),
  });

  const loaderData = useLoaderData({ strict: false });

  return (
    <div className="max-w-5xl py-10 mx-auto border">
      Hello "/test"!
      <pre>From Client: {JSON.stringify(todosFromClient?.data, null, 4)}</pre>
      <pre>From Server: {JSON.stringify(loaderData, null, 4)}</pre>
    </div>
  );
}
