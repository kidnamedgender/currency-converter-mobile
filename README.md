# currency-converter-mobile

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

## Заполняем переменные окружения сервера актуальными данными

/server/.env

```
DB_HOST=
DB_USER=
DB=
DB_PASSWORD=
DB_PORT=
PORT=
URL=
```

## Заполняем конфигурацию миграции актуальными данными

/server/knexfile.ts

## Мигрируем таблицы

```
npx knex migrate:latest
```

## Запускаем сервер

```
npm run start:dev
```

## Заполняем переменные окружения клиента актуальным URL

/client/.env

```
HOST=
PORT=
```

## Запускаем клиент

```
npx react-native start
a
```
