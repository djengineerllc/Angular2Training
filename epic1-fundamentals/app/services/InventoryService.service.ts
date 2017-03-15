/** Created by pmoore on 3/14/17 */
import {Injectable} from "@angular/core"
import {IInventoryItem} from "../shapes/IInventoryItem";
import {BackendInventoryService} from "./backendServices/BackendInventoryService.service";
import * as _ from "lodash";

@Injectable()
class InventoryService {
    itemsByContext:{context:string,items:IInventoryItem[]}[] = [];
    constructor(private backendInventoryService:BackendInventoryService){}
    getItems(context:string):Promise<IInventoryItem[]> {
        let itemsForContext:{context:string,items:IInventoryItem[]} = _.find(this.itemsByContext,{context:context});
        return itemsForContext
            ? Promise.resolve(itemsForContext.items)
            : this.backendInventoryService.getItems().then((items:IInventoryItem[])=>{
                    this.itemsByContext.push({context:context,items});
                    return items;
              });
    }   
}
export { InventoryService }