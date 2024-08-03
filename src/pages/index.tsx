import { type NextPage } from "next";
import { api } from "~/utils/api";
import RideOptions from "~/components/RideOptions";
import NoServiceAvailable from "~/components/NoServiceAvailable";
import Loader from "~/components/global/Loader";

const Home: NextPage = () => {
  const { data, isLoading, isError } = api.rides.getRideOptions.useQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data?.rideOptions || data.rideOptions.length === 0) {
    return <NoServiceAvailable />;
  }

  return <RideOptions rides={data?.rideOptions ?? []} />;
};

export default Home;
