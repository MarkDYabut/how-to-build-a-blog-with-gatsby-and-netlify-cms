import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../mapStyles";
import Helmet from "react-helmet";
import styled from "styled-components";
import Layout from "../components/layout";

const Mapper = styled.div`
  display: flex;
  justify-content: center;
`;

const libraries = ["places"];
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const mapContainerStyle = {
  height: "80vh",
  width: "98.5vw",
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};
const markers = [
  {
    lat: 43.67301477013217,
    lng: -79.63440496749877,
    name: "Nursery Name 1",
    description: "Description 1",
    weblink: "https://www.google.ca/",
    social: "https://www.instagram.com/",
  },
  {
    lat: 43.803985950018536,
    lng: -79.41467840499877,
    name: "Nursery Name 2",
    description: "Description 2",
    weblink: "https://www.google.ca/",
    social: "https://www.instagram.com/",
  },
  {
    lat: 43.89905776305486,
    lng: -79.18945867843627,
    name: "Nursery Name 3",
    description: "Description 3",
    weblink: "https://www.google.ca/",
    social: "https://www.instagram.com/",
  },
];

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyBzyzuHOXvVEKm_zY6KqudL21RZMPfoknw`,
    libraries,
  });
  const [selected, setSelected] = React.useState(null);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <Layout>
      <h1>Nursery Map</h1>
      <p>This page needs to be populated with different nurseries</p>
      <br />
      <Mapper>
        <Helmet>
          <title>PlantRunz Nursery Map</title>
        </Helmet>

        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
        >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              icon={{
                url:
                  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/271/seedling_1f331.png",
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>{selected.name}</h2>
                <p>{selected.description}</p>
                <a target="_blank" href={selected.weblink}>
                  Website
                </a>
                <br />
                <a target="_blank" href={selected.social}>
                  Instagram
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </Mapper>
    </Layout>
  );
}
