import React, { Suspense } from "react";
import Loader from "./Loader";

const SubjectLoader = ({ subject, select }) => {
  const Layout = React.lazy(() => import("./" + subject + ".js"));
  return (
    <Suspense fallback="">
      <Layout select={select} />
    </Suspense>
  );
};

export default SubjectLoader;
