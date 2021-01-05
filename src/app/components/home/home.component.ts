import { GlobalDataSummary } from './../../models/gloabl-data';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed:any = 0;
  totalActive:any = 0;
  totalDeaths:any = 0;
  totalRecovered:any = 0;
  loading = true;
  globalData: GlobalDataSummary[]=[];

  

  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getGlobalData().subscribe(
      {
        next:(result)=>{
          
          this.globalData = result;
          result.forEach(cs => {
           
              if(!Number.isNaN(cs.confirmed)){
              this.totalActive += cs.active
              this.totalConfirmed += cs.confirmed
              this.totalDeaths += cs.deaths
              this.totalRecovered += cs.active}
          })
          

         }
      }
    );
  }

}
