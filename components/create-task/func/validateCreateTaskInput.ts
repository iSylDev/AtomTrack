import taskStore from "@/store/taskStore";
import {CreateTaskSchema} from "@/schemas/createTaskSchema";


const validateCreateTaskInput = () => {
    const state = taskStore.getState();
    const setTaskValue = state.setTaskValue;

    const result = CreateTaskSchema.safeParse(state);

    if (!result.success) {
        const fieldErrors = result.error;

        setTaskValue('errors', {
            nameError: fieldErrors.name?.[0] || 0,
            categoryError: fieldErrors.name?.[0] || 0
        })

        return false;
    }

    setTaskValue('errors', {
        nameError: '',
        categoryError: '',
    })
    return true;
}