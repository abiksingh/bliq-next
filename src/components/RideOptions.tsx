import React from "react";
import styles from "./RideOptions.module.css";

interface Ride {
  provider: string;
  price: number;
  duration: {
    value: number;
    unit: string;
  };
  carType: string;
}

const RideOptions: React.FC<{ rides: Ride[] }> = ({ rides }) => {
  return (
    <div className={styles.rideOptions}>
      <h2>Choose a ride</h2>
      {rides?.map((ride, index) => (
        <div key={index} className={styles.rideOption}>
          <div className={styles.rideDetails}>
            <div className={styles.rideHeader}>
              <span className={styles.rideProvider}>{ride.provider}</span>
              <span className={styles.ridePrice}>€{ride.price}</span>
            </div>
            <div className={styles.rideInfo}>
              <span>
                {ride.duration.value} {ride.duration.unit} away
              </span>
              <p>{ride.carType}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RideOptions;
