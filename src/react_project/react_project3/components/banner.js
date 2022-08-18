import React from "react";

export default function banner({ bannerTitle, bannerDesc }) {
  return (
    <div className="banner_content">
      <h3 className="bannerTitle">{bannerTitle}</h3>
      <p className="bannerTitle">{bannerDesc}</p>
    </div>
  );
}
