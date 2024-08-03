enum RideProvider {
  BOLT = "Bolt",
  UBER = "Uber",
}

interface Duration {
  value: number;
  unit: string;
}

export interface Ride {
  provider: RideProvider;
  price: number;
  duration: Duration;
  carType: string;
}
