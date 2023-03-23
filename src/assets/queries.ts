import { gql } from "@apollo/client";

export const COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            native
        }
    }
`;

export const COUNTRY = gql`
    query GetCountry($code: ID!) {
        country(code: $code) {
            name
            native
            capital
            emoji
            currency
            continent {
                code
                name
            }
            languages {
                code
                name
                native
            }
        }
    }
`;
