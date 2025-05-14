import AnalysisTable from "./AnalysisTable";
import "./History.css";

function History() {
    return (
        <div className="history-container">
            <h1>Analysis History</h1>
            <p>View your past plant analyses</p>
            <AnalysisTable />
        </div>
    );
}

export default History;
