import { prisma } from '../db/db.ts';
import { publicProcedure, router } from '../trpc/trpcConfig.ts';
 
export const appRouter = router({
  listAllUsers : publicProcedure.query( async () => await prisma.findMany())

});
 


export type AppRouter = typeof appRouter;

