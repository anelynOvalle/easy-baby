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

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<MaternityResponseDTO> listMaternity(){
        return maternityService.listMaternity();
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public MaternityResponseDTO getMaternityById(@PathVariable("id") Long id){
        return maternityService.getMaternityById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MaternityDTO createMaternity(@RequestBody MaternityDTO maternityDTO){
        return maternityService.createMaternity(maternityDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public MaternityDTO updateMaternity(@PathVariable("id") Long id,
                                 @RequestBody MaternityDTO maternityDTO){
        return maternityService.updateMaternity(id, maternityDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMaternity(@PathVariable("id") Long id){
        maternityService.deleteMaternity(id);
    }

}
