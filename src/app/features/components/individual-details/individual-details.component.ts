import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { People, PlanetInfo } from '../../modles/user.model';
import { IndividualInfoService } from '../../services/individual-info.service';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.css']
})
export class IndividualDetailsComponent implements OnInit, OnChanges {
  @Input() details: People

  subscription: Subscription[] = [];
  individulDetails: People
  constructor(private planetInfo: IndividualInfoService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.details.currentValue) {
      this.individulDetails = changes.details.currentValue
    }
  }
  
  planetInfoDetails: PlanetInfo;
  getPlanetDetails(url: string) {
    this.subscription.push(this.planetInfo.getPlanetInfo(url).subscribe((response: PlanetInfo) => {
      this.planetInfoDetails = response
    }))
  }

}
