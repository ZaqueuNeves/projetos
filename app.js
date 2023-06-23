let cliente = {
    nomeFantasia:[],
    telefone:[]
}

var p = window.document.getElementsByTagName('p')[0]
var r = document.getElementsByTagName('p')[1]


let n = document.getElementById('nome')
let t = document.getElementById('telefone')

function cadastro(validar,validarCadastro){
    let n = document.getElementById('nome').value
    let t = document.getElementById('telefone').value
    
    if (validar== false){
        alert("campo vazio")
    }else if( validarCadastro== false){
   alert("usuario cadastrado")
    }else{ 
    cliente.nomeFantasia.push(n)
    cliente.telefone.push(t)  
    console.log(cliente.nomeFantasia,cliente.telefone)}
    }
    


function validarCadastro(){    
    let ler = cliente.nomeFantasia.indexOf(document.getElementById('nome').value)
    let tel = cliente.telefone.indexOf(document.getElementById('telefone').value)
        if (ler >= 0 && tel >= 0){
  
            return false
        } 

}
function validar(){
    if( document.getElementById('nome').value == '' ||
    document.getElementById('telefone').value== ''){
        return false
    }

}
function limpar(validar){
    let ler = cliente.nomeFantasia.indexOf(document.getElementById('nome').value)
    let tel = cliente.telefone.indexOf(document.getElementById('telefone').value)
    if (validar== false){
        alert("campo vazio")
    }else if(ler == -1 && tel == -1 ){
        alert("usuario nao cadastrado")
    }else if( ler != tel){
        alert('invalido, usuario nao apagado')
    }
    else{
 
        cliente.nomeFantasia.splice(ler,1)
        cliente.telefone.splice(tel,1)
    } console.log(cliente.nomeFantasia, cliente.telefone)

}

