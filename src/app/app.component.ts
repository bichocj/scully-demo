import { Component } from '@angular/core';
import { AppState } from './services/shared.service';

@Component({
  selector: 'nz-demo-layout-top',
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo">
          <img src="assets/logo.png" alt="">
        </div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal">
          <li nz-menu-item routerLink='courses'>Courses</li>
          <li nz-menu-item routerLink='pricing'>Pricing</li>
          <li nz-menu-item>Resources</li>
          <ng-template [ngIf]="isLoggedIn" [ngIfElse]="loggedOut">
            <li (click)="logout()" nz-menu-item style="position: absolute; right: 0; margin-right: 50px">
              {{profile}}, Salir
            </li>
          </ng-template>
          <ng-template #loggedOut>
            <li nz-menu-item routerLink='login' style="position: absolute; right: 0; margin-right: 50px">Login</li>
          </ng-template>
        </ul>
      </nz-header>
      <nz-content>
        <div class="inner-content" style="margin-top:40px">
          <router-outlet></router-outlet>
        </div>
      </nz-content>
      <nz-footer>Ant Design ©2020 Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: [
    `
      .logo {
        // width: 120px;
        height: 31px;
        // background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
      }

      img {
        width: 60px;
      }

      [nz-menu] {
        line-height: 64px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        padding: 0 50px;
      }

      nz-footer {
        text-align: center;
      }

      .inner-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
    `
  ]
})
export class NzDemoLayoutTopComponent {
  profile = null;
  isLoggedIn = false;
  constructor(private appState: AppState) {
    this.appState.profile$.subscribe((val: any) => {
      this.profile = val;
      if (val) {
        this.isLoggedIn = true;
      }
    });
  }
  logout(): void {
    this.appState.setProfile(null);
    this.isLoggedIn = false;
  }
}
