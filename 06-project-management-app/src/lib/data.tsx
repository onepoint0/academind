// need to put these in separate file as hot reload doesn't work when they are mixed into components o_0
export type FormData = {
  title: string
  description: string
  dueDate: string
}

export const initialFormData: FormData = {
  title: '',
  description: '',
  dueDate: '',
}

export type Project = {
  id: number
} & FormData & {
    tasks: string[]
  }

export type ActivePage = 'start' | 'addProject' | 'editProject'

export type SetTasksParams = {
  id: number
  task: string
  action: 'add' | 'remove'
}

export type SetTasksFunction = (params: SetTasksParams) => void
