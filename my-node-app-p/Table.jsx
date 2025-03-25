import { useState } from "react";
import "./Table.css";

const pageSize = 5;

const columns = [
    "Vehicle Id",
    "Progress",
    "Status",
    "Active",
    ""
]

const rows = [
    [
        <Checkbox />,
        <Id id="7430231" />,
        <Progress progress = {100} />,
        <Status status = "available" />,
        <Switch />,
        <More />,
    ],
];

const Pagination = 
    ({pagenNumber, totalPages, totalRows, goToPage })=>{
            return (
                <footer className = "table-footer">
                    <div className = "table-pageination">
                        {[...Array(totalPages)].map((_, index)=>(
                            <button
                            onClick={()=> goToPage(index + 1)}
                            disabled={pageNumber === index +1}
                            className = { pageNumber === index + 1
                                ? "active" : ""}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <p>
                        Viewing{" "}<em>{pageName === 1
                            ? 1:(pageNumber - 1) * pageSize +1}- 
                            {pageNumber * pageSize}
                            </em>{" "}
                            of<em>{totalRows}</em> rows
                    </p>
                </footer>
            );
        };
export const Table = ({columns, rows})=>{
    const [pageNumber,setPageNumber]=useState(1);
    const totalPages = Math.ceil(rows.length/pageSize);
    const goToPage = page => setPageNumber(page);
    const paginated = rows.slice((pageNumber -1 )*pageSize, pageNumber * pageSize);
    return (
        <>
            <table className = "table">
                <thead>
                    <tr>
                        {columns.map(columns =>(
                            <th>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginated.map(row => (
                        <tr>
                            {row.map(control => (
                                <td>{control}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                pageNumber={pageNumber}
                totalPages={totalPages}
                totalRows={rows.length}
                goToPage={goTOPage}
            />
        </>
    )
}