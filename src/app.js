const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')

const app=express();


//conected to data base
mongoose.connect('mongodb://baltamar3:Eduardo1234@ds125073.mlab.com:25073/crud-database',{useMongoClient: true})

//import routes
const routes=require('./routes/routes.js')

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))



app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',routes)


//starting server
app.listen(app.get('port'), ()=>{
	console.log(`server running in port : ${app.get('port')}`)
})