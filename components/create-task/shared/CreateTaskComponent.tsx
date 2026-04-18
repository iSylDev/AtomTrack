'use client'

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import TextInputComp from "@/components/create-task/shared/TextInputComp";
import CategorySelector from "@/components/create-task/category/CategorySelector";
import CreateTaskHeader from "@/components/create-task/shared/CreateTaskHeader";
import CustomCategory from "@/components/create-task/category/CustomCategory";
import RecurrenceComponent from '../reccurrence/RecurrenceComponent'
import PrioritySelector from "@/components/create-task/priority/PrioritySelector";
import {Button} from "@/components/ui/button";
import validateCreateTaskInput from "@/components/create-task/func/validateCreateTaskInput";
import taskStore from "@/store/taskStore";
import {useCreateTask} from "@/hooks/tasks/useCreateTask";
import {Loader2} from "lucide-react";


function CreateTaskComponent() {
    const {mutate: createTask, isPending} = useCreateTask();
    const nameError = taskStore(state => state.errors.nameError);

    function handleCreateTask() {
        // Grab current state
        const currentState = taskStore.getState();

        // Validate the user input
        const validatedData = validateCreateTaskInput();

        // Create the task in db if there are no errors
        if (validatedData) {
            createTask(validatedData);
        }
    }

    return (
        <Card className={'w-full lg:max-w-[50vw] mt-8 mb-10'}>
            <CardHeader>
                <CreateTaskHeader/>
            </CardHeader>

            <CardContent>
                <div className={'col gap-7'}>
                    <TextInputComp
                        category={'name'}
                        label={'Task name'}
                        placeholder={'e.g Morning Workout'}
                        error={nameError}
                    />

                    <div>
                        <h3 className={'uppercase mb-2 text-xs text-chart-1 font-semibold'}>Set Task Priority</h3>
                        <PrioritySelector/>
                    </div>
                    <div>
                        <h3 className={'uppercase mb-2 text-xs text-chart-1 font-semibold'}>Category</h3>
                        <CategorySelector/>
                    </div>

                    <>
                        <CustomCategory/>
                    </>

                    <>
                        <RecurrenceComponent/>
                    </>

                    <Button
                        disabled={isPending}
                        onClick={handleCreateTask}
                        size={'lg'}>
                        {isPending ? <Loader2 className={'data-[state=open]:animate-in'}/> : <p>Save Task</p>}
                    </Button>

                </div>
            </CardContent>
        </Card>
    );
}

export default CreateTaskComponent;