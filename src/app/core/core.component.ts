import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/core/services/station.service';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  public stations = [];
  p = 1;

  constructor(
    public themeService: ThemeService,
    private stationService: StationService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params.stationSearch) {
        this.getStation(params.stationSearch);
      }
    });

    this.stationService.defaultStations().subscribe((data: any) => {
      this.stations = data;
    });

  }

  getStation(value: string) {
    this.stationService.searchStation(value).subscribe((data) => {
      this.stations = data;
    });
  }
}
