import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Toaster} from 'react-hot-toast'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}><Toaster/>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
