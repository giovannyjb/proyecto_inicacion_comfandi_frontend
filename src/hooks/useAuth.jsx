import { useState } from "react";
import { createContext } from "react";
import { saveValue, wipeValue} from "../common/storage.js"

export const AuthContext = createContext({
    signIn: () => console.warn("no auth provider"),
    signOut: () => console.warn("no auth provider"),
    getUser: {
        isLogin: undefined,
        email: "",
        token: "",
    }
});

export const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState({
        isLogin: undefined,
        email: "",
        token: ""
    });

    const contextValue = {
        signIn: (email, token) => {
            const data = { email, token };
        
            setAuthState({ isLogin: true, ...data });

            saveValue("authSession", data);
        },
        signOut: () => {
            setAuthState({ isLogin: false, email: "", token: "" });
            wipeValue();
        },
        getUser: authState,
    }

    return (<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>)


}