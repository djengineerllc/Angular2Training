/** Created by pmoore on 3/14/17 */
import {Component} from "@angular/core";
import {InventoryService} from "../../services/InventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Component({
    selector: 'inventory-list',
    templateUrl: 'app/components/inventoryList/InventoryList.component.html',
    styleUrls: ['app/components/inventoryList/InventoryList.component.css']
})
export class InventoryList {
    context:string = 'Jewelry Rack';
    private _currentItem:IInventoryItem;
    items:IInventoryItem[] = [];
    get currentItem():IInventoryItem {
        return this._currentItem ? this._currentItem : {};
    }
    setCurrentItem(item:IInventoryItem) {
        console.info(item);
        this._currentItem = item;
    }
    constructor(private inventoryService:InventoryService){//set to private to give visibility to the class
        inventoryService.getItems('someContext')
            .then((items:IInventoryItem[])=>{
                this.items = items;
            });
    }
    getItems():IInventoryItem[] {
        return this.items;
    }
}