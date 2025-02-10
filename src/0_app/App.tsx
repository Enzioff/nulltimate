import {AppRouter} from "/src/0_app/provider";
import {BottomMenu, Header} from "/src/2_widgets";

function App() {
    return (
        <div className="App">
            <Header />
            <AppRouter />
            <BottomMenu />
        </div>
    )
}

export default App
