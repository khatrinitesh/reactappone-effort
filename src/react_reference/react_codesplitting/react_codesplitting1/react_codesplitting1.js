import React, { Suspense } from "react";

const Nitesh = React.lazy(() => import("./nitesh"));
const Sameet = React.lazy(() => import("./sameet"));

export default function CustomApp() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Nitesh />
          <Sameet />
        </section>
      </Suspense>
    </div>
  );
}
