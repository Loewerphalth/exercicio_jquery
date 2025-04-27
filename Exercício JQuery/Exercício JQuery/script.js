$(document).ready(function() {

    // Mostrar o formulário
    $('.btn-nova-tarefa').click(function() {
        $('.formulario').slideDown();
    });

    // Esconder o formulário
    $('.btn-cancelar').click(function() {
        $('.formulario').slideUp();
    });

    // Adicionar tarefa
    $('.btn-adicionar').click(function() {
        const tarefaTexto = $('.input-tarefa').val().trim();

        if (tarefaTexto !== '') {
            const novaTarefa = $('<li>').html(`
                ${tarefaTexto}
                <button class="btn-remover">🗑️</button>
            `);
            $('.tarefas').append(novaTarefa);

            $('.input-tarefa').val('');
            $('.formulario').slideUp();
        } else {
            alert('Por favor, digite uma tarefa.');
        }
    });

    // Marcar tarefa como concluída ao clicar no texto (não no botão)
    $('.tarefas').on('click', 'li', function(event) {
        if (!$(event.target).hasClass('btn-remover')) {
            $(this).toggleClass('concluida');
        }
    });

    // Remover tarefa clicando no botão 🗑️
    $('.tarefas').on('click', '.btn-remover', function(event) {
        event.stopPropagation(); // Impede que o clique afete o <li>
        $(this).parent().remove();
    });
});
