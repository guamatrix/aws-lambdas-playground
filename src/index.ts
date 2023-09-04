const https = require('https')
const url = 'https://rickandmortyapi.com/api/character/149'

const handler = async (event: any, context: any) => {
  const promise = new Promise((resolve, reject) => {
    https.get(url, (res: any) => {
      console.log('SUCCESS')
      console.log(res)
      resolve(res.statusCode)
    }).on('error', (e: any) => {
      console.log('ERROR')
      reject(Error(e))
    })
  })
  return promise
}

// const handler = async (event: any, context: unknown) => {
//   console.log('Lambda running with event ...')
//   // console.log(event?.name)
//   const data = await https.get(url)
//   console.log('data ...')
//   console.log(data)

//   return {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: {
//       message: event?.data?.message,
//     }
//   }
// }

// const handler = async (event: any, context: unknown) => {
//     console.log('Lambda running with event ...')
//     console.log(event?.name)
//     const response = await (await fetch('https://rickandmortyapi.com/api/character/149', { method: 'GET' })).json()

//     return {
//       character: response,
//       message: event?.data?.message,
//       status: 200
//     }
// }

export { handler }