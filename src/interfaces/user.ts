import { TUserRole } from "constants/userRoles";
import { Document, Model } from "mongoose";

export interface Tokens {
    kind: string;
    accessToken: string;
    tokenSecret?: string;
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: TUserRole;
    token: string;
    createdAt: Date;
}

export interface IUserDoc extends IUser, Document { };

export interface IUserMethods {
    generateToken(): Promise<string>;
    deleteToken(): Promise<void>;
}

export interface IUserModel extends Model<IUserDoc, Record<string, never>, IUserMethods> { };