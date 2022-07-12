import { ProvincesList } from "../database/provinces"

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

export enum TaxBacket {
    Province = 'Province',
    Federal = 'Federal',
}

export type IncomeData = {
    province: ProvincesList, 
    income: number
}

export type TaxeRatesList = {
    name: string,
    provStatus: TaxBacket,
    basicPersonalAmount: number,
    taxes: Taxes[]
}

export type Taxes = {
    backet: number,
    rate: number
}

export type Contribution = {
    maxContr: number,
    rate: number,
}

