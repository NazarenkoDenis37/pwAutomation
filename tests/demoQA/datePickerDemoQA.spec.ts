import {test as it} from '@playwright/test'
import {DatePicker} from '../../page_object/demoQA/widgets/DatePicker'

it.describe('DATA PICKER FOR DEMOQA', () =>{
    it('working with data picker', async ({page}) =>{
        let datePicker = new DatePicker(page)
        await page.goto('https://demoqa.com/date-picker')
        await datePicker.verifyHeader()
    })
})