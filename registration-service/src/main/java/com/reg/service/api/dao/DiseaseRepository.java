package com.reg.service.api.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reg.service.api.model.Disease;



public interface DiseaseRepository  extends JpaRepository<Disease,Integer> {
    List<Disease> findByDiseaseLikeOrSymptomsLike(String name1,String name2);
}
