import React, { useContext } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { DarkModeContext } from "./context/darkModeContext";
import AllBooks from "./pages/allBooks/AllBooks";
import UserDetailsVIewPg from "./pages/UserDetailsViewpg/UserDetailsVIewPg";
import DetailsBookTab from "./pages/allBooks/DetailsBookTab";
import AddCategory from "./pages/addCategory/AddCategory";
import AddBooks from "./pages/addBooks/AddBooks";
import AddBookBanners from "./pages/addBookBanners/AddBookBanners";
import AddAudioBooks from "./pages/addAudioBooks/AddAudioBooks";
import AddNewAudioBook from "./pages/addAudioBooks/AddNewAudioBook";
import AudioBookDetailsPg from "./pages/addAudioBooks/AudioBookDetailsPg";
import PaymentsPlans from "./pages/paymentPlans/PaymentsPlans";
import AddPaymentPlan from "./pages/paymentPlans/AddPaymentPlan";
import AddPaymentPlanDetails from "./pages/paymentPlans/AddPaymentDetailspg";
import PromoCodes from "./pages/PromoCodes/PromoCodes";
import CancelledUser from "./pages/cancelledUser/CancelledUser";
import ConatactPage from "./pages/contactPage/ConatactPage";
import AccountSettings from "./pages/accountSettings/AccountSettings";
import Map from "./pages/map/Map";
import Series from "./pages/series/Series";
import CancelledUSerDetails from "./pages/cancelledUser/CancelledUserDetails";
import AddAudioCategory from "./pages/addaudiocategory/AddAudioCategory";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
console.log(userData)
  return (  
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      
      
        <Routes>
          {/* Redirect to Dashboard if userData exists */}
          {userData && <Route path="/" element={<Navigate to="/Dashboard" />} />}
          
          {/* Login Route - Only accessible when userData does not exist */}
          {!userData && <Route path="/" element={<Login />} />}

          {/* Protected Routes */}
          {userData && (
            <Route>
              <Route path="/Dashboard" element={<Home />} />
              <Route path="/users" element={<List />} />
              <Route path="/all-books" element={<AllBooks />} />
              <Route path="/users/view-details" element={<UserDetailsVIewPg />} />
              <Route path="/users/cancel-user-details" element={<CancelledUSerDetails />} />
              <Route path="/Dashboard/add-audio-category" element={<AddAudioCategory/>} />
              <Route path="/all-books/book-details" element={<DetailsBookTab />} />
              <Route path="/Dashboard/add-category" element={<AddCategory/>} />
              <Route path="/Dashboard/add-new-books" element={<AddBooks/>} />
              <Route path="/Dashboard/add-book-banners" element={<AddBookBanners/>} />
              <Route path="/Dashboard/add-audio-books" element={<AddAudioBooks/>} />
              <Route path="/Dashboard/add-audio-books/add-new-audio-book-add" element={<AddNewAudioBook/>} />
              <Route path="/Dashboard/add-audio-books/audio-book-details" element={<AudioBookDetailsPg/>} />
              <Route path="/Dashboard/payment-plans" element={<PaymentsPlans/>} />
              <Route path="/Dashboard/payment-plans/add-payment-plan" element={<AddPaymentPlan/>} />
              <Route path="/Dashboard/payment-plans/payment-plan-details" element={<AddPaymentPlanDetails/>} />
              <Route path="/Dashboard/promo-codes" element={<PromoCodes/>} />
              <Route path="/Dashboard/cancelled-user" element={<CancelledUser/>} />
              <Route path="/Dashboard/contact-us" element={<ConatactPage/>} />
              <Route path="/Dashboard/account-settings" element={<AccountSettings/>} />
              <Route path="/Dashboard/map" element={<Map/>} />
              <Route path="/Dashboard/series" element={<Series/>} />
              
              <Route path="/single/:id" element={<Single />} />
            </Route>
          )}
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
