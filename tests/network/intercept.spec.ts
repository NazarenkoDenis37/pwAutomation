import {test} from '@playwright/test'

test('intercept', async ({page}) =>{
    await page.route('**\/*.{pnj,jpg,jpeg,svg}', (body)=>{
        if(body.request().resourceType() === 'image'){
            body.abort()
        }else{
            body.continue()
        }
        //console.log(request, 'request=====')
    })
    await page.pause()
    await page.goto('https://coding.pasv.us/')
    await page.pause()
})