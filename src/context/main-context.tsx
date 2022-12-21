import * as React from 'react';

type MainContextType = {
    profilePicture: string | undefined,
    setProfilePicture: React.Dispatch<React.SetStateAction<undefined>>;
};

const MainContext = React.createContext<MainContextType | undefined>(undefined);
export default MainContext;
