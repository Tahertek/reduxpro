import { ADD_HOUSE, DELETE_HOUSE } from "../consts/actionTypes";

const inistialState = {
  houses: [],
};
const Reducers = (state = inistialState, action) => {
  switch (action.type) {
    case ADD_HOUSE:
      return { ...state, houses: [...state.houses, action.payload] };

    case DELETE_HOUSE:
      return {
        ...state, 
        houses: state.houses.filter((house) => house.id !== action.payload),
      };
    default:
      return state;
  }
};
export default Reducers;
