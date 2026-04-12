import categoryColor from "@/components/create-task/data/categoryColor";
import CustomColorPicker from "@/components/create-task/CustomColorCreator";

const CategoryColorPicker = () => {
    return (
        <div>
            <div className={'flex flex-wrap gap-3 justify-start'}>
                {
                    categoryColor.map(c => (
                        <div
                            style={{backgroundColor: c.color}}
                            key={c.color}
                            className={'h-12 w-12 rounded-xl shrink-0'}
                        >

                        </div>
                    ))
                }

            </div>
            <div>
                <CustomColorPicker/>
            </div>
        </div>
    );
};

export default CategoryColorPicker;