import AnalysisTable from "./AnalysisTable";
import "./History.css";
import { useTranslation } from 'react-i18next';

function History() {
    const { t } = useTranslation();
    
    return (
        <div className="history-container">
            <h1>{t('Analysis History')}</h1>
            <p>{t('View your past plant analyses')}</p>
            <AnalysisTable />
        </div>
    );
}

export default History;
