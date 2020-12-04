package br.com.easybaby.maternityservice.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MaternityResponseDTO {

    private String id;
    private String name;
    private String plan;
    private String cnpj;
}
