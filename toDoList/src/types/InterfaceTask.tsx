export interface inTask {
    id: string;
    value: string;
    isCompleted: boolean;
}

export interface inTaskRender{
    id: string;
    value: string;
    isCompleted: boolean;
    deleteTask: (id : string) => void;
    isChecked: (id : string) => void;
}