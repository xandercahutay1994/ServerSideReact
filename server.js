// const express = require('express')

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = express()

app.use(express.static(path.join(__dirname, './dist')))
app.get('*', (req, res)=> {
    
    res.send('hello')
})

const port = 5000

app.listen(port, ()=>console.log('running', port))