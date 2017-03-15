/**
 * Created by fzemen on 3/14/17.
 */

import {Component} from '@angular/core';
import {IInventoryItem} from "../../shapes/IInventoryItem";
import {InventoryService} from "../../services/InventoryService.service";

@Component({
  selector: 'inventory-list',
  templateUrl: 'app/components/inventoryList/InventoryList.component.html',
  styleUrls: ['app/components/inventoryList/InventoryList.component.css']
})
export class InventoryList {
  context:string = 'Jewelry Rack';
  private _currentItem:IInventoryItem = undefined;

  get currentItem():IInventoryItem {
    if(this._currentItem !== undefined) {
      return this._currentItem;
    } else {
      return {};
    }
  }

  constructor(private inventoryService:InventoryService) {
  }

  getItems():IInventoryItem[] {
    return this.inventoryService.getItems();
  }

  setCurrentItem(item:IInventoryItem) {
    this._currentItem = item;
  }
}