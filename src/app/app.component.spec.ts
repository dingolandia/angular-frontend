import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SettingsService } from './services/settings.service';
import { MockComponent } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { HeadComponent } from './components/header/head.component';
import { ContentsWrapComponent } from './components/content/contents.wrap.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuService } from './services/menu.service';
import { of } from 'rxjs';
import { Isettings } from './models/settings.interface';
import { ImainMenuItems } from './models/menu.interface';

describe('AppComponent', () => {

  // Mock dos dados
  const mockSettings: Isettings = {
    avisos: 'Aviso sobre o mock settings',
    bannerTexto: 'Texto do banner',
    textoRodape: 'Texto do rodapé',
  };
  const mockMenuItems: ImainMenuItems[] = [
    {
      id: 777,
      ordem: 1,
      descricao: 'Menu mock item 1',
      url: 'http://localhost:4200',
      conteudo: [
        {
          id: 1,
          titulo: 'Conteúdo mock item 1',
          locale: 'pt-BR',
        },
      ],
    },
  ];

  // Instâncias mockadas dos serviços com os dados definidos
  const settingsService = jasmine.createSpyObj('SettingsService', ['getSettings']);
  const menuService = jasmine.createSpyObj('MenuService', ['getMenu']);

  // Configurando os retornos esperados para os métodos dos serviços
  settingsService.getSettings.and.returnValue(of(mockSettings));
  menuService.getMenu.and.returnValue(of(mockMenuItems));

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockComponent(HeadComponent),
        MockComponent(ContentsWrapComponent),
        MockComponent(FooterComponent),
      ],
      providers: [
        { provide: SettingsService, useValue: settingsService },
        { provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get']) },
        { provide: MenuService, useValue: menuService },
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'casadinamo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('casadinamo');
  });

  it('should call settingsService and menuService on ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Trigger change detection
    fixture.detectChanges();

    // Call ngOnInit
    app.ngOnInit();

    // Expect appSettings and menuItems to be set with the mock data
    expect(app.appSettings).toEqual(mockSettings);
    expect(app.menuItems).toEqual(mockMenuItems);
  });

});
