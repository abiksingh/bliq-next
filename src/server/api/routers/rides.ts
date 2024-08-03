import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";
import { Ride } from "~/constant";

export const ridesRouter = createTRPCRouter({
  getRideOptions: publicProcedure.query(async () => {
    const getRideOptions = await axios.get<Ride[]>(
      "http://localhost:3001/rides",
    );

    return {
      rideOptions: getRideOptions.data,
    };
  }),
});
