# Blog-TDD

REST API
--------

List of basic routes:

| Route             | HTTP Verb | Description
|-------------------|-----------|--------------------------------
| /api/articles     | GET       | Get all the articles
| /api/articles/    | POST      | Create a new article
| /api/articles/:id | DELETE    | Delete an article
| /api/articles/:id | PUT       | Update an article


*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Usage
-----

With only npm:

```
npm install
npm start
npm run dev
```

With pm2:

```
npm install -g pm2
pm2 start ecosystem.json
```

Access `http://localhost:3000/api`

*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

Deployment
----------

```
pm2 deploy ecosystem.json development
pm2 deploy ecosystem.json staging
pm2 deploy ecosystem.json production
```
