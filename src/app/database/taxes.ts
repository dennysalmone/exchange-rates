import { TaxeRatesList, TaxBacket } from "src/app/types/types";

export const taxeRates: TaxeRatesList = [
    {name: 'Canada', provStatus: TaxBacket.Federal, taxes: [
        {backet: 0, rate: 0.1500},
        {backet: 49021, rate: 0.2050},
        {backet: 98041, rate: 0.2600},
        {backet: 151979, rate: 0.2900},
        {backet: 216511, rate: 0.3300},
    ]},
    {name: 'Alberta', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.1000},
        {backet: 131221, rate: 0.1200},
        {backet: 157465, rate: 0.1300},
        {backet: 209953, rate: 0.1400},
        {backet: 314928, rate: 0.1500},
    ]},
    {name: 'British Columbia', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0506},
        {backet: 42185, rate: 0.0770},
        {backet: 84370, rate: 0.1050},
        {backet: 96867, rate: 0.1229},
        {backet: 117624, rate: 0.1470},
        {backet: 159483, rate: 0.1680},
        {backet: 222420, rate: 0.2050},
    ]},
    {name: 'Manitoba', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.1080},
        {backet: 33724, rate: 0.1275},
        {backet: 72885, rate: 0.1740},
    ]},
    {name: 'New Brunswick', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0968},
        {backet: 43836, rate: 0.1482},
        {backet: 87672, rate: 0.1652},
        {backet: 142535, rate: 0.1784},
        {backet: 162383, rate: 0.2030},
    ]},
    {name: 'Newfoundland and Labrador', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0870},
        {backet: 38082, rate: 0.1450},
        {backet: 76162, rate: 0.1580},
        {backet: 135974, rate: 0.1730},
        {backet: 190363, rate: 0.1830},
    ]},
    {name: 'Nova Scotia', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0879},
        {backet: 29591, rate: 0.1495},
        {backet: 59181, rate: 0.1667},
        {backet: 93001, rate: 0.1750},
        {backet: 150000, rate: 0.2100},
    ]},
    {name: 'Ontario', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0505},
        {backet: 45143, rate: 0.0915},
        {backet: 90288, rate: 0.1116},
        {backet: 150001, rate: 0.1216},
        {backet: 220000, rate: 0.1316},
    ]},
    {name: 'Prince Edward Island', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0980},
        {backet: 31985, rate: 0.1380},
        {backet: 63969, rate: 0.1670},
    ]},
    {name: 'Quebec', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.1500},
        {backet: 44546, rate: 0.2000},
        {backet: 89081, rate: 0.2400},
        {backet: 108390, rate: 0.2575},
    ]},
    {name: 'Saskatchewan', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.1050},
        {backet: 45678, rate: 0.1250},
        {backet: 130506, rate: 0.1450},
    ]},
    {name: 'Northwest Territories', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0590},
        {backet: 44397, rate: 0.0860},
        {backet: 88797, rate: 0.1220},
        {backet: 144362, rate: 0.1405},
    ]},
    {name: 'Yukon', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.0640},
        {backet: 49021, rate: 0.0900},
        {backet: 98041, rate: 0.1090},
        {backet: 151979, rate: 0.1280},
        {backet: 500000, rate: 0.1500},
    ]},
    {name: 'Nunavut', provStatus: TaxBacket.Province, taxes: [
        {backet: 0, rate: 0.1500},
        {backet: 44546, rate: 0.2000},
        {backet: 89081, rate: 0.2400},
        {backet: 108390, rate: 0.2575},
    ]},
]

