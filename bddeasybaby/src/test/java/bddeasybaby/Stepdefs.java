package bddeasybaby;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

import static org.junit.Assert.*;

public class Stepdefs {
    
    private static int limitacnpj;
    
    private static String cnpj;
    
    @Dado("Que o usuario ja consultou que a maternidade nao existe")
    public void que_o_usuario_ja_consultou_que_a_maternidade_nao_existe() {
        
    }

    @Quando("Usuario inclui os dados da maternidade: {string}")
    public void usuario_inclui_os_dados_da_maternidade(String cnpj) {
        Stepdefs.cnpj = cnpj;
    }

    @Entao("A maternidade e incluida no sistema: {string}")
    public void a_maternidade_e_incluida_no_sistema(String msg) {
        
       Stepdefs.limitacnpj = Stepdefs.cnpj.length();
        if (Stepdefs.limitacnpj == 14) {
            assertEquals(msg, "Cadastro realizado com sucesso");
        }
        else {
            assertEquals(msg, "CNPJ invalido. Cadastre somente numeros");
        }
    }

}
