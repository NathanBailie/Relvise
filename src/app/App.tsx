import { Header } from 'entities/Header';
import { Solution } from 'entities/Solution';

const App = () => {
    return (
        <div className="app">
            <div className="main-bg-wrapper">
                <Header />
                <Solution />
            </div>
        </div>
    )
}

export default App;
