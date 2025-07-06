const myPromise = new Promise((resolve, reject) => {
  // здесь запускаем асинхронную работу
  setTimeout(() => {
    const success = true;       // представим результат
    if (success) resolve('OK'); // обещание выполнено
    else reject('ERROR');       // обещание отклонено
  }, 1000);
});

myPromise
    .then(value => {
        console.log('Promise resolved with value:', value);
    })
    .catch(error => {
        console.error('Promise rejected with error:', error);
    })
    .finally(() => {
        console.log('Promise completed (either resolved or rejected)');
    });


async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log('Получили данные:', data);
  } catch (err) {
    console.error('Ошибка при fetch:', err);
  } finally {
    console.log('Запрос завершён');
  }
}

fetchData();
