import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import { EnvironmentsEnum } from "@multiversx/sdk-dapp/types";
import { Unlock } from "./pages/Unlock";
import { HomePage } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Nav } from "./components/Nav.tsx";
import { TransactionsToastList } from "@multiversx/sdk-dapp/UI/TransactionsToastList/TransactionsToastList";
import {
  NotificationModal,
  SignTransactionsModals,
} from "@multiversx/sdk-dapp/UI";
import "./App.css";

function App() {
  return (
    <DappProvider
      environment={EnvironmentsEnum.devnet}
      customNetworkConfig={{
        name: "[dappName]Config",
        walletConnectV2ProjectId: "9b1a9564f91cb659ffe21b73d5c4e2d8",
      }}
    >
      <Router>
        <Nav />
        <TransactionsToastList />
        <NotificationModal />
        <SignTransactionsModals />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/unlock" element={<Unlock />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </DappProvider>
  );
}

export default App;
