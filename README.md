# areal-articles

## Устанавливаем репозиторий

```sh
git clone https://github.com/kidnamedgender/currency-converter-mobile.git
```

```
cd currency-converter-mobile
```

## Устанавливаем зависимости клиента

```sh
cd client
```

```
npm i
```

```
cd ..
```

## Устанавливаем зависимости сервера

```sh
cd server
```

```
npm i
```

## Заполняем переменные окружения актуальными данными

/server/.env

```
DB_HOST=postgres
DB_USER
DB
DB_PASSWORD
DB_PORT
PORT
```

## Заполняем конфигурацию миграции актуальными данными

/server/knexfile.ts

## Мигрируем таблицы и сиды

```
npx knex migrate:latest
```

## Запускаем сервер

```
npm run start:dev
```

## Заполняем интсанс axios`а актуальным URL

/client/axios.js

```
baseURL: `http://[IP устройства]:[Ваш порт]`,
```

## Запускаем клиент

```
npx react-native start
```

## В новом терминале запускаем проект (эмулятор или физическое устройство)

```
npx react-native run-android
```