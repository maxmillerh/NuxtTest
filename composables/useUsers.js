// composables/useUsers.js
export const useUsers = () => {
    const users = {
        1: { name: 'Даниил Петров', image: '1.jpg' },
        2: { name: 'Гавря Гавриловский', image: '2.webp' },
        3: { name: 'Мотя Зэк', image: '3.jpg' },
        4: { name: 'Садист Емеля', image: '4.jfif' },
        5: { name: 'Максим Усанов', image: '5.webp' },
        6: { name: 'Алехандро Александрович', image: '6.jpg' },
        7: { name: 'Дурная Слава', image: '7.jpg' },
        8: { name: 'Серьезный Гонзалес', image: '8.webp' },
        9: { name: 'Добрый Вечер', image: '9.jpg' },
        10: { name: 'Андрей Гусь', image: '10.webp' }
    };
    
    return { users };
};