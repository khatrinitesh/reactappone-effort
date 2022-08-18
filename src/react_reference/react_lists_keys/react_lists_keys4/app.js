import React from "react";

export default function CustomApp() {
  return (
    <div>
      {planets.map((val, i) => {
        return !val.isGasPlanet && <h1>{val.name}</h1>;
      })}
    </div>
  );
}

export const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];
