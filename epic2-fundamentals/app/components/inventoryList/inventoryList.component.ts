/**
 * Created by fzemen on 3/7/17.
 */

import {Component} from "@angular/core";
import {InventoryService} from "../../services/inventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Component({
  selector:'inventory-list',
  templateUrl: 'app/components/inventoryList/inventoryList.component.html',
  styleUrls: ['app/components/inventoryList/inventoryList.component.css']
})
export class InventoryList {

  context:string = 'Jewelry Rack';

  items:IInventoryItem[] = [];
  currentItem:IInventoryItem;

  constructor(private inventoryService:InventoryService) {
    inventoryService.getItems('someContext')
      .then((items: IInventoryItem[]) => {
      this.items = items;
    });
  }
  setCurrentItem(item:IInventoryItem) {
    this.currentItem = item;
    this.inventoryService.setCurrentItem(this.currentItem);
  }
}