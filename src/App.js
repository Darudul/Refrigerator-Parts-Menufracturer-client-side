import "./App.css";
import Header from "./Pages/Shared/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./LoginSignup/Login/Login";
import SignUp from "./LoginSignup/SignUp/SignUp";
import RequireAuth from "./LoginSignup/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer";
import MyPortFolio from "./Pages/Blogs/MyPortFolio/MyPortFolio";
import Port from "./Pages/Blogs/MyPortFolio/Port";
import LiveWebsite from "./Pages/Blogs/MyPortFolio/LiveWebsite";
import NotFound from "./Pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PurchaseOrder from "./PurchaseOrder/PurchaseOrder";
import DashBoard from "./Pages/DashBoard/DashBoard";
import MyOrders from "./Pages/DashBoard/MyOrders";
import AddReview from "./Pages/DashBoard/AddReview";
import MyProfile from "./Pages/DashBoard/MyProfile";
import ManageAllOrders from "./Pages/DashBoard/ManageAllOrders";
import AddProduct from "./Pages/DashBoard/AddProduct";
import ManageProduct from "./Pages/DashBoard/ManageProduct";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./LoginSignup/Login/RequreAdmin";
import Payment from "./Pages/DashBoard/Payment";
import Welcome from "./Pages/DashBoard/Welcome";
import MyPortfolio2 from "./Pages/MyPortfolio2/MyPortfolio2";

// private to public

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="purchaseorder"
          element={<PurchaseOrder></PurchaseOrder>}
        ></Route>
        <Route
          path="purchaseorder/:Id"
          element={
            <RequireAuth>
              <PurchaseOrder></PurchaseOrder>
            </RequireAuth>
          }
        ></Route>
        <Route path="myportfolio2" element={<MyPortfolio2 />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <Welcome></Welcome>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="myorder"
            element={
              <RequireAuth>
                <MyOrders></MyOrders>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="review"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="alluser"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="manageallorder"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addnewitem"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>{" "}
        </Route>

        <Route
          path="about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />}>
          <Route index element={<Port></Port>}></Route>
          <Route
            path="myportfolio"
            element={<MyPortFolio></MyPortFolio>}
          ></Route>
          <Route path="livelink" element={<LiveWebsite></LiveWebsite>}></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
