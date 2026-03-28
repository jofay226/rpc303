import { prisma } from '../db/db.ts';
import { publicProcedure, router } from '../trpc/trpcConfig.ts';
import z from 'zod';
import {TRPCError} from '@trpc/server'
 
export const appRouter = router({
  listAllUsers : publicProcedure.query( async () => await prisma.findMany()),
  listUser: publicProcedure.input(z.object({id: z.string()})).query(async (opts) => {
    const user = await prisma.findUnique(opts.input.id);
    if(!user){
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "cannot find user with provided id"
      })
    }
    return user
  }),
  createUser: publicProcedure.input(z.object({name: z.string(), email: z.string()})).mutation(async ({input}) => {
    const newUser = await prisma.create(input)
    return newUser
  }),
  deleteUser: publicProcedure.input(z.object({id: z.string()})).mutation(async({input}) => {
    const deletedUser = await prisma.delete(input.id)
    return deletedUser
  })
  
});


export type AppRouter = typeof appRouter;






