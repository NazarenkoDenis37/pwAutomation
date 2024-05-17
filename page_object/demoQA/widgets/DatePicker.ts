import { Page, expect } from '@playwright/test'

export class DatePicker{
    public readonly page:Page
    constructor(page:Page){
        this.page = page;
    }
    get header(){
        return "h1"
    }
    async verifyHeader(){
        const header = this.page.locator(this.header)
        await expect(header).toContainText('Date Picker')
    }
}