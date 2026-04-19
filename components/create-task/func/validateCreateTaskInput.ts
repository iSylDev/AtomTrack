import taskStore from "@/store/taskStore";
import {CreateTaskSchema} from "@/schemas/createTaskSchema";


const validateCreateTaskInput = () => {
    const state = taskStore.getState();
    const setTaskValue = state.setTaskValue;

    const result = CreateTaskSchema.safeParse(state);

    if (!result.success) {
        const issues = result.error.issues;

        const nameIssue = issues.find((issue) => issue.path[0] === 'name');
        const categoryIssue = issues.find((issue) => issue.path[0] === 'category');

        setTaskValue('errors', {
            nameError: nameIssue?.message || '',
            categoryError: categoryIssue?.message || ''
        })

        throw new Error(result.error.message);
    }

    setTaskValue('errors', {
        nameError: '',
        categoryError: '',
    })
    return result.data;
}

export default validateCreateTaskInput;