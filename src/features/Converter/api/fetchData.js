import { axios } from "../../../lib/axios";

export const fetchRates = async (currencyOne) => {
    const {data} = await axios.get(
        `/latest?base=${currencyOne}&apikey=VGwyV6NY818BPd8F8QiM9U2Xn81ufqHc`
    );
    return data;
};

export const fetchSymbols = async () => {
    const {data} = await axios.get(
        `/symbols?apikey=VGwyV6NY818BPd8F8QiM9U2Xn81ufqHc`        
    );
    //console.log(import.meta.env.API_KEY);
    return data;
};