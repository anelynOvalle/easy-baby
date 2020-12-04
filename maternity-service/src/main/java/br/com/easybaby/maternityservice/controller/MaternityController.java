package br.com.easybaby.maternityservice.controller;

import br.com.easybaby.maternityservice.dto.MaternityDTO;
import br.com.easybaby.maternityservice.dto.MaternityResponseDTO;
import br.com.easybaby.maternityservice.service.MaternityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("maternity")
public class MaternityController {

    private MaternityService maternityService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MaternityResponseDTO> listMaternity(){
        return maternityService.listMaternity();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public MaternityResponseDTO getMaternityById(@PathVariable("id") Long id){
        return maternityService.getMaternityById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MaternityDTO createMaternity(@RequestBody MaternityDTO maternityDTO){
        return maternityService.createMaternity(maternityDTO);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public MaternityDTO updateMaternity(@PathVariable("id") Long id,
                                 @RequestBody MaternityDTO maternityDTO){
        return maternityService.updateMaternity(id, maternityDTO);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMaternity(@PathVariable("id") Long id){
        maternityService.deleteMaternity(id);
    }

}
