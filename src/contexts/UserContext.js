import React, { createContext } from "react";

export const UserContext=createContext()
class UserContextProvider extends React.Component{
    state={
        selectedUser:{}
    }

    changeUser=(user)=>{
        this.setState({selectedUser:user})
        console.log("Current User",this.state.selectedUser);
    }
    render(){
        return(
            <UserContext.Provider value={{selectedUser:this.state.selectedUser,changeUser:this.changeUser}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
export default UserContextProvider