import {useState} from "react";
import countries from  '@/data/countries.json'


export function useCountries(){
    return{
        countries
    }
}
