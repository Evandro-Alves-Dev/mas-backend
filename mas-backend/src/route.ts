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


export default routes;