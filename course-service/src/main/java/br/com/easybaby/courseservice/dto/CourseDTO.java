package br.com.easybaby.courseservice.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class CourseDTO {

    private String name;
    private String description;
    private String video;
    private BigDecimal price;
    private String duration;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate dateNow;
}
