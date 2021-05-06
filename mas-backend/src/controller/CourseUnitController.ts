import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService';

class CourseUnitController{
    async create(request: Request, response: Response){
        const courseUnitData = request.body;

        const createCourseUnit = new CreateCourseUnitService(); 

        const courseunit = await createCourseUnit.execute(courseUnitData);

        return response.json(courseunit);
    }

}

export {CourseUnitController}