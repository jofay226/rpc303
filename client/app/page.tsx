"use client";
import { trpc } from "@/trpc/trpcProvider";

export default function Home() {
  const res = trpc.listAllUsers.useQuery();
  console.log(res?.data);

  return <>fdskjnfndsjkfsnj</>;
}
