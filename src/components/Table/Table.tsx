import React, { useState } from "react";
import styles from "./Table.module.scss";

interface TableParams {
    tHead: string[];
    tBody: string[][];
}

const Table = ({ tHead, tBody }: TableParams) => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    {tHead.map((headCell) => {
                        return <th>{headCell}</th>;
                    })}
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {tBody.map((row) => {
                    return (
                        <tr
                            className={styles.tableRow}
                            onClick={() => {
                                
                            }}
                        >
                            {row.map((cell) => {
                                return <td  className={styles.tableBodyCell}>{cell}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
