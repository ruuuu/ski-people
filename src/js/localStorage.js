

export const localStorageSave = (key, data) => localStorage.setItem(key, JSON.stringify(data)); // записываем в лок хранилище(хрнаится ввиде строки)


export const localStorageLoad = (key) => JSON.parse(localStorage.getItem(key)) || []; // считываем с лок хранилища, получим [{},{}]