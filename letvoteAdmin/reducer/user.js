
const userReducer = (state, action) => {
	switch (action.type) {
    	case "SET_USER":
			localStorage.setItem('user', JSON.stringify(action.user))
			return {...state, user: action.user}
		default:
			return state
	}
}

export default userReducer