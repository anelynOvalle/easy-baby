package br.com.easybaby.maternityservice.service;

import br.com.easybaby.maternityservice.dto.MaternityDTO;

import java.util.List;

public interface MaternityService {

    List<MaternityDTO> listMaternity();

    MaternityDTO createMaternity(MaternityDTO courseDTO);

    MaternityDTO updateMaternity(Long id, MaternityDTO courseDTO);

    MaternityDTO getMaternityById(Long id);

    void deleteMaternity(Long id);
}
