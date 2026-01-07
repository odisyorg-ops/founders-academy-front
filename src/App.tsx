import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Sdr from "./pages/Sdr";
import Bdm from "./pages/Bdm";
import Am from "./pages/Am";
import Consultancy from "./pages/Consultancy";
import FinancialM from "./pages/FinancialM";
import Accountancy from "./pages/Accountancy";
import Coaching from "./pages/Coaching";
import Mentorship from "./pages/Mentorship";
import RequestCall from "./pages/RequestCall";
import Resources from "./pages/Resources";
// import Checkout from "./pages/Checkout";
import Fitness from "./pages/Fitness";
import Recruitment from "./pages/Recruitment";
import Ecommerce from "./pages/Ecommerce";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CheckoutElement from "./pages/CheckoutElement";
import Success from "./pages/Success";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sdr" element={<Sdr />} />
              <Route path="/bdm" element={<Bdm />} />
              <Route path="/am" element={<Am />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/financial" element={<FinancialM />} />
              <Route path="/accountancy" element={<Accountancy />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/checkout" element={<CheckoutElement/>} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/request" element={<RequestCall />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/success" element={<Success />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
