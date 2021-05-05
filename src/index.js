import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import {createStore} from "redux";
import {YMaps} from "react-yandex-maps";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/root-reducer";
import "./scss/style.scss";
import robotoRegularWoff2 from "./assets/fonts/roboto-regular.woff2";

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <Helmet>
        <link rel="preload" href={robotoRegularWoff2} as="font" type="font/woff2" crossOrigin/>
      </Helmet>
      <YMaps>
        <App />
      </YMaps>
    </Provider>,
    document.getElementById(`root`)
);
