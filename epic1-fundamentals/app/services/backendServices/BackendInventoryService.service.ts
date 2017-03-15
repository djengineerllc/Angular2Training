/** Created by pmoore on 3/14/17 */
import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Injectable()
export class BackendInventoryService {
    getItems():Promise<IInventoryItem[]> {
        let items:IInventoryItem[] = [
            { guid: 'item1', name: 'Bronze Earings', price: 100.00 },
            { guid: 'item49', name: 'Kardassian Broach', price: 55.00 },
            { guid: 'item74', name: 'Diamond Necklace #54', price: 99.99 }
        ];
        return new Promise((resolve,reject) => {
            setTimeout(()=>{ resolve(items); },1000);
        });
    }
}