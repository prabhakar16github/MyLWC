import { LightningElement,api } from 'lwc';

export default class ToDoItems extends LightningElement {
    @api itemName = 'New item';
}