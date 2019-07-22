import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { store_list } from '../models/store.interface';
import { StateService } from './state.service';

@Injectable({
  providedIn: CoreModule
})
export class StoreService {
  
  constructor(
    private httpClient: HttpClient
    , private stateService: StateService
  ) { }

  getCategoryList() {
    const path = "products/category/list/";
    const fullPath = this.stateService.getFullPath(path);
    console.log(fullPath);
    
    return this.httpClient.get<store_list[]>(fullPath);
  }

  getProductInfo(id: number){
    const path = `products/product/${id}/`;
    const fullPath = this.stateService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

} 