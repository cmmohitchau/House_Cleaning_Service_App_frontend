import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes";
import { Provider } from "react-redux";
import store from "../store/store";
import { Navbar } from "@/components/layout/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            <RoutesConfig />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
