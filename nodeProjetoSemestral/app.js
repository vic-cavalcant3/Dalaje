const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');


// Dados iniciais das vendas
const vendas = [
    {
        id: '0',
        peca: "Camisa",
        preco: "79.90",
        data_Venda: "2023-11-10"
    }
]

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.json());
app.use(express.urlencoded({extended:false}));


const conexao = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'senai',
	database:'dalaje'
});

conexao.connect(function(erro){
	if(erro) throw erro;
	console.log('Conexão efetuada com sucesso!');
});


// Rota principal - Home
app.get("/", function (req, res) {
    res.render("home", {
        data: vendas
    })
})

// Rota para visualizar dados em formato JSON
app.get("/json", (req, res) => {
    res.status(200).json(vendas);
});

// Rota para a página de atualização
app.get("/atualizar", (req, res) => {
    res.render("atualizar", {
        data: vendas
    });
});

// Rota para a página de adicionar
app.get("/adicionar", (req, res) => {
    res.render("adicionar", {
        data: vendas
    });
});

// Adicionar uma nova venda
app.post("/", (req, res) => {
    let id = req.body.id
    let peca = req.body.peca
    let preco = req.body.preco
    let data_Venda= req.body.data_Venda

    vendas.push({
        id: id,
        peca: peca,
        preco: preco,
        data_Venda:data_Venda
    })

// SQL
let sql = `INSERT INTO controle_de_vendas (id, peca, preco, data_Venda) VALUES ('${id}', '${peca}', '${preco}', '${data_Venda}')`;
        
// Executar comando SQL
conexao.query(sql, function(erro, retorno){
 // Caso ocorra algum erro
 if(erro) throw erro;
    console.log(retorno);


    res.render("home", {
        data: vendas
    })
})
})

// Deletar uma venda
/*app.post('/delete', (req, res) => {
    const requestedId = req.body.id;
    const index = vendas.findIndex(venda => venda.id === requestedId);
    if (index !== -1) {
        vendas.splice(index, 1);
    }
    res.render("home", {
        data: vendas
    });
});*/

app.post('/delete', (req, res) => {

    var requestedid = req.body.id;
    var j = 0;
    vendas.forEach(user => {
        j = j + 1;
        if (user.id === requestedid) {
            vendas.splice((j - 1), 1)
        }


   // SQL
   let sql = `DELETE FROM controle_de_vendas WHERE id = ${req.body.id}`;

   // Executar o comando SQL
   conexao.query(sql, function(erro, retorno){
   // Caso falhe o comando SQL
       if(erro) throw erro;

       res.render("home", {
        data: vendas
    })
   
        })
    })
})



// Atualizar uma venda
/*app.post('/update', (req, res) => {
    const inputId = req.body.id;
    const inputPeca = req.body.peca;
    const inputPreco = req.body.preco;
    const inputDataVenda = req.body.dataVenda;

    const venda = vendas.find(venda => venda.id === inputId);
    if (venda) {
        venda.peca = inputPeca;
        venda.preco = inputPreco;
        venda.dataVenda = inputDataVenda;
    }*/

    /*res.render("home", {
        data: vendas
    });
});*/

/*app.post('/update', (req, res) => {
    let id = req.body.id
    let peca = req.body.peca
    let preco= req.body.preco
    let data_Venda = req.body.data_Venda
    
    var j = 0;
    vendas.forEach(user => {
        j = j + 1;
        if (user.id === id) {
            user.peca = peca
            user.preco = preco
            user.data_Venda = data_Venda
        }
    })

    // SQL
    let sql = `UPDATE produtos SET id='${id}', peca='${peca}', data_Venda='${data_Venda}' WHERE id=${req.body.id}`;
    
    // Executar comando SQL
    conexao.query(sql, function(erro, retorno){
    // Caso falhe o comando SQL
        if(erro) throw erro;

    res.render("home", {
        data: vendas
    })
})
})*/

app.post('/update', (req, res) => {
    const id = req.body.id;
    const peca = req.body.peca;
    const preco = req.body.preco;
    const data_Venda = req.body.data_Venda;

    // Atualizar no array local
    const index = vendas.findIndex(user => user.id === id);
    if (index !== -1) {
        vendas[index].peca = peca;
        vendas[index].preco = preco;
        vendas[index].data_Venda = data_Venda;
    }

    // Atualizar no banco de dados
    const sql = `UPDATE controle_de_vendas SET peca = ?, preco = ?, data_Venda = ? WHERE id = ?`;
    conexao.query(sql, [peca, preco, data_Venda, id], function (erro) {
        if (erro) {
            console.error("Erro ao atualizar no banco:", erro);
            res.status(500).send("Erro ao atualizar no banco.");
            return;
        }

        res.render("home", {
            data: vendas
        });
    });
});





app.listen(7000, () => {
    console.log("Servidor rodando na porta 7000");
});
