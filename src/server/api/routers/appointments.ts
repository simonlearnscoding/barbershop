import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const appointmentRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ ctx }) => {
    const apt = ctx.db.appointments.findMany();
    return apt
  }),
});
