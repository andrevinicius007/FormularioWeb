function Validacao(){
	tecla = event.keyCode;
	if (tecla >= 48 && tecla <= 57)
        return false
    return true
}

function Maiuscula(campo){
    var x = document.getElementById(campo);
    x.value = x.value.toUpperCase();
}

function Muda_Cor(){
    document.getElementById('teste').style.backgroundColor = 'red'
}

function Cor_Original(){
    document.getElementById('teste').style.backgroundColor = 'gray'
}