import React from "react";
import Banner from "../components/banner";
import ChildOne from "../components/child1";

export default function About() {
  return (
    <div className="content">
      <Banner
        bannerTitle="About"
        bannerDesc="Ullamco labore fugiat pariatur dolore qui magna ullamco ipsum mollit do voluptate dolore cupidatat. Eiusmod ullamco exercitation adipisicing ipsum. Veniam culpa enim nostrud veniam sint aliqua qui sit proident deserunt culpa duis consequat voluptate. 1"
      />
      <ChildOne />
    </div>
  );
}
