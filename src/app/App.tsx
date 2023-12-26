import { Advantages } from 'entities/Advantages';
import { Header } from 'entities/Header';
import { Solution } from 'entities/Solution';
import { Statistics } from 'entities/Statistics';

const App = () => {
    return (
        <div className="app">
            <div className="main-bg-wrapper">
                <Header />
                <Solution />
            </div>
            <Advantages />
            <Statistics />
        </div>
    )
}

export default App;
