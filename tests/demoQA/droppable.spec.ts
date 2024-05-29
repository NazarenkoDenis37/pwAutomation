import {test} from '@playwright/test'

test.describe('DROPPABLE', () => {
    test('droppable', async({page})=>{
        let dragAndDrop = new DragAndDrop(page)
        await dragAndDrop.open()
    })
})