import {Card, CardContent, CardHeader} from "@/components/ui/card";
import TextInputComp from "@/components/create-task/TextInputComp";
import CategorySelector from "@/components/create-task/CategorySelector";
import CreateTaskHeader from "@/components/create-task/CreateTaskHeader";
import CustomCategory from "@/components/create-task/CustomCategory";
import RecurrenceComponent from './RecurrenceComponent'
import PrioritySelector from "@/components/create-task/priority/PrioritySelector";


function CreateTaskComponent() {
    return (
        <Card className={'w-full max-w-[50vw] mt-8 mb-10'}>
            <CardHeader>
                <CreateTaskHeader/>
            </CardHeader>

            <CardContent>
                <form className={'col gap-7'}>
                    <TextInputComp category={'name'} label={'Task name'} placeholder={'e.g Morning Workout'}/>

                    <>
                        <h3>Set Task Priority</h3>
                        <PrioritySelector />
                    </>
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

                </form>
            </CardContent>
        </Card>
    );
}

export default CreateTaskComponent;