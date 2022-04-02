import IUserModel from "./UserModel";

export default interface IRepoModel {
    owner: IUserModel;
    description: string;
}