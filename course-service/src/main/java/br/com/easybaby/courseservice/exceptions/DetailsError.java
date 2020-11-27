package br.com.easybaby.courseservice.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class DetailsError implements Serializable {

    private String title;
    private Long status;
    private Long timestamp;
}