import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http:HttpClient) { }


  public doRegistration(input){
    return this.http.post("https://registration-service-1598862342020.azurewebsites.net/register",input,{responseType:'text' as 'json'});
  }
  public doPrescription(input){
    return this.http.post("https://registration-service-1598862342020.azurewebsites.net/prescription",input,{responseType:'text' as 'json'});
  }

  public getView(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/view");
  }

  public getDoctorName(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/doctorName");
  }
  public getByToday(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findPatientsToday");
  }

  public getByThisMonth(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findPatientsThisMonth");
  }

  public getByThisWeek(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findPatientsThisWeek");
  }

  public getByThisYear(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findPatientsThisYear");
  }

  public doLogin(input){
    return this.http.post("https://registration-service-1598862342020.azurewebsites.net/login/",input,{responseType:'text' as 'json'});
  }

  public doLogout(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/logout/");
  }

  public getUsers(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/getAllUsers");
  }

  public getDiseases(){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/getAllDiseases");
  }

  public getUserByEmail(email){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findUser/"+email);
  }

  public getDoctorDetailsByEmail(id,email){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/doctorByEmail/"+id+email);
  }

  
  public getPatientById(id){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/patientById/"+id);
  }

  public getDiseaseByDiseaseName(diseasename){
    return this.http.get("https://registration-service-1598862342020.azurewebsites.net/findDisease/"+diseasename);
  }

  public deleteUser(id){
    return this.http.delete("https://registration-service-1598862342020.azurewebsites.net/cancel/"+id);
  }
}
