import React from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch,useSelector } from "react-redux";
import { deleteHouse } from "../actions";
import { Card } from "@material-ui/core";


const CardHouse = () => {
 const c= useSelector(state=>state.Reducers.houses)
 
  const dispatch = useDispatch();

  return (
  
    <Card>
      {console.log(c)}
      {c.map((house) => {
        return (
         
            <CardContent key={house.id}>
              
              <Typography
              
                color="textSecondary"
                gutterBottom
              >
                {house.house}
              </Typography>
              <Typography variant="h5" component="h2">
                {house.name}
              </Typography>
              <Typography color="textSecondary">
                {house.note}
              </Typography>
              <button onClick={() => dispatch(deleteHouse(house.id))}>
                {" "}
                Delete
              </button> 
              <button onClick={() => dispatch(deleteHouse(house.id))}>
                {" "}
                Edit
              </button>
</CardContent>
              

          );
        })}
    </Card>
    );
  };

// const mapStateToProps = (state) => {
//   return {
//     house: state.AppReducers.houses,
//   };
// };
export default (CardHouse);
