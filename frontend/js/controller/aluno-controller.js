const AlunoController = { 


    async iniciar(){
       AlunoView.iniciar();

       AlunoView.configurarFormulario(
        AlunoController.cadastrar
    );

    AlunoView.exibirMensagem(
        "Carregando alunos...",
        "informacao"
    );

    try {
        await AlunoController.atualizarVisualizacao();

        AlunoView.exibirMensagem(
            "Dados carregados com sucesso.",
            "sucesso"
        );
    } catch (erro) {
        AlunoView.exibirMensagem(
            erro.message,
            "erro"
        );
    }
},

    async cadastrar(evento){
        evento.preventDefault();

        const dadosInformados = AlunoView.lerDados();

        const validacao = AlunoModel.validar(
            dadosInformados
        );

        if(!validacao.sucesso){
            AlunoView.exibirMensagem(
                validacao.mensagem,
                "erro"
            );

            return;
        }

        AlunoView.alterarEstadoFormulario(true);

        AlunoView.exibirMensagem(
            "Enviando dados para o servidor...",
            "informacao"
        );

        try {
            const resultado = 
                await AlunoService.cadastrar(
                validacao.dados
            );

            await AlunoController.atualizarVisualizacao();

            AlunoView.limparFormulario();

            AlunoView.exibirMensagem(
                resultado.mensagem,
                "sucesso"
            );
        } catch (erro) {
            AlunoView.exibirMensagem(
                erro.message,
                "erro"
            );
        } finally {
            AlunoView.alterarEstadoFormulario(false);
        }
    },

    async atualizarVisualizacao(){
        const alunos = await AlunoService.listar();

        AlunoView.exibirLista(alunos);

        AlunoView.exibirJson(alunos);
    }
};

    //codigo antigo
    // AlunoView.configurarBotaoLimpar(
    //     function(){
    //         AlunoController.limparDados();
    //     }
    // );

    // AlunoController.atualizarVisualizacao();

    // },

    // corrigeMaiusculoEMinusculo(nome){
    //     return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    // },

    // cadastrar(dados){
    //     const resultado = AlunoService.cadastrar(dados);

    //     if(!resultado.sucesso){
    //         AlunoView.exibirErro(resultado.mensagem);
    //         return;
    //     }

    //     AlunoView.exibirSucesso(`Aluno ${this.corrigeMaiusculoEMinusculo(resultado.aluno.nome)} cadastrado com sucesso!`);

    //     AlunoView.limparFormulario();

    //     AlunoController.atualizarVisualizacao();
    // },

    // limparDados(){
    //     const alunos = AlunoService.listar();

    //     if(alunos.length === 0){
    //         AlunoView.exibirErro("Não existem alunos para remover");
    //         return;
    //     }

    //     const confirmou = AlunoView.confirmarLimpeza();

    //     if(!confirmou){
    //         return;
    //     }

    //     AlunoService.limpar();

    //     AlunoView.exibirSucesso("Todos os alunos foram removidos.");

    //     AlunoController.atualizarVisualizacao();
    // },

    // atualizarVisualizacao(){
    //     const alunos = AlunoService.listar(); 

    //     AlunoView.exibirLista(alunos);

    //     const textoJson = JSON.stringify(alunos, null, 2);

    //     AlunoView.exibirJson(textoJson);
    // }


AlunoController.iniciar();