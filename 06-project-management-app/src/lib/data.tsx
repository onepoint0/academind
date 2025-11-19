// need to put these in separate file as hot reload doesn't work when they are mixed into components o_0 
export type FormData = {
    title: string;
    description: string;
    dueDate: string;
}

export const initialFormData: FormData = {
    title: '',
    description: '',
    dueDate: ''
}

export type Project = FormData & {
    id: number;
};

export type ActivePage = 'start' | 'addProject' | 'editProject';