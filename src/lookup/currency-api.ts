export type Query = Readonly<{
    amount: number;
    from: string;
    to: string;
}>;

export type Info = Readonly<{
    rate: number;
    timestamp: number;
}>;

export type FixerCurrencyResponse = Readonly<{
    date: Date;
    info: Info;
    query: Query;
    result: number;
    success: boolean;
}>;

export const fetchCurrency = async (from: string, to: string, amount: number) => {
    const response = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
        redirect: 'follow',
        headers: {
            'apikey': import.meta.env.FIXER_API_KEY,
        }
    });

    const currency = await response.json() as FixerCurrencyResponse;
};