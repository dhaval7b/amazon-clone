import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDetails } from './user-details.interface';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>
        ){
    }

    async findbyEmail(email:string): Promise<UserDocument | null>{
        return this.userModel.findOne({email}).exec();
    }

    async findbyId(id:string): Promise<UserDetails | null>{
        const user = await this.userModel.findById(id).exec();
        if (!user) return null;
        return this._getUserDetails(user);
    }

    _getUserDetails(user: UserDocument): UserDetails {
        return {
            id: user._id,
            name: user.name,
            email: user.email,
        }
    }

    async create(name: string, email:string, hashedPasssword: string):Promise<UserDocument>{
        const newUser = new this.userModel({name, email, password:hashedPasssword});
        return newUser.save();
    }
}
