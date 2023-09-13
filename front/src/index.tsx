import React from "react";
import ReactDOM from "react-dom/client";
// import { Helmet } from "react-helmet";

import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider as ReduxProvider } from "react-redux";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import swDev from "swDev";
//  router
import router from "./router";
//  styles
import "styles/global.scss";
//  theme
import theme from "config/antd";
//  store
import { store } from "redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

function RayChat() {
  const myWindow: any = window;
  myWindow.RAYCHAT_TOKEN = "c030a005-361e-49e5-b02b-19ead862dc7f";

  (function () {
    const d = document;
    var s: any = d.createElement("script");
    s.src = "https://widget-react.raychat.io/install/widget.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ConfigProvider theme={theme}>
          <>
            {RayChat()}
            <RouterProvider
              router={router}
              fallbackElement={<span>loading...</span>}
            />
          </>
        </ConfigProvider>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// swDev();
