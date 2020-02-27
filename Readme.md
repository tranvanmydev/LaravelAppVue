# The AppVue Project

![Check CI And CD](https://github.com/tranvanmydev/LaravelAppVue/workflows/Check%20CI%20And%20CD/badge.svg?branch=develop)

## Requirements

- [Laravel 6.x](https://laravel.com/docs/6.0#server-requirements)
- [Docker >= 18.06.1-ce](https://docs.docker.com/install)
- [Docker-compose >= 1.22.0](https://docs.docker.com/compose/install)
- [PHP >= 7.2.18](https://www.php.net/downloads.php)
- [Mysql >= 5.7](https://dev.mysql.com/downloads/installer/)
- [Nginx > = nginx/1.15.7](https://www.nginx.com/resources/wiki/start/topic/tutorials/install/)
- [Redis >= 4.0.11](https://redis.io/topics/quickstart)
- [Node >= v8.11.3](https://nodejs.org/en/download/)
- [Yarn >= 1.7.0](https://yarnpkg.com/en/docs/install#debian-stable)

## Setup

- Copy file `.env.example` to `.env`,
- Modify `.env` config file (optional). If you modify the `mysql`, `mongo`, `redis` configurations in `.env` file, remember to modify the configurations in `docker-compose.yml` file too.

- Install or run Docker
```BASH
docker-compose up -d

# Stop
docker-compose stop
```

- Site will publish on 127.0.0.1:{`ports`} (`ports` config in docker-compose.yml > services > ngix > ports). Add domain to host file so we can access site by domain:{`ports`} (edit host in file ./ect/hosts)

```
127.0.0.1 vue_fw7.local
```
- Asset project with domain

```
vue_fw7.local:2025 or localhost:2020 or 127.0.0.1:2025
```

- `chmod` cache folders
```BASH
chmod -R 777 storage
chmod -R 777 bootstrap/cache
```

### Installation

- Go into the `workspace` container

```BASH
docker exec -it vue_fw7_workspace bash
```

```BASH
composer install
```
- Copy APP_KEY from .env.testing to .env

- Install node modules
```BASH
npm install
#or
yarn install
```

- Build
```BASH
npm run dev
#or
yarn run dev
```

- Run migration

```BASH
# Check Docker Container list, copy the `workspace` container name
docker ps

# Go into the `workspace` container
docker exec -it vue_fw7_workspace bash

# Run migration
php artisan migrate --seed

# Or running outside the docker container
docker exec -it vue_fw7_workspace php artisan migrate --seed
```

- If you want run project on your local instead of Docker, just skip all step about docker and create virtual host. And modify `.env` config of `DB_HOST`, `DB_HOST_TEST`, `REDIS_HOST` to `127.0.0.1`

Run the development PHP Built-in server.

> After running docker, Application run in port 2020. Visit http://localhost:2020/

## Contributing

To create a pull request, you need to run the following commands to make sure that your code is valid.

Run to check Javascript coding conventions (defined in .eslintrc.json file).

```bash
yarn run eslint
```
fix  javarscript convention

```
yarn run eslint:fix
```
or

```
yarn run watch:eslint
```

## NOTE

- Note to add HASH CODE when creating new files on the project

Example

```

## TESTING

- Exec to vue_fw7_workspace and run code migrate table

```
docker exec -it vue_fw7_workspace php artisan migrate --seed --env=testing

```
- Run command to generate file coverage

```
./vendor/bin/phpunit --coverage-html coverage

```

You will see a new coverage folder is created and contains the html files, Open the index.html file