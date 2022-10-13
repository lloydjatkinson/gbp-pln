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
        redirect: 'follow'
    });
    
    return await response.json() as CurrencyResponse;
};