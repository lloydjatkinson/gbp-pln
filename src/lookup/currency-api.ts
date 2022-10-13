export type Query = Readonly<{
    amount: number;
    from: string;
    to: string;
}>;

export type Info = Readonly<{
    rate: number;
    timestamp: number;
}>;

export type CurrencyResponse = Readonly<{
    date: Date;
    info: Info;
    query: Query;
    result: number;
    success: boolean;
}>;

export const fetchExchangeRate = async (from: string, to: string): Promise<CurrencyResponse> => {
    const response = await fetch(`https://api.exchangerate.host/convert?to=${to}&from=${from}`, {
        redirect: 'follow',
        headers: {
            'apikey': import.meta.env.FIXER_API_KEY,
        }
    });
    
    return await response.json() as CurrencyResponse;

    // const dev: CurrencyResponse = {
    //     "date": new Date("2022-10-13"),
    //     "info": {
    //       "rate": 5.604235,
    //       "timestamp": 1665664624
    //     },
    //     "query": {
    //       "amount": 1,
    //       "from": "GBP",
    //       "to": "PLN"
    //     },
    //     "result": 5.604235,
    //     "success": true
    //   }

    //   return await dev;
};