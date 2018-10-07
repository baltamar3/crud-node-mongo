const mongoose=require('mongoose')
const personSchema=mongoose.Schema({
	nombre: String,
	tel: String
})

module.exports=mongoose.model('person',personSchema)