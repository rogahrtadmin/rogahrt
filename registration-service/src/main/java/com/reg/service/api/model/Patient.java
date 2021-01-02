package com.reg.service.api.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String gender;
    private int Age;
    private String doctorName;
    private Date patientdate;
    private String patientdateNoTime;
    

	
	
	public Patient(int id, String name, String gender, int age, String doctorName,Date patientdate,String patientateNoTime) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		Age = age;
		this.doctorName = doctorName;
		this.patientdate=patientdate;
		this.patientdateNoTime = patientateNoTime;	
	}


	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getPatientdateNoTime() {
		return patientdateNoTime;
	}


	public void setPatientdateNoTime(String patientdateNoTime) {
		this.patientdateNoTime = patientdateNoTime;
	}


	public Date getPatientdate() {
		return patientdate;
	}


	public void setPatientdate(Date patientdate) {
		this.patientdate = patientdate;
	}


	public String getDoctorName() {
		return doctorName;
	}


	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}


	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

}
