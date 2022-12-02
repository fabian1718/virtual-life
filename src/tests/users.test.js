
const supertest = require('supertest');

const app = ('../app');

const api = supertest(app);

//probar endpoint user regresa un json

describe('pruebas para el endpoint users', () => {
    test('Probar que get a users users regresa un json', async() => {
        await api
        .get("/api/v1/users")
        .expect(200)
        .expect('Content-Type', /application\/json/);
    })
})

