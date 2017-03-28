/**
 * Created by fzemen on 3/7/17.
 */

import _ = require('lodash');
import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";
import {BackendInventoryService} from "./backend/backendInventoryService.service";

@Injectable()
export class InventoryService {
  itemsByContext:{context:string,items:IInventoryItem[]}[] = [];
  currentItem:IInventoryItem;

  constructor(private backendInventoryService:BackendInventoryService) {}


  getItems(context:string):Promise<IInventoryItem[]> {
    let itemsForContext:{context:string,items:IInventoryItem[]} = _.find(this.itemsByContext,{context:context});
    if (itemsForContext) {
      return Promise.resolve(itemsForContext.items);
    } else {
      return this.backendInventoryService.getItems(context)
        .then((items:IInventoryItem[])=>{
          this.itemsByContext.push({context:context,items});
          return items;
        });
    }
  }

  setCurrentItem(item:IInventoryItem) {
    this.currentItem = item;
    console.log('Current Item:');
    console.log(this.currentItem);
  }
}