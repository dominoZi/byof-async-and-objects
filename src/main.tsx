import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/highlight.js/styles/agate.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  AsyncAwaitPage,
  CSSNestingPage,
  CallbacksPage,
  ClassesPage,
  EventLoopPage,
  JWTTokenPage,
  PromisesPage,
  SymbolsPage,
  SyncVsAsyncPage,
  GeneratorsPage,
  SpreadAndRestPage,
  CopyObjectsPage,
  PrototypesPage,
  WhatIsOOPPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CSSNestingPage /> },
      { path: "/css-nesting", element: <CSSNestingPage /> },
      { path: "sync-vs-async", element: <SyncVsAsyncPage /> },
      { path: "event-loop", element: <EventLoopPage /> },
      { path: "jwt-token", element: <JWTTokenPage /> },
      { path: "callbacks", element: <CallbacksPage /> },
      { path: "promises", element: <PromisesPage /> },
      { path: "async-await", element: <AsyncAwaitPage /> },
      { path: "generators", element: <GeneratorsPage /> },
      { path: "what-is-oop", element: <WhatIsOOPPage /> },
      { path: "prototypes", element: <PrototypesPage /> },
      { path: "spread-operator", element: <SpreadAndRestPage /> },
      { path: "copy-objects", element: <CopyObjectsPage /> },
      { path: "classes", element: <ClassesPage /> },
      { path: "symbols", element: <SymbolsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
