import dotenv from 'dotenv'

dotenv.config()
import { coinMarketServerUrl } from "../index.js";

// for latest coins
export const getSpecificCoinMetaData = async (req, res) => {

    let headers = new Headers();
    headers.append('X-CMC_PRO_API_KEY', process.env.X-CMC_PRO_API_KEY);
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    await fetch(coinMarketServerUrl+'cryptocurrency/listings/latest' , { headers })
    .then((response)=>res.status(200).json(response)) 
    .catch((error)=>{res.status(404).json({message: error.message})})
}

// for specific coin data
export const getCoinMetaData = async (req, res) => {

    let headers = new Headers();
    headers.append('X-CMC_PRO_API_KEY', process.env.X-CMC_PRO_API_KEY);
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    await fetch(coinMarketServerUrl+'cryptocurrency/listings/latest' , { headers })
    .then((response)=>res.status(200).json(response)) 
    .catch((error)=>{res.status(404).json({message: error.message})})
}

// specific coin quote
export const getCoinQuote = async (req, res) => {

    let headers = new Headers();
    headers.append('X-CMC_PRO_API_KEY', process.env.X-CMC_PRO_API_KEY);
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    await fetch(coinMarketServerUrl+'cryptocurrency/listings/latest' , { headers })
    .then((response)=>res.status(200).json(response)) 
    .catch((error)=>{res.status(404).json({message: error.message})})
}
// global coin data
export const getGlobalStats = async (req, res) => {

    let headers = new Headers();
    headers.append('X-CMC_PRO_API_KEY', process.env.X-CMC_PRO_API_KEY);
    headers.append('Content-Type', 'application/json'); 
    headers.append('accept', 'application/json');

    await fetch(coinMarketServerUrl+'cryptocurrency/listings/latest' , { headers })
    .then((response)=>res.status(200).json(response)) 
    .catch((error)=>{res.status(404).json({message: error.message})})
}


