package br.com.easybaby.maternityservice.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class DetailsError implements Serializable {

    private String title;
    private Long status;
    private Long timestamp;
}