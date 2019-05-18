// import express from 'express'
// import path from 'path'
// import App from './src/containers/App'
// import { renderToString } from 'react-dom/server'

// const app = express()

// app.use(express.static("./dist"))

// app.get('*', (req, res) => {
//     console.log('request start...')
// })

// app.listen(3000, ()=> {
//     console.log('running....');
// })
// app.get('/', (req, res)=> {
//     const layout = (<App />)
//     const appLayout = renderToString(layout)

//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     res.end(htmlTemplate(appLayout))
// })

// app.listen( 2048 )

// function htmlTemplate(appLayout) {
//     return `
//     <!DOCTYPE html>
//         <html>
//         <head>
//             <meta charset="utf-8">
//             <title>React SSR</title>
//         </head>
        
//         <body>
//             <div id="app">${ appLayout }</div>
//             <script src="./app.bundle.js"></script>
//         </body>
//         </html>
//     `
// }