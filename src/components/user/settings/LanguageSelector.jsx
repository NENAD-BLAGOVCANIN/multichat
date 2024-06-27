import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {

    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English', code: 'en' },
        zh: { nativeName: 'Chinese', code: 'zh' }
    };


    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className='d-flex align-items-center pt-3'>
            <select onChange={handleChange} value={currentLanguage} 
                className="bg-transparent color-text border-0 w-fit">
                {Object.keys(lngs).map((lng) => (
                    <option key={lng} value={lng}>
                        {lngs[lng].nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
