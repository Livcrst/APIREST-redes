const express = require('express');
const app = express();
const data = require('./data.json');
const listClients = [];

app.use(express.json());

app.get('/clients', function(req, res){

    res.json(data);

});

app.get('/clients/:id',function(req,res){
    const {id} = req.params
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(404).json(); //operação ternária

    res.json(client);
});


app.post('/clients',function(req,res){
    const { name, email} = req.body;

    // Salvar os dados do clientes

    listClients.push({name:name,email:email});
    console.log(listClients);

    res.json({name, email});


});


app.put('/clients/:id',function(req,res){

    const {id} = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(404).json(); //operação ternária


    const {name} = req.body;
    client.name = name;

    res.json(client);



});


app.delete('/clients/:id',function(req,res){
    const {id} = req.params;
    const clientsFiltered = data.filter(cli => cli.id != id);

    res.json(clientsFiltered);



});



app.listen(3000,function() {
    console.log('Server running')
});

