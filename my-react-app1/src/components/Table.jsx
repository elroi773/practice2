import { useState } from "react";
import "./Table.css";

const pageSize = 5;
const columns = ["Vehicle Id", "Date", "Location", "Progress", "Status", "Active", "Actions"];

const sampleData = [
    { id: "7430231", date: "2025-03-26", location: "Seoul", progress: 100, status: "available", active: true },
    { id: "7430232", date: "2025-03-25", location: "Busan", progress: 75, status: "in transit", active: false },
    { id: "7430233", date: "2025-03-24", location: "Incheon", progress: 50, status: "maintenance", active: true },
    { id: "7430234", date: "2025-03-23", location: "Daegu", progress: 25, status: "repair", active: false },
    { id: "7430235", date: "2025-03-22", location: "Gwangju", progress: 10, status: "available", active: true }
];

const Table = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState(sampleData);
    const [search, setSearch] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    
    const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
    
    const handleSort = (column) => {
        const newOrder = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
        setSortColumn(column);
        setSortOrder(newOrder);
        setData([...data].sort((a, b) => newOrder === "asc" ? a[column] > b[column] ? 1 : -1 : a[column] < b[column] ? 1 : -1));
    };
    
    const filteredData = data.filter(row =>
        Object.values(row).some(value => value.toString().toLowerCase().includes(search))
    );
    
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginated = filteredData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={handleSearch} className="table-search" />
            <table className="table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column} onClick={() => handleSort(column.toLowerCase())}>
                                {column} {sortColumn === column.toLowerCase() ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginated.map((row, index) => (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.date}</td>
                            <td>{row.location}</td>
                            <td>{row.progress}%</td>
                            <td>{row.status}</td>
                            <td>{row.active ? "✅" : "❌"}</td>
                            <td>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                                <button className="view">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>Prev</button>
                <span>Page {pageNumber} of {totalPages}</span>
                <button disabled={pageNumber === totalPages} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Table;
