$(document).ready(function(){
    
    $('#cadastra-tarefa').on('submit',function(e) { 
        e.preventDefault()
        const nome_tarefa = $('#nome-da-tarefa').val();
        const nova_tarefa = $(`<li>${nome_tarefa}</li>`);
        console.log(nova_tarefa)
        $(nova_tarefa).appendTo('ul');
        $('#nome-da-tarefa').val("");
        
        const listItems = document.querySelectorAll('#tarefas li');

        listItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('tarefas-clicadas');
        });
        });
    })


})