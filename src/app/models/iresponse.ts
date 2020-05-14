import { IBooks } from './ibooks';

export interface IResponse {
    kind: string;
    totalItems: number;
    items: IBooks[];
}
