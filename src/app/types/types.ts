export type CurrencyGeneric = {
    motd: {
        msg: string,
        url: string
    }
    success: boolean
    base: string,
    date: string,
    rates: object
}

export type CurrencyList = {
    base: string,
    date: string,
    rates: {
        ccu: string,
        price: number
    }[]
}