export default(state,action)=>{
    switch(action.type){
        case 'Remove-user':
            return{
                users:state.users.filter( user => {
                    return user.id !==action.payload
                })
            }
            case 'add-user':
                return{
                    users:[action.payload,...state.users]
                }
            case 'edit-user':
                const updateuser=action.payload;
                const updateusers=state.users.map(user =>{
                    if(user.id===updateuser.id){
                        return updateuser
                    }
                    return updateusers
                } )    
                return{
                    users:updateusers
                }
    default:
        return state    
    }
}