import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  languages = [
    {code:'en', name: 'en'},
    {code:'ua', name: 'ua'},
  ]

  selectedLanguage: string = 'en';
  searchText: string = '';
  menuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  clearSearch() {
    this.searchText = '';
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }


}
