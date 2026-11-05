// Importando as bibliotecas
const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');

// Criando a conexão com o banco:
const app = express();
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);
const jogos = client.db('catalogo_games').collection('jogos');

// Criando os métodos HTTP:
app.post('/jogos',async(req,res)=>{
    const novoJogo = await jogos.insertOne(req.body);
    res.status(201).json(novoJogo);
});

app.get('/jogos',async(req,res)=>{
    const listaJogos = await jogos.find().toArray();
    res.json(listaJogos);
});

app.get('/jogos/:id',async(req,res)=>{
    const jogoEspecifico = await jogos.findOne({_id:new ObjectId(req.params.id)});
    res.json(jogoEspecifico);
});

app.put('/jogos/:id',async(req,res)=>{
    const jogoAtualizado = await jogos.updateOne({_id:new ObjectId(req.params.id)},{$set: req.body});
    res.json(jogoAtualizado);
});

app.delete('/jogos/:id',async(req,res)=>{
    const jogoDeletado = await jogos.deleteOne({_id: new ObjectId(req.params.id)});
    res.json(jogoDeletado);
});

client.connect()
    .then(()=>{
        console.log('CONECTADO AO MONGODB'),
        app.listen(3000,()=>console.log('API RODANDO NA PORTA 3000'))
    })
    .catch((erro)=>console.log('ERRO AO CONECTAR',erro.message))