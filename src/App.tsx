import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
// import { HooksPage } from './pages/HooksPage';
import { ProductsPage } from './pages/ProductsPage';

const HooksPage = React.lazy(() => import('./pages/HooksPage'));
// HooksPage export default
// можно применять динамические импорты import("./math").then(math => {console.log(math.add(16, 26));});

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route
          path="/hooks/*"
          element={
            <React.Suspense fallback={<h1>Lazy Loading...</h1>}>
              <HooksPage />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
