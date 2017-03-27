import { IInstance } from './instance';
export interface IServer {
    ServerName: string;
    Instances: IInstance[];
}
