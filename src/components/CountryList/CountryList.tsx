import { Country } from "../../assets/types";
import { useSearchContext } from "../../context/SearchContext";
import CountryItem from "../CountryItem/CountryItem";
import styles from "./CountryList.module.scss";

interface CountryListParams {
    countries: Country[];
}

const CountryList = ({ countries }: CountryListParams) => {
    const { search } = useSearchContext();

    const filteredCountries = countries.filter((country) => {
        if (
            (search && country.name?.toLowerCase().includes(search)) ||
            country.code?.toLowerCase().includes(search) ||
            country.native?.toLowerCase().includes(search)
        ) {
            return country;
        }
    });

    return (
        <div className={`container`}>
            {filteredCountries.length ? (
                filteredCountries.map((country) => {
                    return <CountryItem key={country.code} country={country} />;
                })
            ) : (
                <span>No countries match your search value</span>
            )}
        </div>
    );
};

export default CountryList;
