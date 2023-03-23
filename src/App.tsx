import { useState } from "react";
import { useQuery } from "@apollo/client";
import { COUNTRIES } from "./assets/queries";
import { SearchContext } from "./context/SearchContext";
import CountryList from "./components/CountryList/CountryList";
import CountryFilter from "./components/CountryFilter/CountryFilter";
import ToTop from "./components/ToTop/ToTop";

function App() {
    const [search, setSearch] = useState<string>("");
    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <h1>An Error occurred ({error.name})</h1>
                <span>{error.message}</span>
            </div>
        );
    }

    return (
        <div className="App">
            <SearchContext.Provider value={{ search, setSearch }}>
                <CountryFilter />
                <CountryList countries={data.countries} />
            </SearchContext.Provider>
            <ToTop />
        </div>
    );
}

export default App;
