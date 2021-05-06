import {request, response, Router} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';

const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.post('/user', userController.create)
routes.post('/activy', activyController.create)
routes.post('/courseunit', courseUnitController.create)

routes.get('/user', (request, response) => response.json ({
    message: 'Hello World'
}));

routes.get('/user/:id/', (request, response) => {
    const {id} = request.params;
    response.json({
    userId:id
    })
});

routes.get('/users/', (request, response) => {
    const {nome, idade} = request.query
    response.json({    
    nome,
    idade
    })
});

export default routes;