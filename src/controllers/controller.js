const mysql =require('mysql')

const conenection=mysql.createConnection({
	host:'localhost',
	user:'admin',
	password: '',
	database: 'crudNode'
})
