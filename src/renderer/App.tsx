import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InformationCards from './InformationCards';

const Main = () => {
    return (
        <div className="main">
            <InformationCards />
        </div>
    );

};

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}
