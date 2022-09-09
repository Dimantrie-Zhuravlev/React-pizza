import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// import { store, persistor } from "./store/store";
// import "antd/dist/antd.min.css";
// import App from "./pages/App";

// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </BrowserRouter>
// );
