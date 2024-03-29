import { Advantages } from 'entities/Advantages';
import { Advice } from 'entities/Advice';
import { Contact } from 'entities/Contact';
import { Footer } from 'entities/Footer';
import { Header } from 'entities/Header';
import { Logos } from 'entities/Logos';
import { Socials } from 'entities/Socials';
import { Solution } from 'entities/Solution';
import { Statistics } from 'entities/Statistics';
import { Subscribe } from 'entities/Subscribe';
import { Support } from 'entities/Support';
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
            <Logos />
            <Subscribe />
            <Support />
            <Contact />
            <Footer />
            <Socials />
        </div>
    )
}

export default App;
