import React,{createContext, useReducer} from 'react'
import userReducer from '../reducer/user'

const storeItem = localStorage.getItem("user")
const initialValues = {
	user : storeItem ? storeItem.user : false
}

export const GlobalContext = createContext()
export const DispatchContext = createContext()

export const GlobalStateProvider = (props) => {

	const [state, dispatch] = useReducer(userReducer, initialValues)

	return <GlobalContext.Provider value={state}>
		<DispatchContext.Provider value={dispatch}> 
			{props.children}
		</DispatchContext.Provider>
	</GlobalContext.Provider>
}