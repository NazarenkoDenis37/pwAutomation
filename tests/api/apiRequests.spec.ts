import {test, expect} from '@playwright/test'

const url = 'https://reqres.in'


test.describe('API REQUESTS',  () =>{
    test('testing GET request', async ({request}) =>{
        const res = await request.get(`${url}/api/users/2`)
        // console.log(res, 'response+++++++')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        //console.log(resBody, 'resBody++++++')
        expect(resBody.data.id).toBe(2)
    })
    //TODO: fix this test in future
    test('testing POST request', async ({request}) =>{
        const res = await request.post(`${url}/api/user`, {
            data: {
                id: 222
            }
        })
        console.log(res, 'response+++++++')
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'resBody+++++++')
    })

    test('testing POST request for registration', async ({request}) =>{
        const res = await request.post(`${url}/api/register`, {
            data: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        })
        console.log(res, 'response+++++++')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'resBody+++++++')
        expect(resBody.id).toBe(4)
    })
    test('testing PUT request for registration', async ({request}) =>{
        const res = await request.put(`${url}/api/users/2`, {
            data: {
                email: "denis@gmail.com",
                password: "denis"
            }
        })
        console.log(res, 'response+++++++')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'resBody+++++++')
        expect(resBody.email).toBe('denis@gmail.com')
    })
    test('testing DELETE request for registration', async ({request}) =>{
        const res = await request.delete(`${url}/api/users/2`)
        console.log(res, 'response+++++++')
        expect(res.status()).toBe(204)
        const resBody = await res.text()
        console.log(resBody, 'resBody+++++++')
    })
    test.only('testing PATCH request for user', async ({request}) =>{
        const res = await request.patch(`${url}/api/users/2`, {
            data: {
                name: "Denis"
            }
        })
        console.log(res, 'response+++++++')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'resBody+++++++')
        expect(resBody.name).toBe('Denis')
    })
})