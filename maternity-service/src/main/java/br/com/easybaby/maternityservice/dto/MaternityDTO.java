package br.com.easybaby.maternityservice.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MaternityDTO {

    private String name;
    private String plan;
    private String cnpj;
}
