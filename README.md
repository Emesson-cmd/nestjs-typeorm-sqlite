# Descrição do projeto

Este projeto é um CRUD com NestJS, TypeORM, SQLite3.
Aqui você vai poder encontrar o CRUD de pessoas (nome, idade e email)

## Rotas

- Exemple: http://localhost:8080/api/v1/person/exemple
- Get all people - GET: http://localhost:8080/api/v1/person/
- Get one person - GET: http://localhost:8080/api/v1/person/:idDaPessoa
- Delete person: - DELETE: http://localhost:8080/api/v1/person/:idDaPessoa
- Create person - POST: http://localhost:8080/api/v1/person/
#### Payload:
    body:
    {
      "name": "name",
      "age": 20,
      "email": "email@email.com"
    }
- Update person - PUT: http://localhost:8080/api/v1/person/:idDaPessoa
#### Payload:
    body:
    {
      "name": "name",
      "age": 20,
      "email": "email@email.com"
    }

## Tecnologias

- TypeScript
- Node
- NestJS
- SQLite
- Validations

## Decorators

### Controller
- @Controller()
- @InjectRepository()
- @Get()
- @Post()
- @Put()
- @Delete()
- @Body()
- @Param()

### Modelo
- @Entity()
- @PrimaryGeneratedColumn()
- @Column()


### Módulo
- @Module()

### Schema
- @IsString()
- @MaxLength()
- @IsInt()
- @Min()
- @IsEmail()

## Banco de dados

SQLite3

## Arquitetura

MVC

## Comandos para facilitar sua vida

    npm i -g @nestjs/cli
    nest new nome-do-projeto
    npm start
    npm run start:dev (modo watch)
    npm i @nestjs/typeorm typeorm sqlite3
    npm i class-validator class-transformer

# NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
