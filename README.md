# Stack over


### Users

| Method | URL | Description
|--------|-----|-------------
| GET    | `/api/users` | Get list of users (if admin)
| POST   | `/api/users` | Create a user
| POST   | `/api/auth/local`          | Auth with local strategy
| GET    | `/api/users/me`            | Go to user home page
| DELETE | `/api/users/:id`           | Delete a user (if admin)
| GET    | `/api/users/:id/password`  | Get my settings for password
| GET    | `/api/users/:userId`       | Get my questions
| GET    | `/api/users/:userId/votes` | Get my voted questions

### Questions

| Method | URL | Description
|--------|-----|-------------
| GET    | `/api/questions`     | Get all questions
| GET    | `/api/questions/:id` | Get a question
| POST   | `/api/questions`     | Post a question
| PUT    | `/api/questions/:id` | Update a question title/content
| DELETE | `/api/questions/:id` | Delete a question

### Answers

| Method | URL | Description
|--------|-----|-------------
| POST   | `/api/questions/:id/answers`           | Create answer for a question
| PUT    | `/api/questions/:id/answers/:answerId` | Update an answer in the question
| DELETE | `/api/questions/:id/answers/:answerId` | Delete an answer in the question

### Votes

| Method | URL | Description
|--------|-----|-------------
| POST   | `/api/questions/:id/vote` | Upvote a question
| DELETE | `/api/questions/:id/vote` | Unvote a question
| POST   | `/api/questions/:id/answers/:answerId/vote` | Upvote an answer
| DELETE | `/api/questions/:id/answers/:answerId/unvote` | Unvote an answer
