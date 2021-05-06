import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../models/User'

interface UserData{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{

    public async execute({name, email, password}: UserData){

       const userRepository = getRepository(User);

       const checkUserExists = userRepository.findOne({email});

       if (checkUserExists) {
           throw new Error("Email ja existe");
       }

       const hashedPassword = await hash(password, 8);

       const user = {
           name,
           email,
           password: hashedPassword
       }

       await userRepository.save(user);

       return user;

    }
}

export {CreateUserService}