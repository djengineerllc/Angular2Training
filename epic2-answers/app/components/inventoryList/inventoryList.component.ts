/**
 * Created by fzemen on 3/7/17.
 */

import _ = require('lodash');
import {Component, OnInit, ElementRef, AfterViewInit, OnDestroy, Input} from "@angular/core";
import {InventoryService} from "../../services/inventoryService.service";
import {IInventoryItem} from "../../shapes/IInventoryItem";
import {allList, jewelryRackList} from "../../util/constants.various";

@Component({
  selector:'inventory-list',
  templateUrl: 'app/components/inventoryList/inventoryList.component.html',
  styleUrls: ['app/components/inventoryList/inventoryList.component.css']
})
export class InventoryList implements OnInit, OnDestroy, AfterViewInit {

  private _context:string = jewelryRackList;
  @Input() set context(context:string) {
    if(this._context !== context) {
      if(context) {
        this._context = context;
      } else {
        this._context = allList;
      }
      this.updateInventoryListItems();
    }
  }
  get context():string {
    return this._context;
  }

  items:IInventoryItem[] = [];
  currentItem:IInventoryItem;
  input:HTMLInputElement;

  constructor(private inventoryService:InventoryService, private el:ElementRef) {}

  ngOnInit() {
    console.log('Instance of InventoryList initialized');
    this.updateInventoryListItems()
  }

  updateInventoryListItems() {
    this.inventoryService.getItems(this.context)
      .then((items: IInventoryItem[]) => {
        this.items = items;
      });
  }

  ngOnDestroy() {
    console.log('Instance of InventoryList destroyed');
  }

  ngAfterViewInit() {
    let found:HTMLCollection = this.el.nativeElement.getElementsByTagName('input');
    if(!found || found.length !== 1) {
      console.log(new Error('InventoryList.ngAfterViewInit Unreachable code'));
    } else {
      this.input = <HTMLInputElement> found.item(0);
      this.input.focus();
    }
  }

  setCurrentItem(item:IInventoryItem) {
    this.currentItem = item;
    this.inventoryService.setCurrentItem(this.currentItem);
  }

  findItem() {
    let searchValue = this.input.value;
    _.find(this.items,(item:IInventoryItem)=>{
      if(item.name === searchValue) {
        this.setCurrentItem(item);
        return false; // Break out of the find loop.
      }
    });
  }
}