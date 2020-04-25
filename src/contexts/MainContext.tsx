import React, {createContext, FC} from 'react';

interface MainContext {
  logged: boolean,
  setLogged(idLogin: boolean): void,
}

const MainContext = createContext<MainContext>({} as MainContext);

export const MainProvider: FC = ({children}) => {
  const [logged, setLog] = React.useState(false);

  function login(isLogin: boolean){
    setLog(isLogin);
  }

  return(
    <MainContext.Provider value={{logged, setLogged:login}} >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;