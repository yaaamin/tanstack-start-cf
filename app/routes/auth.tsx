import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/start";
import { useAppSession } from "../utils/session";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

const signInFucntion = createServerFn().handler(async ({ data }) => {
  const session = await useAppSession();

  await session.update({
    userEmail: "hello@test.com",
  });

  throw redirect({ to: "/home" });
});

const currentUser = createServerFn().handler(async () => {
  const session = await useAppSession();

  return {
    session: session.data,
  };
});

function RouteComponent() {
  const signIn = useServerFn(signInFucntion);
  const currentUserFn = useServerFn(currentUser);

  const signInMutation = useMutation({
    mutationFn: () => signIn(),
  });

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => currentUserFn(),
  });

  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <div className="h-full w-full max-w-xl mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-white w-full p-5 rounded-lg space-y-4">
            <h1 className="font-bold text-3xl text-center ">Sign In</h1>
            <button
              type="button"
              onClick={() => {
                // signInFucntion();
                signInMutation.mutate();
              }}
              // className="h-9 border border-gray-200 w-[26rem] rounded-lg shadow-sm text-sm font-medium"
              className="cursor-pointer"
            >
              Sign In
            </button>
            <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  );
}
