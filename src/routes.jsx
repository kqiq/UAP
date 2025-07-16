import { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

// Lazy-loaded components
const Dashboard = lazy(() => import("./app/dashboard"));
// const News = lazy(() => import("./app/dashboard/news"));
// const Market = lazy(() => import("./features/cc/market"));

//test
// import { CardsPaymentMethod } from "./components/payments/pay";
// // import LoginPage from "./app/auth/page";
// import Login from "./app/auth/login";
// import { CardsChat } from "./components/chat/chat";
// //import CryptoControlCenter from "./features/cc/CryptoControlCenter";
// import CryptoStockControlCenter from "./app/cc/CryptoControlCenter";
// import Signup from "./app/auth/signup";
// import LogicBuilderPanel from "./app/cc/logicBuilder";
// import HomeDashboard from "./app/cc/home";
// import Unichart from "./app/chart/unichart";
// // import SuperChart from "./features/chart";
// // import ChartPage from "./app/dashboard/chart";

// // visuals debug 
// import { CryptoStockVisualDashboard } from "./app/advanceVisuals/adv";
// import { AdvNewsExample } from "./app/advanceVisuals/adv.news";
// import { CountDownTimer, convertToSeconds } from "./app/advanceVisuals/countdown_timer_widget";
// import FearGreedIndex from "./app/advanceVisuals/fearGreed";
// import GoldenHour from "./app/advanceVisuals/goldenhour";
// import { SpotlightSliderDemo } from "./app/advanceVisuals/slider";
// import MoodTracker from "./app/advanceVisuals/moods";
// import MoodTrackerEnhanced from "./app/advanceVisuals/moodsEnhanced";
// import VoiceWaveExample, { VoiceWaveAnimation } from "./app/advanceVisuals/voice";
// import { ComprehensiveDemo, Demo } from "./app/advanceVisuals/vx/gradient";
// import { CurvesDemo } from "./app/advanceVisuals/vx";
// import ResistantChart from "./app/advanceVisuals/vx/wid/resistant";




function Test() {
  return <Outlet/>;
}

function Test2() {
  return "this is test 2 ljsdlfj ";
}

const NotFoundPage = () => {
  return "not found";
};

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Route */}
      <Route path="/" element={<Dashboard />}>
        {/* Index Route (default child route) */}
        <Route index element={<Dashboard />} />



        {/* Settings */}
        <Route path="dash" element={<Test2 />} />


        <Route path="*" element={<NotFoundPage />} />
      </Route>


    </>,
  ),
);

