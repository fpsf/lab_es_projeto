/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var usr = new Object();
usr.nome = "admin";
usr.senha = "admin";

$(document).ready(function() {
    //alert("Bem vindo à aplicação");
    if(document.location.href.substr(21) === "/WebApplication1/"){
        $('#index').mouseover($('#index').tooltip());
    }
    if(document.location.href.substr(21) === "/WebApplication1/updownload.html"){
        $('#updownload').mouseover($('#updownload').tooltip());
    }
    if(document.location.href.substr(21) === "/WebApplication1/download.html"){
        $('#download').mouseover($('#download').tooltip());
    }
    if(document.location.href.substr(21) === "/WebApplication1/upload.html"){
        $('#upload').mouseover($('#upload').tooltip());
    }
});

function validarLogin(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    function comecaValidacao(){
        if ((usuario === usr.nome) && (senha === usr.senha)){
            document.location.href = "/WebApplication1/updownload.html";
            return false;
        }
        else{
            alert("Utilize o login de teste!");
            document.location.href = "/WebApplication1/";
            return false;
        }
    }
    comecaValidacao();
    return false;
}

function validarArquivo(){
    var arquivo = document.getElementById("arquivo").value;
    if (arquivo === ''){
        alert('Escolha um Arquivo!');
        document.location.href = "/WebApplication1/upload.html";
        return false;
    }
    var upar = arquivo.replace("C:\\fakepath\\", "");
    // "C:\\fakepath\\inxi"
    alert("Arquivo Upado: " + upar);
    document.location.href = "/WebApplication1/updownload.html";
    return false;
    /*if (arquivo) {
        var indice = (arquivo.indexOf('\\') >= 0 ? arquivo.lastIndexOf('\\') : arquivo.lastIndexOf('/'));
        var filename = arquivo.substring(indice);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        
    }*/
}