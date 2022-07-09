export type CurrencyGeneric = {
    motd: {
        msg: string,
        url: string
    }
    success: boolean
    base: string,
    date: string,
    rates: any
}

export type CurrencyList = {
    base: string,
    date: string,
    rates: Rates[]
}

export type Rates = {
    ccu: string,
    price: number,
    important: boolean,
    fullName: string
}