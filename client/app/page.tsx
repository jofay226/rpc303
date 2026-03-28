"use client";
import { trpc } from "@/trpc/trpcProvider";

export default function Home() {
  const res = trpc.listAllUsers.useQuery();
  const res2 = trpc.listUser.useQuery({ id: "1" });
  const createUser = trpc.createUser.useMutation();
  const deleteUser = trpc.deleteUser.useMutation();

  const createUserHandler = () => {
    createUser.mutate({ name: "steve", email: "steve@gmail.com" });
  };

  const deleteUserHandler = () => {
    deleteUser.mutate({ id: "1" });
  };

  return (
    <>
      <button onClick={createUserHandler}>create user</button>
      <button onClick={deleteUserHandler}>Delete user</button>
    </>
  );
}
