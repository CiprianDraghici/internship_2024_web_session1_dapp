import { useNavigate } from "react-router-dom";
import {
  ExtensionLoginButton,
  ExtensionLoginButtonPropsType,
  LedgerLoginButton,
  LedgerLoginButtonPropsType,
  OperaWalletLoginButtonPropsType,
  WalletConnectLoginButton,
  WalletConnectLoginButtonPropsType,
  WebWalletLoginButton,
  WebWalletLoginButtonPropsType,
} from "@multiversx/sdk-dapp/UI";

type CommonPropsType =
  | OperaWalletLoginButtonPropsType
  | ExtensionLoginButtonPropsType
  | WebWalletLoginButtonPropsType
  | LedgerLoginButtonPropsType
  | WalletConnectLoginButtonPropsType;

export const Unlock = () => {
  const navigate = useNavigate();
  const commonProps: CommonPropsType = {
    callbackRoute: "/dashboard",
    nativeAuth: true,
    onLoginRedirect: () => {
      navigate("/dashboard");
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex flex-col p-6 items-center justify-center gap-4 rounded-xl bg-[#f6f8fa]"
        data-testid="unlockPage"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl">Login</h2>

          <p className="text-center text-gray-400">Choose a login method</p>
        </div>

        <div className="flex flex-col md:flex-row">
          <WalletConnectLoginButton
            loginButtonText="xPortal App"
            {...commonProps}
          />
          <LedgerLoginButton loginButtonText="Ledger" {...commonProps} />
          <ExtensionLoginButton
            loginButtonText="DeFi Wallet"
            {...commonProps}
          />
          <WebWalletLoginButton {...commonProps} />
        </div>
      </div>
    </div>
  );
};
