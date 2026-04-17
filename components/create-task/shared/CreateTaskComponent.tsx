import {Card, CardContent, CardHeader} from "@/components/ui/card";
import TextInputComp from "@/components/create-task/shared/TextInputComp";
import CategorySelector from "@/components/create-task/category/CategorySelector";
import CreateTaskHeader from "@/components/create-task/shared/CreateTaskHeader";
import CustomCategory from "@/components/create-task/category/CustomCategory";
import RecurrenceComponent from '../reccurrence/RecurrenceComponent'
import PrioritySelector from "@/components/create-task/priority/PrioritySelector";
import {Button} from "@/components/ui/button";


function CreateTaskComponent() {
    return (
        <Card className={'w-full lg:max-w-[50vw] mt-8 mb-10'}>
            <CardHeader>
                <CreateTaskHeader/>
            </CardHeader>

            <CardContent>
                <div className={'col gap-7'}>
                    <TextInputComp category={'name'} label={'Task name'} placeholder={'e.g Morning Workout'}/>

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

                    <Button size={'lg'}>
                        Save Task
                    </Button>

                </div>
            </CardContent>
        </Card>
    );
}

export default CreateTaskComponent;