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

export enum ProvinceType {
    Province = 'Province',
    Federal = 'Federal',
    Terretory = 'Terretory',
}

export type TaxeRatesList = {
    name: string,
    provStatus: ProvinceType
    taxes: any[]
} []

// export const taxeRates = [
//     {province: 'Canada', type: 1},