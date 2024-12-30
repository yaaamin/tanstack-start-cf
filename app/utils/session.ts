import { useSession } from "vinxi/http";

type SessionUser = {
  userEmail: string;
};

export function useAppSession() {
  return useSession<SessionUser>({
    password: "YYiwBjs3nDGFVDcDYXQFah8now8Ymxzcst0PWiX5",
  });
}
