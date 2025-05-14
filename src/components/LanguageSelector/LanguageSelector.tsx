import { useTranslation } from 'react-i18next';
import { Select } from '@mantine/core';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <Select
      className="language-selector"
      value={i18n.language}
      onChange={handleLanguageChange}
      data={[
        { value: 'kk', label: 'Каракалпакша' },
        { value: 'ru', label: 'Русский' }
      ]}
    />
  );
};

export default LanguageSelector;
