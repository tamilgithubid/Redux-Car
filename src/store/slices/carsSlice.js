import {createSlice,nanoid} from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name:'cars',
    initialState:{
        searchTerm:'',
        data:[]
    },
    reducers:{
        changeTerm(state,action){
            state.term=action.payload;
            
        },
         addCar(state,action){
            //directly connect formSclice...
            //Assumption:
            //action.payload ==={name:"TTF",cost:644}

            state.data.push({
               name:action.payload.name,
               cost:action.payload.cost,
               id:nanoid(),
            })
        },
        removeCar(state,action){
             //directly connect formSclice...
            //Assumption:
            //action.payload ===  the id of the car we want remove
           const updated=state.data.filter((car)=>{
            return  car.id !== action.payload

           }) 
           state.data=updated;

        }
    }
});

export  const {changeSearchTerm,addCar,removeCar}=carsSlice.actions;
export const carsReducer = carsSlice.reducer;