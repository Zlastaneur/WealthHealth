import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
};

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.data.push(action.payload)
        },
        initMockEmployees:(state, action) => {
            console.log(action.payload);
            state.data = [...action.payload];
        }
    },
})

export const { addEmployee, initMockEmployees } = employeesSlice.actions
export default employeesSlice.reducer