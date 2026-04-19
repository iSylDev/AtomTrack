'use server';

import {CreateTaskSchema, CreateTaskType} from "@/schemas/createTaskSchema";
import {createClient} from "@/utils/supabase/server";
import {revalidatePath} from "next/cache";

export async function createTaskAction(formData: CreateTaskType) {
    console.log(formData);
    // Server side validation
    const validated = CreateTaskSchema.safeParse(formData);

    if (validated.error){
        throw new Error('Invalid data format')
    }

    const supabase = await createClient();
    const {data: {user}} = await supabase.auth.getUser();
    const data = validated.data;

    const { error: createTaskError} = await supabase
        .from('tasks')
        .insert({
            user_id: user?.id,
            name: data.name,
            priority: data.priority,
            category: data.category,
            occurrence: data.occurrence,
            occurrence_days: data.occurrence_days,
            category_color: data.category_color,
            category_icon: data.category_icon,
        });

    if (createTaskError) {
        console.error(createTaskError);
        throw new Error(createTaskError.message);
    }

    revalidatePath('/dashboard/overview')
}