package br.com.easybaby.maternityservice.handler;

import br.com.easybaby.maternityservice.exceptions.DetailsError;
import br.com.easybaby.maternityservice.exceptions.MaternityNotFound;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(MaternityNotFound.class)
    public ResponseEntity<DetailsError> naoEncontrado(MaternityNotFound e,
                                                      HttpServletRequest request){
        DetailsError erro = new DetailsError("A maternidade não foi encontrada.", 404L, System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(erro);
    }
}
