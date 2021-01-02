package com.reg.service.api;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import com.reg.service.api.dao.DiseaseRepository;
import com.reg.service.api.dao.PatientRepository;
import com.reg.service.api.dao.UserRepository;
import com.reg.service.api.model.Disease;
import com.reg.service.api.model.Patient;
import com.reg.service.api.model.User;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class RegistrationServiceApplication {

    @Autowired
    private UserRepository repository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private DiseaseRepository diseaseRepository;
    public String doctorName; 
    public Patient patients;
    
    @PostMapping("/register")
    public String register(@RequestBody User user) {
    	System.out.println("HEy I am Doctor " + user.getName() );
        repository.save(user);
        repository.flush();
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }
    
    
    @PostMapping("/prescription")
    public Integer prescription(@RequestBody Patient patient) {
    	patients=patient;
    	System.out.println("HEy I am here " + patient.getName() );
    	patient.setDoctorName(doctorName);
    	System.out.println("Doctor id is "+ patient.getDoctorName());
    	
    	try{	
            PDDocument pDDocument = PDDocument.load(new File("/home/rogahrtuser/application/e-prescription/prescription_template.pdf"));
            PDAcroForm pDAcroForm = pDDocument.getDocumentCatalog().getAcroForm();
            System.out.println(pDAcroForm.getDefaultAppearance());
            PDField field = pDAcroForm.getField("doctor_name");
            System.out.println(field.getAlternateFieldName());
            field.setValue(patient.getDoctorName());
            
            PDField field1 = pDAcroForm.getField("patient_name");
            System.out.println(field1.getAlternateFieldName());
            field1.setValue(patient.getName());
            pDDocument.save("/home/rogahrtuser/application/e-prescription/"+patient.getDoctorName()+"_"+patient.getName()+"_"+patient.getId()+"_"+patient.getPatientdateNoTime()+"e-prescription.pdf");
            pDDocument.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    	DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
    	Date dateobj = new Date();
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	Date dateobj1 = new Date();
    	String x =sdf.format(dateobj1);
    	
    	patient.setPatientdateNoTime(x);
    	patient.setPatientdate(dateobj);
        patientRepository.save(patient);
        patientRepository.flush();
        return patient.getId();
    }
    
    @PostMapping("/login/")
    public String login(@RequestBody User user) {
    	System.out.println("Doctor name " + user.getName() );
    	doctorName=user.getName();
    	System.out.println("Doctor id inside login "+user.getName());
    	User user1=repository.findByName(user.getName() );
    	if(repository.findByName(user.getName() )==null) {
    		System.out.println("Did not find");
    		return null;
    	}
    	else {
        	if(user1.getName().contains(user.getName()) && user1.getPassword().equalsIgnoreCase(user.getPassword()) ) {
            	System.out.println("user found "+user.getName());
        		return user1.getName();
        	}

        	else {
        		System.out.println("incorrect name "+user.getName());
        		return null;	
        	}
			
    	}
 
    }
    
    @GetMapping("/logout/")
    public String logout() {
    	System.out.println("I am here");
			return "not correct login";
 
    }
    
    @GetMapping("/getAllUsers")
    public List<Patient> findAllPatients() {
    	String DoctorName=doctorName;
    	System.out.println("findAllUsers "+ DoctorName + patientRepository.findAllByDoctorNameOrderByIdDesc(DoctorName).get(0).getPatientdate());
        return patientRepository.findAllByDoctorNameOrderByIdDesc(DoctorName);
    }
    
    @GetMapping("/getAllDiseases")
    public List<Disease> findAllDiseases() {
        return diseaseRepository.findAll();
    }
    
    @GetMapping("/findPatientsToday")
    public Integer findPatientsToday() { 
    	String DoctorName=doctorName;
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	Date dateobj1 = new Date();
    	String x =sdf.format(dateobj1);
    	return patientRepository.countByDoctorNameAndPatientdateNoTime(DoctorName,x );
    }
    
    @GetMapping("/findPatientsThisMonth")
    public Integer findPatientsThisMonth() { 
    	String DoctorName=doctorName;
     	return patientRepository.getCountOfCurrentMonthByDoctorName(DoctorName);
    }
    
    @GetMapping("/findPatientsThisWeek")
    public Integer findPatientsThisWeek() { 
    	String DoctorName=doctorName;
     	return patientRepository.getCountOfCurrentWeekByDoctorName(DoctorName);
    }
    
    @GetMapping("/findPatientsThisYear")
    public Integer findPatientsThisYear() { 
    	String DoctorName=doctorName;
    	System.out.println("patients in year count "+ patientRepository.getCountOfCurrentYearByDoctorName(DoctorName));
     	return patientRepository.getCountOfCurrentYearByDoctorName(DoctorName);
    }

    @GetMapping("/findUser/{email}")
    public List<Patient> findUser(@PathVariable String email) {
    	String DoctorName=doctorName;
        return patientRepository.findAllByNameAndDoctorNameOrderByIdDesc(email,doctorName);
    }
    
    
    @GetMapping("/findDisease/{diseasename}")
    public List<Disease> findDiseaseByName(@PathVariable String diseasename) {
    	System.out.println("disease name requested "+ diseasename);
    	System.out.println("disease details "+  diseaseRepository.findByDiseaseLikeOrSymptomsLike("%"+diseasename+"%","%"+diseasename+"%"));
        return diseaseRepository.findByDiseaseLikeOrSymptomsLike('%'+diseasename+'%','%'+diseasename+'%');
    }
    
    @GetMapping("/doctorName")
    public String getDoctorName() {
    	Patient patient=new Patient();
    	patient.setDoctorName(doctorName);
    	System.out.println("Doctor name on java side "+ patient.getDoctorName());
        return patient.getDoctorName();
    }
    
    @GetMapping("/view")
    public List<Patient> findPatient() {
    	System.out.println("Hey me "+patients.getName());

    	System.out.println("patient details "+patients.getDoctorName() + patients.getName() + patients.getPatientdate());
    	List<Patient> list=(List<Patient>) patientRepository.findTop1ByNameAndDoctorNameOrderByIdDesc(patients.getName(), patients.getDoctorName());
    	System.out.println("patients "+list.get(0).getName());
    	
    	
    	
        return (List<Patient>) patientRepository.findTop1ByNameAndDoctorNameOrderByIdDesc(patients.getName(), patients.getDoctorName());
    }

    @DeleteMapping("/cancel/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }

    public static void main(String[] args) {
        SpringApplication.run(RegistrationServiceApplication.class, args);
    }

}


