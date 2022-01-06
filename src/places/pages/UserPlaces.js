import React from "react";
import PlaceList from "../components/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "place1",
    imageUrl:
      "https://image.shutterstock.com/image-photo/street-white-houses-colonia-shown-260nw-1035199813.jpg",
    address: "Viet Nam",
    description: "Dat nuoc hinh chu S",
    location: {
      lat: "40.7484405",
      lng: "-73.4864684",
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "place2",
    imageUrl:
      "https://image.shutterstock.com/image-photo/street-white-houses-colonia-shown-260nw-1035199813.jpg",
    address: "Viet Nam",
    description: "Dat nuoc hinh chu S",
    location: {
      lat: "40.7484405",
      lng: "-73.4864684",
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "place3",
    imageUrl:
      "https://image.shutterstock.com/image-photo/street-white-houses-colonia-shown-260nw-1035199813.jpg",
    address: "Viet Nam",
    description: "Dat nuoc hinh chu S",
    location: {
      lat: "40.7484405",
      lng: "-73.4864684",
    },
    creator: "u3",
  },
];
const UserPlaces = (props) => {
  return <PlaceList items={DUMMY_PLACES} />;
};
export default UserPlaces;
