const AlunoService = {
    URL_API: "http://localhost:3000/api/alunos",


    async processarResposta(resposta){
        let resultado;

        try{
            resultado = await resposta.json();
        }catch(erro){
            throw new Error(
                "O servidor resotnrou uma resposta inválida"
            );
        }

        if(!resposta.ok){
            throw new Error(
                resultado.mensagem || "Não foi possível concluir a operação."
            );
        }

        return resultado;
    },

    async requisitar(opcoes = {}){
        let resposta;

        try{
            resposta = await fetch(
                AlunoService.URL_API,
                opcoes
            );
        }catch(erro){
            throw new Error(
                "Não foi possível conectar ao servidor."
            );
        }
        return AlunoService.processarResposta(resposta);
    },

    async listar(){
        const resultado = await AlunoService.requisitar({
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });

        return resultado.dados;
    },

    async cadastrar(aluno){
        return AlunoService.requisitar({
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(aluno)
        });
    },







    ///codigo antigo

//     listar(){
//         const textoJson = localStorage.getItem(AlunoService.CHAVE_STORAGE);

//         if(textoJson === null){
//             return [];
//         }

//         try{
//             const dados = JSON.parse(textoJson);

//             if(!Array.isArray(dados)){
//                 return [];
//             }

//             return dados;
//         }catch(erro){
//             localStorage.removeItem(AlunoService.CHAVE_STORAGE);
//             return [];
//         }
//     },

//     salvar(alunos){
//         const textoJson = JSON.stringify(alunos);
//         localStorage.setItem(AlunoService.CHAVE_STORAGE, textoJson);
//     },

//     cadastrar(dados){
//         const alunos = AlunoService.listar();

//         const resultado = AlunoModel.criar(dados, alunos);

//         if(!resultado.sucesso){
//             return resultado;
//         }

//         alunos.push(resultado.aluno);
//         AlunoService.salvar(alunos);
//         return resultado;
//     },

//     limpar(){
//         localStorage.removeItem(AlunoService.CHAVE_STORAGE);
//     }

}