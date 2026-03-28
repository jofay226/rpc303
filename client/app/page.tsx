"use client";
import { trpc } from "@/trpc/trpcProvider";

export default function Home() {
  const res = trpc.listAllUsers.useQuery();
  const res2 = trpc.listUser.useQuery({ id: "1" });
  const createUser = trpc.createUser.useMutation();

  const createUserHandler = () => {
    createUser.mutate({ name: "steve", email: "steve@gmail.com" });
  };

  return (
    <>
      <button onClick={createUserHandler}>create user</button>
    </>
  );
}
