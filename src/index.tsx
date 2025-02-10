import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router";
import {store} from "/src/0_app/provider";
import App from "./0_app/App.tsx";
import "./0_app/styles/index.scss"
import {initTelegramAPI} from "/src/5_shared/config";

// initTelegramAPI()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
