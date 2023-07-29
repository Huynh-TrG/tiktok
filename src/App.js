import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { privateRoutes } from "~/routes";
import { DefaultLayout, HeaderOnly } from "~/components/Layout";


function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            let Layout = DefaultLayout;
            const Page = route.component

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

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
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
