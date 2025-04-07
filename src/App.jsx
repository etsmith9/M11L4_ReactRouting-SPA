import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';
import NavigationBar from './components/NavigationBar';
import Stories from './components/Stories';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseCharacters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
