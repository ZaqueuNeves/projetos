let cliente = {
    nomeFantasia:["arcos",""],
    telefone:[]
}

var p = window.document.getElementsByTagName('p')[0]
var r = document.getElementsByTagName('p')[1]


function cadastro(){
    let n = document.getElementById('nome').value
    
    cliente.nomeFantasia.push(n)   
    console.log(cliente.nomeFantasia)
    }