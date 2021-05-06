import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';

interface ActivyData{
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivyService {

    public async execute({name, activy_date, course_unit_id}: ActivyData){    

    const activyRepository = getRepository(Activy);

    const checkActivyExists = activyRepository.findOne({name, course_unit_id});

    if (checkActivyExists) {
        throw new Error("Atividade para este curso ja existe");
    }

    const activy = activyRepository.create({
        name,
        activy_date,
        course_unit_id
    });

    await activyRepository.save(activy);

    return activy;

    }
}

export {CreateActivyService}

