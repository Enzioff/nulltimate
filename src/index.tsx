import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "/src/0_app/provider";
// import {init} from "@telegram-apps/sdk";
import "./0_app/styles/index.scss"
import App from "./0_app/App.tsx";

// init()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
