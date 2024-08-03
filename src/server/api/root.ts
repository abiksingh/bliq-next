import { createTRPCRouter } from "~/server/api/trpc";
import { ridesRouter } from "~/server/api/routers/rides";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  rides: ridesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
