import { ADD_HOUSE, DELETE_HOUSE } from "../consts/actionTypes";
export const addHouse = (newHouse) => {
  return {
    type: ADD_HOUSE,
    payload: newHouse,
  };
};

export const deleteHouse = (id) => {
  return {
    type: DELETE_HOUSE,
    payload: id,
  };
  
};
