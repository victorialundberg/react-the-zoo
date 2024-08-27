import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { animalLoader } from "./loaders/animalLoader";
import { animalsLoader } from "./loaders/animalsLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/animals",
        element: <Animals></Animals>,
        loader: animalsLoader,
      },
      {
        path: "/animal/:id",
        element: <Animal></Animal>,
        loader: animalLoader,
      },
    ],
  },
]);
