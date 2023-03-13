import React, { useEffect, useState } from "react";

function useCurrentPosition() {
  const [position, setPosition] = useState<GeolocationPosition>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position);
    });
  }, []);

  return position;
}

export default useCurrentPosition;
