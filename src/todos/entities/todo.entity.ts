import { Todo } from "@prisma/client";

export class TodoEntity implements Todo {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
