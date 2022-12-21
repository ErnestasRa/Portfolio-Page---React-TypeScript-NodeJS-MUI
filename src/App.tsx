import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from 'context/main-context';
import MyHobbies from 'pages/my-hobbies';
import MainPage from './pages/main-page';

const App: React.FC = () => {
  const [profilePicture, setProfilePicture] = React.useState(undefined);
  const profilePic = React.useMemo(() => ({ profilePicture, setProfilePicture }), []);

return (
  <MainContext.Provider value={profilePic}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hobbies" element={<MyHobbies />} />
      </Routes>
    </BrowserRouter>
  </MainContext.Provider>
  );
};
export default App;
