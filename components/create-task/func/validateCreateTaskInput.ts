import taskStore from "@/store/taskStore";
import {CreateTaskSchema} from "@/schemas/createTaskSchema";


const validateCreateTaskInput = () => {
    const state = taskStore.getState();
    const setTaskValue = state.setTaskValue;
    console.log('Hello')

    const result = CreateTaskSchema.safeParse(state);

    if (!result.success) {
        const issues = result.error.issues;

        const nameIssue = issues.find((issue) => issue.path[0] === 'name');
        const categoryIssue = issues.find((issue) => issue.path[0] === 'category');

        setTaskValue('errors', {
            nameError: nameIssue?.message || '',
            categoryError: categoryIssue?.message || ''
        })

        console.log('Validation Error')
        return false;
    }

    setTaskValue('errors', {
        nameError: '',
        categoryError: '',
    })
    console.log('Form validated successfully')
    return true;
}

export default validateCreateTaskInput;