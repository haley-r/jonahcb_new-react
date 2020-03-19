import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//each component sends value to individual reducer with unique action type
const showMenu = (state = true, action) => {
    if (action.type==='SET_MENU'){
        return action.payload;
    }
    return state;
}

const showContent = (state = true, action) => {
    if (action.type === 'SET_CONTENT') {
        return action.payload;
    }
    return state;
}

//store gives access to state of all reducers
//logger gives nice console logs, doesn't change functionality of app
const storeInstance = createStore(
    combineReducers({
        showMenu,
        showContent
    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

