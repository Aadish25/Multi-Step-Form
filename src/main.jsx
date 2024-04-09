import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Ques1 from "./components/questions/ques1.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ques2 from "./components/questions/Ques2.jsx";
import Ques3 from "./components/questions/Ques3.jsx";
import Ques4 from "./components/questions/Ques4.jsx";
import Ques5 from "./components/questions/Ques5.jsx";
import Result from "./components/result/Result.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ques-1",
    element: <Ques1 />,
  },
  {
    path: "/ques-2",
    element: <Ques2 />,
  },
  {
    path: "/ques-3",
    element: <Ques3 />,
  },
  {
    path: "/ques-4",
    element: <Ques4 />,
  },
  {
    path: "/ques-5",
    element: <Ques5 />,
  },
  {
    path: "/results",
    element: <Result />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
