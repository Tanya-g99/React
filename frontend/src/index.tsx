import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Root } from "./routes/root";
import ErrorPage from "./components/Error";
import { FeedRoute } from "./routes/feed";
import { MomentRoute } from "./routes/moment";
import { LoginRoute } from "./routes/login";
import { NotificationsRoute } from "./routes/notifications";
import { ProfileRoute } from "./routes/profile";
import { RegisterRoute } from "./routes/register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
function router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/moments/:momentId",
          element: <MomentRoute />,
        },
        {
          path: "/",
          element: <FeedRoute />,
        },
        {
          path: "/notifications",
          element: <NotificationsRoute />,
        },
        {
          path: "/profile/:userId",
          element: <ProfileRoute />,
        },
        {
          path: "/register",
          element: <RegisterRoute />,
        },
        {
          path: "/login",
          element: <LoginRoute />,
        },
      ],
    },
  ]);
}

root.render(
  <React.StrictMode>
    <RouterProvider router={router()} />
  </React.StrictMode>
);

reportWebVitals();
