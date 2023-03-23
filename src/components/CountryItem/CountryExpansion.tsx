import { useQuery } from "@apollo/client";
import { COUNTRY } from "../../assets/queries";
import { Country } from "../../assets/types";
import styles from "./CountryItem.module.scss";

interface CountryExpansionParams {
    countryCode: string;
}

const CountryExpansion = ({ countryCode }: CountryExpansionParams) => {
    const { loading, error, data } = useQuery(COUNTRY, {
        variables: { code: countryCode },
    });

    if (loading) {
        return (
            <div className={styles.countryExpansion}>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.countryExpansion}>
                <h1>An Error occurred ({error.name})</h1>
                <span>{error.message}</span>
            </div>
        );
    }

    const { 
            native, 
            capital, 
            currency, 
            continent, 
            languages 
        }: Country = data.country;

    return (
        <div className={styles.countryExpansion}>
            <span>Native name: {native}</span>
            <span>{capital ? `Capital: ${capital}` : "No capital"}</span>
            <span>{currency ? `Currency: ${currency}` : "No currency"}</span>
            {languages?.length ? (
                <div>
                    <span>
                        {languages.length > 1 ? "Languages:" : "Language:"}
                    </span>
                    <ul className={styles.languageList}>
                        {languages?.map((language) => {
                            return (
                                <li>
                                    - {language.code}, {language.name} (
                                    {language.native})
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                "No language"
            )}
            <span>
                Continent: {continent?.code}, {continent?.name}
            </span>
        </div>
    );
};

export default CountryExpansion;
