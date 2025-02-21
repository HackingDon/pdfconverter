import { useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useRef } from "react";

const libraries = ["places"];

const StreetMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY",
    libraries,
  });

  const mapRef = useRef(null);
  const panoRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;

    const fenway = { lat: 42.345573, lng: -71.098326 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: fenway,
      zoom: 14,
    });

    const panorama = new window.google.maps.StreetViewPanorama(panoRef.current, {
      position: fenway,
      pov: { heading: 34, pitch: 10 },
    });

    map.setStreetView(panorama);
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
      <div ref={panoRef} style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default StreetMap;
