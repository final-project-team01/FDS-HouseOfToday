import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreModule } from '../core.module';
import { CommonService } from './common.service';

@Injectable({
  providedIn: CoreModule
})
export class CommunityService {

  constructor(private httpClient: HttpClient, private commonService: CommonService) { }

  getCommunityHome() {
    const path = 'community/home/';
    const fullpath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullpath);
  }
}
