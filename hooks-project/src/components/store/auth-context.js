import React,{useState,useEffect} from "react";
const AuthContext = React.createContext({
    isLoggedIn: false  ,
    onLogout:()=>{},
    onLogin:(email,password)=>{},
    
});

export const AuthContectProvide=(props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storeduser= localStorage.getItem("isLoggedIn")
        if(storeduser==="1"){
          setIsLoggedIn(true)
        }
        
      },[])

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn","0")
  };

  return(
      <AuthContext.Provider value ={{
          isLoggedIn:isLoggedIn,
          onLogin:loginHandler,
          onLogout:logoutHandler
      }}>
          {props.children}
      </AuthContext.Provider>
  )
}
export default AuthContext;