package br.com.easybaby.maternityservice.exceptions;

public class MaternityNotFound extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public MaternityNotFound(String mensagem) {
        super();
    }

    public MaternityNotFound(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
}
