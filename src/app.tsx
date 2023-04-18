import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/index';
import NoPage from './pages/noPage'
import PageContainer from "./components/PageContainer"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<PageContainer/>}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<NoPage />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

