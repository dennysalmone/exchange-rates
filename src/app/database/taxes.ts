import { TaxeRatesList, TaxBacket, Contribution } from "src/app/types/types";
import { ProvincesList } from "./provinces";

export const cppContribution: Contribution = {
    maxContr: 952.74,
    rate: 0.0570,
}

export const eiContribution: Contribution = {
    maxContr: 3499.80,
    rate: 0.0158,
}

export const taxeRates: TaxeRatesList[] = [
    {name: 'Canada', provStatus: TaxBacket.Federal, basicPersonalAmount: 14398, taxes: [
        {backet: 216511, rate: 0.3300},
        {backet: 151979, rate: 0.2900},
        {backet: 98041, rate: 0.2600},
        {backet: 49021, rate: 0.2050},
        {backet: 0, rate: 0.1500},
    ]},
    {name: ProvincesList.AB, provStatus: TaxBacket.Province, basicPersonalAmount: 19369, taxes: [
        {backet: 314928, rate: 0.1500},
        {backet: 209953, rate: 0.1400},
        {backet: 157465, rate: 0.1300},
        {backet: 131221, rate: 0.1200},
        {backet: 0, rate: 0.1000},
    ]},
    {name: ProvincesList.BC, provStatus: TaxBacket.Province, basicPersonalAmount: 11302, taxes: [
        {backet: 222420, rate: 0.2050},
        {backet: 159483, rate: 0.1680},
        {backet: 117624, rate: 0.1470},
        {backet: 96867, rate: 0.1229},
        {backet: 84370, rate: 0.1050},
        {backet: 42185, rate: 0.0770},
        {backet: 0, rate: 0.0506}, 
    ]},
    {name: ProvincesList.MB, provStatus: TaxBacket.Province, basicPersonalAmount: 10145, taxes: [
        {backet: 72885, rate: 0.1740},
        {backet: 33724, rate: 0.1275},
        {backet: 0, rate: 0.1080},
        
    ]},
    {name: ProvincesList.NB, provStatus: TaxBacket.Province, basicPersonalAmount: 10817, taxes: [
        {backet: 162383, rate: 0.2030},
        {backet: 142535, rate: 0.1784},
        {backet: 87672, rate: 0.1652},
        {backet: 43836, rate: 0.1482},
        {backet: 0, rate: 0.0968},
    ]},
    {name: ProvincesList.NL, provStatus: TaxBacket.Province, basicPersonalAmount: 9803, taxes: [
        {backet: 190363, rate: 0.1830},
        {backet: 135974, rate: 0.1730},
        {backet: 76162, rate: 0.1580},
        {backet: 38082, rate: 0.1450},
        {backet: 0, rate: 0.0870},
    ]},
    {name: ProvincesList.NS, provStatus: TaxBacket.Province, basicPersonalAmount: 11481, taxes: [
        {backet: 150000, rate: 0.2100},
        {backet: 93001, rate: 0.1750},
        {backet: 59181, rate: 0.1667},
        {backet: 29591, rate: 0.1495},
        {backet: 0, rate: 0.0879},
    ]},
    {name: ProvincesList.ON, provStatus: TaxBacket.Province, basicPersonalAmount: 11141, taxes: [
        {backet: 220000, rate: 0.1316},
        {backet: 150001, rate: 0.1216},
        {backet: 90288, rate: 0.1116},
        {backet: 45143, rate: 0.0915},
        {backet: 0, rate: 0.0505},
    ]},
    {name: ProvincesList.PE, provStatus: TaxBacket.Province, basicPersonalAmount: 11250, taxes: [
        {backet: 63969, rate: 0.1670},
        {backet: 31985, rate: 0.1380},
        {backet: 0, rate: 0.0980},
    ]},
    {name: ProvincesList.QC, provStatus: TaxBacket.Province, basicPersonalAmount: 16143, taxes: [
        {backet: 108390, rate: 0.2575},
        {backet: 89081, rate: 0.2400},
        {backet: 44546, rate: 0.2000},
        {backet: 0, rate: 0.1500},
    ]},
    {name: ProvincesList.SK, provStatus: TaxBacket.Province, basicPersonalAmount: 16615, taxes: [
        {backet: 130506, rate: 0.1450},
        {backet: 45678, rate: 0.1250},
        {backet: 0, rate: 0.1050},
    ]},
    {name: ProvincesList.NT, provStatus: TaxBacket.Province, basicPersonalAmount: 15609, taxes: [
        {backet: 144362, rate: 0.1405},
        {backet: 88797, rate: 0.1220},
        {backet: 44397, rate: 0.0860},
        {backet: 0, rate: 0.0590},
    ]},
    {name: ProvincesList.YT, provStatus: TaxBacket.Province, basicPersonalAmount: 14398, taxes: [
        {backet: 500000, rate: 0.1500},
        {backet: 151979, rate: 0.1280},
        {backet: 98041, rate: 0.1090},
        {backet: 49021, rate: 0.0900},
        {backet: 0, rate: 0.0640},
    ]},
    {name: ProvincesList.NU, provStatus: TaxBacket.Province, basicPersonalAmount: 16862, taxes: [
        {backet: 108390, rate: 0.2575},
        {backet: 89081, rate: 0.2400},
        {backet: 44546, rate: 0.2000},
        {backet: 0, rate: 0.1500},
    ]},
]

