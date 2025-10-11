Funcionalidade: Cadastro de Usuário na Plataforma
Eu, como usuário de um website de cinema,
Quero me registrar como membro no site,
Para receber em primeira mão promoções e novidades do cinema.

  Contexto:
    Dado que o usuário acessa a página de registro

    Cenário: Registro com todos os campos obrigatórios preenchidos
        Quando o usuário preenche "Nome", "Sobrenome", "Email" e "Senha"
        E clica no botão "Cadastrar"
        Então o sistema exibe uma mensagem de sucesso

    Cenário: Envio de e-mail de confirmação após o registro bem-sucedido
        Quando o usuário completar o registro com sucesso
        Então um e-mail de confirmação é enviado para o endereço de e-mail fornecido

    Esquema do Cenário: Validação dos campos de registro
        Quando o usuário preenche <Nome>, <Sobrenome>, <Email>, <Telefone> e <Senha>
        Então o sistema valida os campos e retorna "<Mensagem>"

        Exemplos:
            | Nome  | Sobrenome | Email            | Telefone    | Senha     | Mensagem         |
            | Ana   | Silva     | ana@email.com    | 11999887766 | An@1234!  | Sucesso          |
            | João  |           | joao@email.com   |             | João#4321 | Campos em branco |
            | Maria | Pereira   | mariapereira.com | 21988776655 | Mp3re1ra  | Email incorreto  |
            | Pedro | Alves     | pedro@email.com  |             | Pe@1      | Campos em branco |
            |       | Santos    | luis@email.com   | 31987654321 | Lu1s*6789 | Campos em branco |

    Cenário: Tentativa de registro com e-mail já existente
        Dado que o usuário já possui uma conta com o e-mail 
        Quando o usuário preenche "Email" (já existente) e "Senha"
        E clica no botão "acessar"
        Então o sistema exibe uma mensagem de erro indicando que o e-mail já está em uso
    
    Cenário: Opção de se desinscrever das atualizações por e-mail
        Quando o usuário acessa as configurações de conta
        E seleciona a opção para se desinscrever das atualizações por e-mail
        Então o sistema confirma que o usuário foi desinscrito com sucesso