import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainFeed from "./pages/MainFeedPage/MainFeedPage.tsx";
import { createBrowserRouter } from "react-router";
import MovieDetails from "./pages/MovieDetailsPage/MovieDetailsPage.tsx";
import MovieBooking from "./pages/MovieBookingPage/MovieBookingPage.tsx";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainFeed />,
      },
      {
        path: "/details/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "/booking/:movieId",
        element: <MovieBooking />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
