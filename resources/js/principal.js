
function home() {
    let spanMenuDevice = document.getElementById('span-menu-device');
    let spanHome = document.getElementById('span-home');
    let spanLupa = document.getElementById('span-lupa');
    let spanPedidos = document.getElementById('span-pedidos');
    let spanPerfil = document.getElementById('span-perfil');
    spanLupa.style.display = 'none';
    spanPedidos.style.display = 'none';
    spanPerfil.style.display = 'none';
}

let spanMenuDevice;
window.onload = function () {
    showSpanElements();
};

function showSpanElements() {
    spanMenuDevice = document.getElementById('span-menu-device');
    let spanHome = document.getElementById('span-home');

    if (!spanMenuDevice) {
        console.error("span-menu-device element not found.");
        return;
    }
    spanHome.style.display = 'flex';
    spanMenuDevice.style.display = 'flex';
    spanMenuDevice.style.alignItems = 'center';
    spanMenuDevice.style.justifyContent = 'space-around';
    spanHome.style.position = 'absolute';
    spanHome.style.left = 0;
    spanHome.style.marginLeft = '0.7vw';
    spanHome.style.marginBottom = '8vh';
    spanHome.style.backgroundColor = '#00998b';
    spanHome.style.width = '24vw';
    setTimeout(() => {

        setTimeout(() => {
            spanHome.style.display = 'none';
        }, 1000); // 
    }, 4000);
}
// home 
function home(){
    let home = document.getElementById(`section-home`)
    var perfilDevice = document.getElementById(`perfil-device`)
    var configPerfil = document.getElementById(`configuracao-device`)


   if( perfilDevice.style.display = 'flex'){
     perfilDevice.style.display = 'none'
   }
    if(home.style.display === 'none' || home.style.display ===''){
        home.style.display = 'flex'   
    }
    if(configPerfil.style.display = 'flex'){
        configPerfil.style.display = 'none'
    }
}






function lupa() {
    let spanMenuDevice = document.getElementById(`span-menu-device`)
    let spanLupa = document.getElementById(`span-lupa`)
    let spanHome = document.getElementById(`span-home`).style.display = 'none'
    let spanPedidos = document.getElementById(`span-pedidos`).style.display = 'none'
    let spanPerfil = document.getElementById(`span-perfil`).style.display = 'none'

    if (spanLupa.style.display === 'none' || spanLupa.style.display === '') {
        spanMenuDevice.style.display = 'flex'
        spanMenuDevice.style.alignItems = 'center'
        spanMenuDevice.style.justifyContent = ' space-around'

        spanLupa.style.display = 'flex'
        spanLupa.style.position = 'absolute'
        spanLupa.style.left = 0
        spanLupa.style.marginLeft = '25.2vw'
        spanLupa.style.marginBottom = '8vh'
        spanLupa.style.width = '25vw'
        spanLupa.style.backgroundColor = '#00998b'
    }
}


function perfil() {
    let menuDevice = document.getElementById(`perfil-device`);

    if (menuDevice.style.display === 'none' || menuDevice.style.display === '') {

        menuDevice.style.display = 'flex';
    } else {

        menuDevice.style.display = 'none';
    }
}

function fecharMenu() {
    let menuDevice = document.getElementById(`perfil-device`);

    if (menuDevice.style.display === 'flex') {
        menuDevice.style.display = 'none'



    }
    else {
        menuDevice.style.display = 'flex'
    }
}













// link  git
function git() {
    // https://github.com/Eriveltonssa
    if (confirm('Deseja ir à página do desenvolvedor?')) {
        location.href = 'https://github.com/Eriveltonssa';
    }
}

function whatsapp() {
    if (confirm("Deseja abrir uma conversa com o Desenvolvedor?")) {
        location.href = 'https://api.whatsapp.com/send?phone=5571987348610'
    }
}



function selectImage() {
    document.getElementById('file-input').click();

}

document.getElementById('file-input').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const profilePic = document.getElementById('profile-pic');
            profilePic.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

function salvarImagem() {
    let nome = document.getElementById('nome-device-perfil').value;
    let salvar = document.getElementById('btn-salvarNome');
    let nomeUsuario = document.getElementById(`nomeUsuario`)
   
    if (nome === '') {
        alert('Informe seu nome.');
        return;
    } else {
        // Salvando o nome no localStorage
      var nomeSalvo =  localStorage.setItem('Nome', JSON.stringify(nome));
        salvar.style.display = 'none';
    }
    // Recuperando o nome do localStorage e exibindo no console
    var nomeRecuperado = localStorage.getItem('Nome');
    console.log(nomeRecuperado);

    nomeUsuario.innerHTML = nomeRecuperado

}







