import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommunityService } from 'src/app/core/services/community.service';

@Injectable()
export class ProjectResolve implements Resolve<any> {
  constructor(private communityService: CommunityService) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.communityService.getHousewarming();
  }
}