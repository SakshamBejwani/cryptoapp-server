import express from 'express'
import cors from 'cors'
import coinmarket from './routes/coinmarket.js'
import bingnews from './routes/bingnews.js'
import dotenv from 'dotenv'
import axios from 'axios'
import fetch from 'node-fetch';

const app = express()
app.use(cors())

dotenv.config()

const coinMarketBaseUrl = "https://pro-api.coinmarketcap.com/"
export const coinMarketServerUrl = coinMarketBaseUrl + "v1/"
//bing news api url definition
const bingNewsBaseApiUrl = "https://bing-news-search1.p.rapidapi.com/news/"
export const bingNewsSearchUrl = bingNewsBaseApiUrl + "search"
// coinRanking API
export const coinRankingBaseUrl='https://coinranking1.p.rapidapi.com'


// latest crypto
app.get('/cryptocurrency/latest', async (req, res) => {
    await fetch(coinMarketServerUrl+'cryptocurrency/listings/latest' , {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': 'dbef7867-c938-4050-ab7d-5b81426209f0',
        
        }})

    .then((response)=>response.json()) 
    .then(data => res.json(data).status(200))
    .catch((error)=>{res.status(404).json({message: error.message})})
 })

//  specific coin data
    app.get('/cryptocurrency/info/:crypto', async (req, res) => {
        const { crypto } = req.params;
         
        await fetch(coinMarketServerUrl+'cryptocurrency/info?symbol='+crypto , {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'dbef7867-c938-4050-ab7d-5b81426209f0',
                

        }})

    .then((response)=>response.json()) 
    .then(data => res.json(data).status(200))
    .catch((error)=>{res.status(404).json({message: error.message})})
    })

    //  global Metrics
    app.get('/global-metrics/quotes/latest', async (req, res) => {
        
        await fetch(coinMarketServerUrl+'global-metrics/quotes/latest' , {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'dbef7867-c938-4050-ab7d-5b81426209f0',
                

        }})

    .then((response)=>response.json()) 
    .then(data => res.json(data).status(200))
    .catch((error)=>{res.status(404).json({message: error.message})})
    })

    // COIN QUOTES
    app.get('/cryptocurrency/quote/:cryptocoin', async (req, res) => {
        const { cryptocoin } = req.params;
        
        await fetch(coinMarketServerUrl+'cryptocurrency/quotes/latest?symbol=' + cryptocoin , {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'dbef7867-c938-4050-ab7d-5b81426209f0',
                

        }})

    .then((response)=>response.json()) 
    .then(data => res.json(data).status(200))
    .catch((error)=>{res.status(404).json({message: error.message})})
    
    })




app.get('/', (req, res) => {
    res.send('Navigate to ---> /cryptocurrency or /news  <--- for REST API ussage: Saksham Bejwani')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT)
