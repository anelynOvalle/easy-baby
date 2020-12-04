# language: pt
@cadastrar_maternidade
Funcionalidade: Cadastrar uma maternidade
  Efetuar o cadastro de uma maternidade

  @cadastra_maternidade
  Esquema do Cenario: Cadastrar uma nova maternidade
    Dado Que o usuario ja consultou que a maternidade nao existe
    Quando Usuario inclui os dados da maternidade: <cnpj>
    Entao A maternidade e incluida no sistema: <resultado esperado>
    Exemplos:
            | cnpj                  | resultado esperado                                |
            | "88670797000185"      | "Cadastro realizado com sucesso"                  |
            | "088670797000185"     | "CNPJ invalido. Cadastre somente numeros"         |
            | "88.670.797/0001-85"  | "CNPJ invalido. Cadastre somente numeros"         |
            | "68870797000125"      | "Cadastro realizado com sucesso"                  |
            | "57770797000130"      | "Cadastro realizado com sucesso"                  |
            | "75.236.797/0001-85"  | "CNPJ invalido. Cadastre somente numeros"         |
            | "0075236797000185"    | "CNPJ invalido. Cadastre somente numeros"         |