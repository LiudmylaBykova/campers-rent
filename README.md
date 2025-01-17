# Campers - Додаток для оренди кемперів в Україні

### Додаток Campers надає платформу для оренди кемперів. Додаток складається з трьох основних сторінок:

1. **Домашня сторінка**: Загальний опис послуг, які надає компанія.
2. **Каталог кемперів**: Каталог кемперів за місцем знаходження, обладнанням та типом.
3. **Сторінка улюблених**: Сторінка, що містить оголошення, додані користувачем до улюблених.

## Використані технології:

- **React**: Бібліотека JavaScript для створення користувацьких інтерфейсів.
- **Redux**: Бібліотека для керування станом додатку.
- **React-hook-form/@hookform/resolvers**: Бібліотека для роботи з формами в React.
- **Yup**: Бібліотека для валідації форм у Formik.
- **Axios**: Promise-базований HTTP клієнт для браузера та Node.js.
- **Redux-Persist**: Зберігання та відновлення стану Redux.
- **React-Router**: Декларативна маршрутизація для React.
- **React Modal**: Бібліотека надає компоненти модальних діалогів для покращення взаємодії з користувачем. .
- **Toaster**: Бібліотека для виводу повідомлень користувачу.
- **@mui/material**: Бібліотека для стилізації елементів.
- **Clsx**: Утиліта для умовного об'єднання CSS класів для спрощення стилізації .
- **DatePicker**: Утиліта для управління елементом.
- **React-loader-spinner**: Утиліта яка надає стильні спінери для програм ReactJS.

## Встановлення:

1. Клонування репозиторію

`git clone https://github.com/LiudmylaBykova/campers-rent`

2. Встановлення залежностей

`npm install`

3. Запуск додатку

`npm run dev`

## Використання:

- ### Домашня сторінка

  Домашня сторінка надає загальний опис послуг, що надає компанія. Включає посилання на сторінку каталогу.

- ### Каталог кемперів

  Сторінка каталогу відображає список кемперів за місцем знаходження, обладнанням та типом.

- ### Сторінка улюблених

  Сторінка улюблених відображає список кемперів, доданих до улюблених користувачем. Користувачі можуть видаляти кемпери зі списку улюблених.

- ### Форма бронювання
  Форма бронювання дозволяє користувачам бронювати кемпери. Форма містить поля для імені користувача, електронної пошти, дати бронювання коментарів. Форма перевіряє правильність введених даних перед відправкою.
