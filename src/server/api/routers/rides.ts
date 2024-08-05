import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";
import { Ride } from "~/constant";
import { env } from "~/env.mjs";

const backendBaseUrl = env.BE_BASE_URL;

export const ridesRouter = createTRPCRouter({
  getRideOptions: publicProcedure.query(async () => {
    const getRideOptions = await axios.get<Ride[]>(
      `${backendBaseUrl}/api/rides`,
    );

    return {
      rideOptions: getRideOptions.data,
    };
  }),
});
