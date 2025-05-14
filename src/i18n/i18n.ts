import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'kk',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      kk: {
        translation: {
          // Dashboard
          "AIPlants": "AI Өсимликлер",
          "Dashboard": "Чат",
          "History": "Тарийх",
          "Analysis": "Анализ",
          "Chat": "Чат",
          "Analytics": "Аналитика",
          // Chatbot
          "Ask about plants": "Өсимликлер ҳаққында сораң",
          "Type your message": "Хабарламаңызды жазың",
          "Upload Image": "Сүўрет жүклеў",
          "Processing": "Ислеў",
          "Analyzing": "Анализлеў",
          // Analytics
          "Overview": "Улыўма көриниси",
          "Growth Analysis": "Өсиў анализи",
          "Health Status": "Денсаўлық жағдайы",
          "Nutrient Levels": "Азық заттар дәрежеси",
          "Plant Growth Rate": "Өсимликтиң өсиў тезлиги",
          "Disease Risk": "Кеселлик қәўпи",
          "Soil Quality": "Топырақ сапасы",
          "Water Status": "Суў жағдайы",
          // History
          "Date": "Сәне",
          "Image": "Сүўрет",
          "Results": "Нәтийжелер",
          "Details": "Толық мағлыўмат",
          "No history available": "Тарийх жоқ",
          // Plant Analysis
          "Plant Analytics": "Өсимлик аналитикасы",
          "Total Uploads": "Барлық жүклеўлер",
          "Healthy Plants": "Саў өсимликлер",
          "Diseased Plants": "Кесел өсимликлер",
          "Disease Distribution": "Кеселликлердиң тарқалыўы",
          "Plant Distribution": "Өсимликлердиң тарқалыўы",
          "Hourly Uploads": "Саатлық жүклеўлер",
          "Healthy": "Саў",
          "Diseased": "Кесел",
          // Chat
          "Send": "Жибериў",
          "Choose Image": "Сүўрет таңлаў",
          "Image Selected": "Сүўрет таңланды",
          // History
          "Analysis History": "Анализ тарийхы",
          "View your past plant analyses": "Өткен өсимлик анализлерин көриў",
          "Plant Name": "Өсимлик аты",
          "Status": "Ҳалаты",
          "Time": "Ўақыт",
          "Plant Details": "Өсимлик мағлыўматлары",
          "Type": "Түри",
          "No results found": "Нәтийжелер табылмады",
          "Image size is too large. Please upload a smaller image.": "Сүўреттиң өлшеми үлкен. Кишилеў сүўрет жүклеңиз.",
          "Sorry, there was an error processing the image. Please try again with a different image.": "Кеширерсиз, сүўретти қайта ислеўде қәтелик жүз берди. Басқа сүўрет пенен қайталап көриңиз."
        }
      },
      ru: {
        translation: {
          // Dashboard
          "AIPlants": "ИИ Растения",
          "Dashboard": "Панель управления",
          "History": "История",
          "Analysis": "Анализ",
          "Chat": "Чат",
          "Analytics": "Аналитика",
          // Chatbot
          "Ask about plants": "Спросите о растениях",
          "Type your message": "Введите ваше сообщение",
          "Upload Image": "Загрузить изображение",
          "Processing": "Обработка",
          "Analyzing": "Анализ",
          // Analytics
          "Overview": "Обзор",
          "Growth Analysis": "Анализ роста",
          "Health Status": "Состояние здоровья",
          "Nutrient Levels": "Уровни питательных веществ",
          "Plant Growth Rate": "Скорость роста растения",
          "Disease Risk": "Риск заболевания",
          "Soil Quality": "Качество почвы",
          "Water Status": "Состояние воды",
          // History
          "Date": "Дата",
          "Image": "Изображение",
          "Results": "Результаты",
          "Details": "Подробности",
          "No history available": "История отсутствует",
          // Plant Analysis
          "Plant Analytics": "Аналитика растений",
          "Total Uploads": "Всего загрузок",
          "Healthy Plants": "Здоровые растения",
          "Diseased Plants": "Больные растения",
          "Disease Distribution": "Распределение болезней",
          "Plant Distribution": "Распределение растений",
          "Hourly Uploads": "Почасовые загрузки",
          "Healthy": "Здоровые",
          "Diseased": "Больные",
          // Chat
          "Send": "Отправить",
          "Choose Image": "Выбрать изображение",
          "Image Selected": "Изображение выбрано",
          // History
          "Analysis History": "История анализов",
          "View your past plant analyses": "Просмотр прошлых анализов растений",
          "Plant Name": "Название растения",
          "Status": "Статус",
          "Time": "Время",
          "Plant Details": "Детали растения",
          "Type": "Тип",
          "No results found": "Результаты не найдены",
          "Image size is too large. Please upload a smaller image.": "Размер изображения слишком большой. Пожалуйста, загрузите изображение меньшего размера.",
          "Sorry, there was an error processing the image. Please try again with a different image.": "Извините, произошла ошибка при обработке изображения. Пожалуйста, попробуйте еще раз с другим изображением."
        }
      }
    }
  });

export default i18n;
