"use client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server/src/routers/user.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ReactNode } from "react";

export const trpc = createTRPCReact<AppRouter>();

function TrpcProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  const trpcClient = trpc.createClient({
    links: [httpBatchLink({ url: "http://localhost:4000/trpc" })],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;
