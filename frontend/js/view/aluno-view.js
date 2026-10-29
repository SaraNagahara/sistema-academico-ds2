const AlunoView = { 

    elementos: {},

    iniciar(){
        AlunoView.elementos.formulario = 
            document.querySelector("#form-aluno");
        AlunoView.elementos.ra =
            document.querySelector("#ra");

        AlunoView.elementos.nome =
            document.querySelector("#nome");

        AlunoView.elementos.email =
            document.querySelector("#email");
        
        AlunoView.elementos.curso =
            document.querySelector("#curso");

        AlunoView.elementos.turma =
            document.querySelector("#turma");
        
        AlunoView.elementos.mensagem =
            document.querySelector("#mensagem");
        
        AlunoView.elementos.corpoTabela =
            document.querySelector("#corpo-tabela-alunos");

        AlunoView.elementos.totalAlunos =
            document.querySelector("#total-alunos");

        AlunoView.elementos.saidaJson =
            document.querySelector("#saida-json");

        AlunoView.elementos.botaoSalvar =
            document.querySelector("#botao-salvar");

    },

    configurarFormulario(aoEnviar){
        AlunoView.elementos.formulario.addEventListener(
            "submit", 
            aoEnviar
        );
    },

    lerDados(){
        return{
            ra: AlunoView.elementos.ra.value,
            nome: AlunoView.elementos.nome.value,
            email: AlunoView.elementos.email.value,
            curso: AlunoView.elementos.curso.value,
            turma: AlunoView.elementos.turma.value,
        };
    },

    exibirMensagem(mensagem, tipo){
        AlunoView.elementos.mensagem.textContent = mensagem;

        AlunoView.elementos.mensagem.className = `mensagem ${tipo}`;
    },

    criaCelula(valor){
        const celula = document.createElement("td");
        
        celula.textContent = valor;

        return celula;
    },

    exibirLista(alunos){
        AlunoView.elementos.corpoTabela.innerHTML = "";

        if(alunos.length === 0){
            const linha = document.createElement("tr");
            const celula = document.createElement("td");

            celula.colSpan = 7;
            celula.textContent = "Nenhum aluno foi cadastrado.";

            linha.appendChild(celula);

            AlunoView.elementos.corpoTabela.appendChild(
                linha
            );

            return;
        }

        alunos.forEach(aluno =>{
            const linha = document.createElement("tr");

            linha.appendChild(
                AlunoView.criaCelula(aluno.id)
            );
            linha.appendChild(
                AlunoView.criaCelula(aluno.ra)
            );
            linha.appendChild(
                AlunoView.criaCelula(aluno.nome)
            );
            linha.appendChild(
                AlunoView.criaCelula(aluno.email)
            );
            linha.appendChild(
                AlunoView.criaCelula(aluno.curso)
            );
            linha.appendChild(
                AlunoView.criaCelula(aluno.turma)
            );
            linha.appendChild(
                AlunoView.criaCelula(
                    aluno.ativo ? "Sim" : "Não"
                )
            );

            AlunoView.elementos.corpoTabela.appendChild(
                linha
            );
        });
    },

    exibirJson(alunos){
        AlunoView.elementos.saidaJson.textContent = JSON.stringify(alunos, null, 2);
    },

    limparFormulario(){
        AlunoView.elementos.formulario.reset();

        AlunoView.elementos.ra.focus();
    },

    alterarEstadoFormulario(processando) {
        AlunoView.elementos.botaoSalvar.disabled = processando;
        AlunoView.elementos.botaoSalvar.textContent = processando ? "Salvando..." : "Cadastrar aluno";
    },

    //codigo antigo ??

    // configurarBotaoLimpar(aoLimpar){
    //     AlunoView.elementos.botaoLimpar.addEventListener(
    //         "click",
    //         function(){
    //             aoLimpar();
    //         }
    //     );
    // },

    // lerDados(){
    //     return{
    //         ra: AlunoView.elementos.ra.value,
    //         nome: AlunoView.elementos.nome.value,
    //         email: AlunoView.elementos.email.value,
    //         curso: AlunoView.elementos.curso.value,
    //         turma: AlunoView.elementos.turma.value
    //     };
    // },

    // confirmarLimpeza(){
    //     return confirm("Deseja remover todos os alunos cadastrados?");
    // },

    // exibirSucesso(mensagem){
    //     AlunoView.elementos.mensagem.textContent = mensagem;
    //     AlunoView.elementos.mensagem.className = "mensagem-sucesso";
    // },

    // exibirErro(mensagem){
    //     AlunoView.elementos.mensagem.textContent = mensagem;
    //     AlunoView.elementos.mensagem.className = "mensagem-erro";
    // },

    // limparFormulario(){
    //     AlunoView.elementos.formulario.reset();

    //     AlunoView.elementos.ra.focus();
    // },

    // exibirLista(alunos){
    //     const corpoTabela = AlunoView.elementos.corpoTabela;
    //     corpoTabela.textContent = "";

    //     AlunoView.elementos.totalAlunos.textContent = 
    //         `Total: ${alunos.length}`;

    //         if(alunos.length === 0){
    //             const linha = document.createElement("tr");
    //             const celula = document.createElement("td");
    //             celula.colSpan = 7;
    //             celula.textContent = 
    //                 "Nenhum aluno foi cadastrado.";
    //             linha.appendChild(celula);
    //             corpoTabela.appendChild(linha);

    //             return;
    //         }

    //         alunos.forEach(function(aluno){
      
    //             const linha = document.createElement("tr");

    //             const valores = [
    //                 aluno.id,
    //                 aluno.ra,
    //                 aluno.nome,
    //                 aluno.email,
    //                 aluno.curso,
    //                 aluno.turma,

    //                 aluno.ativo ? "Ativo" : "Inativo"
    //             ];

    //             valores.forEach(function(valor){
    //                 const celula = document.createElement("td");
    //                 celula.textContent = valor;
    //                 linha.appendChild(celula);
    //             });
    //             corpoTabela.appendChild(linha);
    
    //         });
    //         },

    //         exibirJson(textoJson){
    //             AlunoView.elementos.saidaJson.textContent = textoJson;
    //         }

};