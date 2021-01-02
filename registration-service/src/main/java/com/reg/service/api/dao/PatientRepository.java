package com.reg.service.api.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.reg.service.api.model.Patient;


public interface PatientRepository extends JpaRepository<Patient,Integer>{

    Patient findByName(String name);
    List<Patient> findAllByDoctorNameOrderByIdDesc(String DoctorName);
    Integer countByDoctorNameAndPatientdateNoTime(String DoctorName,String date);
    List<Patient> findAllByNameAndDoctorNameOrderByIdDesc(String name,String DoctorName);
    List<Patient> findTop1ByNameAndDoctorNameOrderByIdDesc(String name,String DoctorName);
    
    @Query("select count(e.name) from Patient e where year(e.patientdate) = year(GETDATE()) and  month(e.patientdate) = month(GETDATE()) and e.doctorName=?#{#doctorName}")
    Integer getCountOfCurrentMonthByDoctorName(@Param("doctorName") String DoctorName);
    
    @Query("select count(e.name) from Patient e where year(e.patientdate) = year(GETDATE()) and  month(e.patientdate) = month(GETDATE()) and e.patientdate >= dateadd(day, 1-datepart(dw, getdate()), CONVERT(date,getdate())) and e.patientdate <  dateadd(day, 8-datepart(dw, getdate()), CONVERT(date,getdate())) and e.doctorName=?#{#doctorName}")
    Integer getCountOfCurrentWeekByDoctorName(@Param("doctorName") String DoctorName);
    
    @Query("select count(e.name) from Patient e where year(e.patientdate) = year(GETDATE())  and e.doctorName=?#{#doctorName}")
    Integer getCountOfCurrentYearByDoctorName(@Param("doctorName") String DoctorName);
}
