import { useSearchContext } from "../../context/SearchContext";
import styles from "./CountryFilter.module.scss";

const CountryFilter = () => {
    const { setSearch } = useSearchContext();

    return (
        <div className={`container`}>
            <form>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search"
                    onInput={(e) => {
                        setSearch(e.currentTarget.value);
                    }}
                />
            </form>
        </div>
    );
};

export default CountryFilter;