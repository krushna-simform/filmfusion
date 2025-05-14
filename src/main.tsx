import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainFeed from "./pages/MainFeedPage/MainFeed.tsx";
import { createBrowserRouter } from "react-router";
import MovieDetails from "./pages/MovieDetailsPage/MovieDetails.tsx";
import MovieBooking from "./pages/MovieBookingPage/MovieBooking.tsx";
import { RouterProvider } from "react-router-dom";
import { PageNotFound } from "./components/ui/PageNotFound.tsx";

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
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
