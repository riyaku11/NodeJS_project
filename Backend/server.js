const app = require("./app")

const connectDatabase = require("./config/database");

//connecting database
connectDatabase();

const PORT=4500;

const server = app.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`);
})
