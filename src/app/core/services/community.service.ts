import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { housewarming, housewarming_info, communityPhoto } from '../models/community.interface';

@Injectable({
  providedIn: CoreModule
})
export class CommunityService {
  constructor(
    private httpClient: HttpClient,
    private commonService: CommonService
  ) { }

  getCommunityHome() {
    const path = 'community/home/';
    const fullpath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullpath);
  }

  getPhotoInfo(id: number) {
    const path = `community/photo/${id}/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getHousewarming() {
    const path = '/community/housewarming/';
    const fullpath = this.commonService.getFullPath(path);
    const headers = this.commonService.setAuthorization(
      this.commonService.Token
    );
    return this.httpClient.get<housewarming>(fullpath, { headers });
  }
  getProjectInfo(id: number) {
    const path = `community/housewarming/${id}/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get<housewarming_info>(fullPath);
  }
  getPhotoImage() {
    const path = '/community/photo/';
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get<communityPhoto[]>(fullPath);
  }
}
