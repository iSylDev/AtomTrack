import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CreateTaskType} from "@/schemas/createTaskSchema";
import {createTaskAction} from "@/actions/tasks/createTaskAction";
import {toast} from "sonner";
import taskStore from "@/store/taskStore";

type ActionResponse = void | { success: boolean; message: string };


export const useCreateTask = () => {
    const queryClient = useQueryClient();

    return useMutation<ActionResponse, Error, CreateTaskType>({
        mutationFn: async (data: CreateTaskType) => {
            return await createTaskAction(data);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['tasks']});

            toast.success(('Task Created successfully.'));

            //     Reset taskStore
            taskStore.getState().resetForm();
        },
        onError: (error) => {
            toast.error(error.message);
            console.error('Mutation Error:', error.message);
        }
    })
}
