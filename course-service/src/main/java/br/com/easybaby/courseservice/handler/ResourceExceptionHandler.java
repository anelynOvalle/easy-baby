package br.com.easybaby.courseservice.handler;

import br.com.easybaby.courseservice.exceptions.CourseNotFound;
import br.com.easybaby.courseservice.exceptions.DetailsError;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(CourseNotFound.class)
    public ResponseEntity<DetailsError> naoEncontrado(CourseNotFound e,
                                                      HttpServletRequest request){
        DetailsError erro = new DetailsError("O curso não foi encontrado.", 404L, System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(erro);
    }
}
