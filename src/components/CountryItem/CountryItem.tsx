import { useState } from "react";
import { Country } from "../../assets/types";
import CountryExpansion from "./CountryExpansion";
import styles from "./CountryItem.module.scss";

interface CountryItemParams {
    country: Country;
}

const CountryItem = ({ country }: CountryItemParams) => {
    const [isHover, setIsHover] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const { 
            code, 
            name 
        } = country;

    return (
        <div className={styles.countryItem}>
            <div
                className={styles.countryBar}
                onMouseOver={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                onClick={() => {
                    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
                }}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={`https://flagicons.lipis.dev/flags/4x3/${country.code.toLowerCase()}.svg`}
                        className={styles.image}
                    />
                </div>

                <div className={styles.nameContainer}>
                    <span className={styles.countryName}>{name}</span>
                    <span className={`bold`}>
                        {isHover ? (isExpanded ? "▲" : "▼") : code}
                    </span>
                </div>
            </div>

            {isExpanded ? <CountryExpansion countryCode={code} /> : ""}
        </div>
    );
};

export default CountryItem;
