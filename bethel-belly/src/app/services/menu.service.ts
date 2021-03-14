import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private webRequestService: WebRequestService) { }

  getAllItems(name:string, description:string, price:string, category:string){
    return this.webRequestService.get('items');
  }
}
