import React from "react";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
   return (
      <div className="App">
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </Suspense>

      </div>
   )
};

export default App;
