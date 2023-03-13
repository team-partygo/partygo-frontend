import React, { useEffect, useRef } from "react";
// @ts-ignore
import mapboxgl from "mapbox-gl";

interface MapProps {
  mapContainer: React.RefObject<any>;
  center: { lat: number; lng: number };
}

function useMap({
  mapContainer,
  center,
}: MapProps): React.RefObject<mapboxgl.Map> {
  const map: React.MutableRefObject<mapboxgl.Map> = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidG9tYmVydG9saSIsImEiOiJjamkwNnF2eDExNHhmM3ZtaHJtb2R6d3l5In0.W45o8kX858CrWD7DLP26cw";

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: center, // starting position [lng, lat]
      zoom: 11, // starting zoom
    });
  }, []);

  return map;
}

export default useMap;
