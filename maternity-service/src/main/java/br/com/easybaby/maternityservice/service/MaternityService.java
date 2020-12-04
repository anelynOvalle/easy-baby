package br.com.easybaby.maternityservice.service;

import br.com.easybaby.maternityservice.dto.MaternityDTO;
import br.com.easybaby.maternityservice.dto.MaternityResponseDTO;

import java.util.List;

public interface MaternityService {

    List<MaternityResponseDTO> listMaternity();

    MaternityDTO createMaternity(MaternityDTO courseDTO);

    MaternityDTO updateMaternity(Long id, MaternityDTO courseDTO);

    MaternityResponseDTO getMaternityById(Long id);

    void deleteMaternity(Long id);
}
