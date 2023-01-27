export const addUserAction = (user) => {
    return {type:"Add_user",payload:user}
}

export const updateUserAction = (newuser) => {
    return {type:"updateUser",payload:newuser}
}

export const deleteUserAction = (id) => {
    return {type:"deleteUser",payload:id}
}