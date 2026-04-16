import {Card, CardContent, CardHeader} from "@/components/ui/card";
import TextInputComp from "@/components/create-task/TextInputComp";
import CategorySelector from "@/components/create-task/CategorySelector";
import CreateTaskHeader from "@/components/create-task/CreateTaskHeader";
import CustomCategory from "@/components/create-task/CustomCategory";
import ReccurenceComponent from './RecurrenceComponent'


function CreateTaskComponent() {
    return (
        <Card className={'w-full max-w-[90vw]'}>
            <CardHeader>
                <CreateTaskHeader/>
            </CardHeader>

            <CardContent>
                <form className={'col gap-7'}>
                    <TextInputComp category={'name'} label={'Task name'} placeholder={'e.g Morning Workout'}/>
                    <div>
                        <h3 className={'uppercase mb-2 text-xs text-chart-1 font-semibold'}>Category</h3>
                        <CategorySelector/>
                    </div>

                    <>
                        <CustomCategory/>
                    </>

                    <>
                        <ReccurenceComponent/>
                    </>

                </form>
            </CardContent>
        </Card>
    );
}

export default CreateTaskComponent;