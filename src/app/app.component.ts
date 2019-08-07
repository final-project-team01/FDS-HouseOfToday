import { Component } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { StorageService } from './core/services/storage.service';
import { CommonService } from './core/services/common.service';
import { UserService } from './core/services/user.service';
import { Title } from '@angular/platform-browser';

const STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  readonly classes = this.theme.addStyleSheet(STYLES);

  title = 'ohouse';

  constructor(
    private theme: LyTheme2,
    private storageService: StorageService,
    private commonService: CommonService,
    private userService: UserService,
    private titleService: Title
  ) {
    if (!this.commonService.Token) {
      const user = this.storageService.getLocal('user');
      this.commonService.setToken(user);
    }
    if (this.commonService.isLogin()) {
      this.getUser();
    }

    this.titleService.setTitle("1등 인테리어 집꾸미기 서비스, 오늘의 집")
  }
  getUser() {
    this.userService.getUser().subscribe((res) => {
      this.commonService.setUserDetail(res[0]);
    });
  }
}
