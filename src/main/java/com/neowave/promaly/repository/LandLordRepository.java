package com.neowave.promaly.repository;

import com.neowave.promaly.domain.LandLord;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the LandLord entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LandLordRepository extends JpaRepository<LandLord, Long> {

}
