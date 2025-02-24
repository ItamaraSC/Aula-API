const express = require('express');
const app = express();
const port = 3000;

// Adiciona o middleware ao express permitindo que o server entenda as requisições
app.use(express.json());

let usuarios = [
    {id : 1, nome : 'Joao' , idade : 25},
    {id : 2, nome : 'Carlos' , idade : 24},
    {id : 3, nome : 'Cesar' , idade : 24},
    {id : 4, nome : 'Paulo' , idade : 19},
    {id : 5, nome : 'Antonio' , idade : 40},
    {id : 6, nome : 'Mariana', idade: 27},  
    {id : 7, nome : 'Lucas', idade: 24},  
    {id : 8, nome : 'Fernanda', idade: 29},  
    {id : 9, nome : 'Rafael', idade: 31},  
    {id : 10, nome : 'Camila', idade: 26},  
    {id : 11, nome : 'Gustavo', idade: 23},  
    {id : 12, nome : 'Beatriz', idade: 32},  
    {id : 13, nome : 'Eduardo', idade: 28},  
    {id : 14, nome : 'Sofia', idade: 21},  
    {id : 15, nome : 'Thiago', idade: 33}  
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = usuarios.length + 1;
    usuarios.push(usuario);
    res.send(`Usuário ${usuario.nome} criado com sucesso`);
});

app.put('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    const usuario = req.body;
    const index = usuarios.findIndex(u => u.id == id);
    if (index != -1) {
        usuarios[index] = {id: Number(id), ...usuario};
        res.send(`Usuário ${usuario.nome} atualizado com sucesso`);
    } else {
        res.status(404).send(`Usuário com id ${id} não encontrado`);
    }
});
app.delete('/usuarios/:id', (req,res) => {
    const {id} = req.params;
    const index= usuarios.findIndex(u => u.id ==id);
    if (index!= -1) {
        usuarios.splice(index, 1);
        res.send(`Usuário ${id} excluído com sucesso`);

    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
