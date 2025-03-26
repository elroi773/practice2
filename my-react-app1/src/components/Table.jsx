import { useState } from "react";
import "./Table.css";

// 페이지당 보여줄 행 개수
const pageSize = 5;

// 테이블 컬럼 정의
const columns = ["Vehicle Id", "Progress", "Status", "Active", "Actions"];

// 더미 데이터 (UI 테스트용)
const rows = [
    ["7430231", "100%", "Available", "✔", "⋮"],
    ["7430232", "75%", "In Progress", "✔", "⋮"],
    ["7430233", "50%", "Pending", "✖", "⋮"],
    ["7430234", "25%", "Delayed", "✔", "⋮"],
    ["7430235", "0%", "Not Started", "✖", "⋮"],
];

// ✅ 페이지네이션 컴포넌트
const Pagination = ({ pageNumber, totalPages, totalRows, goToPage }) => {
    return (
        <footer className="table-footer">
            <div className="table-pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        disabled={pageNumber === index + 1}
                        className={pageNumber === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <p>
                Viewing{" "}
                <em>
                    {pageNumber === 1 ? 1 : (pageNumber - 1) * pageSize + 1}-
                    {Math.min(pageNumber * pageSize, totalRows)}
                </em>{" "}
                of <em>{totalRows}</em> rows
            </p>
        </footer>
    );
};

// ✅ 메인 Table 컴포넌트
export const Table = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = Math.ceil(rows.length / pageSize);
    const goToPage = (page) => setPageNumber(page);

    // 현재 페이지 데이터 가져오기
    const paginated = rows.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginated.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination pageNumber={pageNumber} totalPages={totalPages} totalRows={rows.length} goToPage={goToPage} />
        </>
    );
};
