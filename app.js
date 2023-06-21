let cliente = {
    nomeFantasia:[],
    telefone:[]
}

var p = window.document.getElementsByTagName('p')[0]
var r = document.getElementsByTagName('p')[1]


let n = document.getElementById('nome')


function cadastro(validar,validarCadastro){
    let n = document.getElementById('nome').value
    if (validar== false){
        alert("invalido")
    }else if( validarCadastro== false){
   alert("usuario cadastrado")
    }else{ 
    cliente.nomeFantasia.push(n)   
    console.log(cliente.nomeFantasia)}
    }
    


function validarCadastro(){    
    let ler = cliente.nomeFantasia.indexOf(document.getElementById('nome').value)
        if (ler >= 0){
  
            return false
        } 

}
function validar(){
    if( document.getElementById('nome').value == ''){
        return false
    }

}


