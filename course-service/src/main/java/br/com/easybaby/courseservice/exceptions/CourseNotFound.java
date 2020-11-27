package br.com.easybaby.courseservice.exceptions;

public class CourseNotFound extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public CourseNotFound(String mensagem) {
        super();
    }

    public CourseNotFound(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
}
