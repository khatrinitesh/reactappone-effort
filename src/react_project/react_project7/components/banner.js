import React from "react";

export default function Banner({ bannerTitle, bannerDesc }) {
  return (
    <div className="banner_content">
      <h3 className="banner_title">{bannerTitle}</h3>
      <p className="banner_desc">{bannerDesc}</p>
    </div>
  );
}
