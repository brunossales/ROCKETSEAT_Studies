export interface inTask {
    id: string;
    value: string;
    isCompleted: boolean;
}

export interface inTaskDelete{
    id: string;
    value: string;
    isCompleted: boolean;
    deleteTask: (id : string) => void;
}