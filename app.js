// imports
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

// Init configs
dotenv.config()
const app = express()
const port = process.env.PORT || 8000

// Middlewares
app.use( morgan( 'dev' ) )
app.use( cors() )

// Routes
app.get( '/', ( req, res ) => {
    res.send( 'Hello World' )
})

// Server Run
app.listen( port, err => {
    if( err ) console.log(err);
    console.log(`Server listen in port: ${ port }`);
})