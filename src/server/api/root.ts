import { appointmentRouter } from "@/server/api/routers/appointments";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: appointmentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
