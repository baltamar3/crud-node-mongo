const express=require('express')
const routes=express.Router()
const bodyParser=require('body-parser')
const person=require('../../database/modeloTarea')

routes.get('/',async(req,res)=>{
	const personas=await person.find()
	res.render('index',{
		personas: personas
	})
})

routes.post('/add',(req,res)=>{
	const p=new person(req.body)
	console.log(p)
	p.save(function (err) {
  		if (err) return handleError(err);
  		// saved!
	})
	res.redirect('/')
})

routes.get('/delete/:id', async(req,res)=>{
	const {id}= req.params
	await person.remove({_id: id})
	res.redirect('/')
	//res.send('resivido')
})

module.exports=routes