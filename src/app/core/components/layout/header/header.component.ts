import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public search = '';

  constructor(private route: ActivatedRoute, private router: Router, private themeService: ThemeService) { }

  ngOnInit() {}

  searchStation(value: string) {
    if (value) {
      this.router.navigate(['search', {stationSearch: value}]);
    }
  }

  setTheme(value: any) {
    this.themeService.setTheme(value);
  }
}
