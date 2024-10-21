document.getElementById('cadastroForm').onsubmit = function(e) {
    e.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let linha = "<tr><td>" + nome + "</td><td>" + email + "</td></tr>";
    document.getElementById('tabelaUsuarios').innerHTML += linha;

    this.reset();
};
