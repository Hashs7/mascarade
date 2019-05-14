const request    = require('supertest');
const app        = require('../app');

// jest.setTimeout(30000);

/*describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(500)
        })
    });
});*/

/*describe('Test create new teacher', () => {

});*/

test('It should response the GET method', (done) => {
    return request(app)
        .put('/auth/teacher/signup')
        .send({ email: 'admin@dev.com', password: 'csuperpassword', firstname: 'Jean', surname: 'Point' })
        .set('Accept', 'application/json')
        // .expect('Content-Type', /json/)
        /*.expect(function(res) {
            res.body.userId = 'some fixed id';
            res.body.message = res.body.name.toLowerCase();
        })*/
        .expect(500)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });

    /*.expect(201, {
        message: 'super',
        userId: "superID"
    })
    .end(function(err, res) {
        if (err) return done(err);
        done();
    });*/
});


describe('Test the root path', () => {
    test('It should response 404 status code', (done) => {
        request(app)
            .get('/')
            .then((response) => {
                expect(response.statusCode).toBe(404);
                done();
            });
    });
});

/*describe('Test the root path', () => {
    test('It should response 404 status code', (done) => {
        request(app)
            .put('/auth/teacher/signup')
            .send({ email: 'admin@dev.com', password: 'csuperpassword', firstname: 'Jean', surname: 'Point' })
            .set('Accept', 'application/json')
            .then((response) => {
                expect(response.statusCode).toBe(500);
                done();
            });
    });
});*/

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});