import { DataServiceService } from './../../services/data-service.service';
import { GlobalDataSummary } from './../../models/gloabl-data';
import { DateWiseData } from './../../models/date-wise-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data : GlobalDataSummary[]=[];
  countries : string[] = [];
  totalConfirmed:any = 0;
  totalActive:any = 0;
  totalDeaths:any = 0;
  totalRecovered:any = 0;
  selectedCountryData : DateWiseData[]=[]; 
  //dateWiseData ;
  loading = true;
  // options: {
  //   height : 500, 
  //   animation:{
  //     duration: 1000,
  //     easing: 'out',
  //   },
  // } 
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {

    this.service.getGlobalData().subscribe(result=>{
      this.data=result;
      this.data.forEach(cs=>{
        if(cs.country)
        this.countries.push(cs.country);

      })
    })
  }

  updateValues(country:string){
    console.log(this.data);

    this.data.forEach(cs=>{
      if(cs.country == country){
        if(!Number.isNaN(cs.confirmed)){
        this.totalActive = cs.active ;
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
        this.totalConfirmed = cs.confirmed
        console.log(country +" "+cs.confirmed);}
      }
    })
  }

}
