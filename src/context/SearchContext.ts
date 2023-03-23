import { createContext, useContext } from "react";

type SearchContextType = {
    search: string;
    setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
    search: "",
});

export const useSearchContext = () => {
    const { search, setSearch } = useContext(SearchContext);

    if (!setSearch) {
        throw Error("must provide setSearch function");
    }

    return { search, setSearch };
};