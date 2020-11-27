package br.com.easybaby.maternityservice.repository;

import br.com.easybaby.maternityservice.entity.Maternity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaternityRepository extends JpaRepository<Maternity, Long> {
}
