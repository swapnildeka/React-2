import { createContext } from "react";

const UserContext = createContext(
    {user :{
        name:"Dummy name",
        email:"Dummy email",

}});
export default UserContext;