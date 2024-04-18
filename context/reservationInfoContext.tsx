import React, { createContext, useState } from 'react';

interface ReservationInfo {
  startDate: Date | null;
  endDate: Date | null;
  price: number | null;
}

interface ReservationInfoContextProps {
  reservationInfo: ReservationInfo;
  setReservationInfo: React.Dispatch<React.SetStateAction<ReservationInfo>>;
}

export const ReservationInfoContext =
  createContext<ReservationInfoContextProps>({
    reservationInfo: {
      startDate: null,
      endDate: null,
      price: null,
    },
    setReservationInfo: () => {},
  });

export const ReservationInfoProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [reservationInfo, setReservationInfo] = useState<ReservationInfo>({
    startDate: null,
    endDate: null,
    price: null,
  });

  return (
    <ReservationInfoContext.Provider
      value={{ reservationInfo, setReservationInfo }}
    >
      {children}
    </ReservationInfoContext.Provider>
  );
};
