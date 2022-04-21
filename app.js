const expresss = require('express')
require('dotenv').config()
const booksRouter=require('./routes/books')
const genRouter  = require('./routes/genre')
const app = expresss()
const connectDB= require('./db/connect')
app.use(expresss.json())
app.use('/api/v1/genre',genRouter)
app.use('/api/v1/books',booksRouter)
const port = process.env.PORT || 2300

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }

}
start()