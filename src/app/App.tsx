import { Advantages } from 'entities/Advantages';
import { Advice } from 'entities/Advice';
import { Header } from 'entities/Header';
import { Solution } from 'entities/Solution';
import { Statistics } from 'entities/Statistics';
import { Who } from 'entities/Who';

const App = () => {
    return (
        <div className="app">
            <div className="main-bg-wrapper">
                <Header />
                <Solution />
            </div>
            <Advantages />
            <Statistics />
            <Advice />
            <Who />
        </div>
    )
}

export default App;
