import React from "react";

export default function Banner({ bannerTitle, bannerDesc }) {
  return (
    <div className="banner_content">
      <h3>{bannerTitle}</h3>
      <p>{bannerDesc}</p>
    </div>
  );
}
