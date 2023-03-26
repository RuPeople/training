# My training project

Hello there 👋

Это мой сайд-проджект, в котором я применяю все интересные мне технологии

Посмотреть проект - [Деплой](https://training-awa5o1rta-rupeople.vercel.app/)

Тут пока не очень с визуалом, т.к. всё самое интересное в коде

---

### Краткий экскурс по технолоигям:

Архитектура - [Feature Sliced Design](https://feature-sliced.design/)

#### Стек:
* [React](https://react.dev/)
* TypeScript
* [Redux-Toolkit](https://redux-toolkit.js.org/)
* [Jest](https://jestjs.io/)
* [Storybook](https://storybook.js.org/)
* [Loki](https://loki.js.org/)
* [i18next](https://react.i18next.com/)

#### Из интересного:
* Webpack настроил с нуля
* Настроены линтеры (eslint, stylelint)
* [husky](https://typicode.github.io/husky/#/) для pre-commit хуков
* Настроен GitHub ci pipeline
* Есть reg-cli для генерации репортов регрессионного тестирования. Запускается командой `npm run test:ui:report`. Просмотреть изменения можно `.loki/report.html`
* Стили реализованы через css modules

## Как поднять проект
1. Поднять json-server командой `npm run start:dev:server`
2. Запустить проект `npm start`

## Экскурс по командам
1. Продакшн сборка - `npm run build:prod`
2. Прогнать unit тесты - `npm run test:unit`
3. Прогнать регрессионные тесты - `npm run test:ui`
4. Сгенерировать отчёт по регрессионным тестам - `npm run test:ui:report`
5. Подтвердить изменения компонентов - `npm run test:ui:ok`
6. Поднять Storybook - `npm run storybook`