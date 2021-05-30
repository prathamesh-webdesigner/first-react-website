const redux = require('redux'); //Call Redux
const createStore = redux.createStore; //Create Store 
const combineReducers = redux.combineReducers; //combine Reducers

const initialStateBook = {
    numberOfBook: 10,
}
const initialStatePen = {
    numberOfPen: 15
}
const initialStatePencil = {
    numberOfPencil: 20
}
//action creator: wrapping the action in a single function 
function buyBook() {
    return {
        //action
        type: "Buy_Book",
        info: "My First Redux code"
    }
}
function buyPen() {
    return {
        //action
        type: "Buy_Pen",
        info: "My First Buy pen"
    }
}
function buyPencil() {
    return {
        type: "Buy_Pencil",
        info: "My First Buy Pencil"
    }
}
//(prevState, action) => newState

const BookReducer = (state = initialStateBook, action) => {
    switch (action.type) {
        case "Buy_Book": return {
            ...state,
            numberOfBook: state.numberOfBook - 1
        }
        default: return state;
    }
}

const PenReducer = (state = initialStatePen, action) => {
    switch (action.type) {
        case "Buy_Pen": return {
            ...state,
            numberOfPen: state.numberOfPen - 2
        }
        default: return state;
    }
}

const PencilReducer = (state = initialStatePencil, action) => {
    switch (action.type) {
        case "Buy_Pencil": return {
            ...state,
            numberOfPencil: state.numberOfPencil - 3
        }
        default: return state;
    }
}

const Reducer = combineReducers({
    Book: BookReducer,
    Pen: PenReducer,
    Pencil: PencilReducer
});

const store = createStore(Reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => { console.log('Updated state value', store.getState()) });
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPencil());
store.dispatch(buyPencil());
unsubscribe();