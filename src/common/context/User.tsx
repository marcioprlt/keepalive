import { createContext, useState } from "react";

export const UserContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);
UserContext.displayName = "User Context";

export const UserProvider = ({children}: any) => {
    const [name, setName] = useState("");

    return (
        <UserContext.Provider value={[name, setName]}>
            {children}
        </UserContext.Provider>
    )
}