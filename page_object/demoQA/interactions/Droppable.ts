import {Page} from '@playwright/test'
export class DragAndDrop {
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
}