import { BrowserRouter } from 'react-router-dom';
import {
    createReactClient,
    LivepeerConfig,
    studioProvider,
} from '@livepeer/react';
import Header from './components/elements/Header/Header';
import Sidebar from './components/elements/Sidebar/Sidebar';
import AppRouter from './AppRouter';

const livePeerClient = createReactClient({
    provider: studioProvider({
        apiKey: 'c81b033a-37ed-4cf2-989b-6f83f1747b09',
    }),
});

function App() {
    console.log(localStorage.getItem('address'));
    return (
        <BrowserRouter>
            <LivepeerConfig client={livePeerClient}>
            <Header />
            <main>
                <Sidebar />
                <AppRouter />
            </main>
            </LivepeerConfig>
        </BrowserRouter>
    );
}

export default App;
