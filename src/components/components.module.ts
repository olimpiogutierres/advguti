import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { HeaderPrincipalComponent } from './header-principal/header-principal';

// import { HeaderPrincipalComponent } from './header-principal/header-principal';
// import { BarComponent } from './bar/bar';
// import { SvgbarComponent } from './svgbar/svgbar';
@NgModule({
	declarations: [ProgressBarComponent,HeaderPrincipalComponent 
    ],
	imports: [],
	exports: [ProgressBarComponent,HeaderPrincipalComponent
    ]
})
export class ComponentsModule {}
