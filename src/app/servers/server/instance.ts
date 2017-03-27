import { IQueue } from './queue';
export interface IInstance {
    InstanceNo: string;
    Queues: IQueue[];
}
