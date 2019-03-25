import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme = 'standart-theme';

  constructor() { }

  setTheme(data: string) {
    this.theme = data;
  }

  getTheme(): string {
    return this.theme;
  }
}
