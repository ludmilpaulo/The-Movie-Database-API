import React, { useContext, useReducer, useEffect, useState } from 'react';

interface User{
        "user_id": number;
        "username": string
        "message": string;
        "status": number;
    }

interface IProps {
children: React.ReactNode;
}




// Create a context
const AuthContext = React.createContext({});


const AuthProvider = ({ children } : IProps) => {
  const [auth, setAuthState] = useState<any>({});

  

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
   
      const authData = await JSON.parse(window.localStorage.getItem("user") || "") 
   
     // const authData = JSON.parse(authDataString || {});
  
      setAuthState(authData);
 
    
  };

  // Set current auth state in AsyncStorage 
  useEffect(() => {
    getAuthState();
  
  }, [auth]);

  return (
    <AuthContext.Provider value={{auth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
