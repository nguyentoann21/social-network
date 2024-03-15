import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Main } from './layouts';

function App() {
  return (
    <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = Main;
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
    </div>
  );
}

export default App;
