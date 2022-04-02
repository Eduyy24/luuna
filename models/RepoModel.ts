import IUserModel from "./UserModel";

export default interface IRepoModel {
    name: string;
    owner: IUserModel;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}