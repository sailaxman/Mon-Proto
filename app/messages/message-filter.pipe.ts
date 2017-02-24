import { PipeTransform, Pipe } from '@angular/core';
import { IMessage } from './message';
@Pipe({
    name: 'messageFilter'
})
export class MessageFilterPipe implements PipeTransform{
    transform(value:IMessage[], filterBy:string): IMessage[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((message:IMessage) =>
        message.Label.toLocaleLowerCase().indexOf(filterBy) !== -1):value;
    }
}