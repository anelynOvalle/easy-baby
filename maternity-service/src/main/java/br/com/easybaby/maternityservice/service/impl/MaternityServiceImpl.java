package br.com.easybaby.maternityservice.service.impl;

import br.com.easybaby.maternityservice.dto.MaternityDTO;
import br.com.easybaby.maternityservice.entity.Maternity;
import br.com.easybaby.maternityservice.exceptions.MaternityNotFound;
import br.com.easybaby.maternityservice.repository.MaternityRepository;
import br.com.easybaby.maternityservice.service.MaternityService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class MaternityServiceImpl implements MaternityService {

    private MaternityRepository maternityRepository;
    private final ModelMapper mapper;

    @Override
    public List<MaternityDTO> listMaternity() {
        return mapListMaternity(maternityRepository.findAll());
    }

    @Override
    public MaternityDTO createMaternity(MaternityDTO maternityDTO) {
        maternityRepository.save(mapper.map(maternityDTO, Maternity.class));
        return maternityDTO;
    }

    @Override
    public MaternityDTO updateMaternity(Long id, MaternityDTO maternityDTO) {
        maternityRepository.save(convertMaternity(existMaternity(id), maternityDTO));
        return maternityDTO;
    }

    private Maternity convertMaternity(Maternity maternity, MaternityDTO maternityDTO) {
        maternity.setName(maternityDTO.getName());
        maternity.setPlan(maternityDTO.getPlan());
        maternity.setCnpj(maternityDTO.getCnpj());
        return maternity;
    }

    @Override
    public MaternityDTO getMaternityById(Long id) {
        return mapper.map(existMaternity(id), MaternityDTO.class);
    }

    @Override
    public void deleteMaternity(Long id) {
        existMaternity(id);
        maternityRepository.deleteById(id);
    }

    private List<MaternityDTO> mapListMaternity(List<Maternity> maternities) {
        return maternities.stream()
                .map(maternity -> this.mapper.map(maternity, MaternityDTO.class))
                .collect(Collectors.toList());
    }

    private Maternity existMaternity(Long id){
        Maternity maternity = null;
        try{
            maternity = maternityRepository.findById(id).get();
        }catch (Exception e){
            throw new MaternityNotFound("A maternidade não foi encontrada.");
        }
        return maternity;
    }

}
