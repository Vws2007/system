let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;
function addTarefa() {
  let valorInput = input.value;
  ++contador;
    
  if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
      let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i class="mdi mdi-circle-outline" id="${contador}"></i>
            </div>
            <div  class="item-nome" id="icone_${contador}">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})"> <i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;
        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
    }
}

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id) {
    let item = document.getElementById(id);
    
    let icone = document.getElementById("icone_" + id);

    let iconeItem = tarefa.querySelector('.item-icone i');
    if (classe === "item") {

        item.classList.remove('clicado');
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
        icone.style.textDecoration = "underline";
    } 
}