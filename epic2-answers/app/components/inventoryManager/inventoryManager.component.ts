/**
 * Created by Franz on 3/28/2017.
 */

import {Component} from "@angular/core";
import {jewelryRackList, allList} from "../../util/constants.various";

@Component({
  selector:'inventory-manager',
  templateUrl: 'app/components/inventoryManager/inventoryManager.component.html'
}) export class InventoryManager {
  selectedContext:string;
  jewelryRackListName:string = jewelryRackList;
  allListName:string = allList;

  constructor() {}

  setContext(context:string) {
    this.selectedContext = context;
  }
}