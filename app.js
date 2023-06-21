let cliente = {
    nomeFantasia:[],
    telefone:[]
}

var p = window.document.getElementsByTagName('p')[0]
var r = document.getElementsByTagName('p')[1]


let n = document.getElementById('nome')


function cadastro(){

    let n = document.getElementById('nome').value
    let ler = cliente.nomeFantasia.indexOf(n)

    if (ler >= 0){
        alert("cliente cadastrado")
       
    }
 if (n==""){
        alert("campo vazio")
    } else{
        cliente.nomeFantasia.push(n)   
        console.log(cliente.nomeFantasia)
    }


 
}



