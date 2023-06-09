const { createSlice } = require("@reduxjs/toolkit")

const initialBooks = {
    books:[
        {id:1,title:"Love Bangladesh",author:"khairul Islam"},
        {id:2,title:"Love B.Baria",author:"Nasir Uddin"},
        {id:3,title:"Love Bogura",author:"Sultan Ahmed"},
    ]
}

export const booksSlice = createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload);
        },
        deleteBook:(state,action)=>{
            const id = action.payload;
            state.books=state.books.filter((book)=>book.id!==id);
        }
    }
})

export const {showBooks,addBook,deleteBook} = booksSlice.actions;
export default booksSlice.reducer;