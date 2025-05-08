import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import MainFeed from "./pages/MainFeedPage/MainFeedPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieBooking from "./pages/MovieBookingPage/MovieBookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainFeed />,
  },
  {
    path: "/details/:movieId",
    element: <MovieDetailsPage />,
  },
  {
    path: "/booking/:movieId",
    element: <MovieBooking />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
