"use client"

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { ThreadValidation } from '@/lib/validations/thread'
import { createThread } from '@/lib/actions/thread.actions'
import { useOrganization } from '@clerk/nextjs'

interface Props {
    user: {
        id: string,
        objectID: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string,
}



function PostThread({ userId }: { userId: string}) {
    const router = useRouter();
    const pathname = usePathname();
    const { organization } = useOrganization();

    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread: '',
            accountId: userId,
        }
    })

    const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
        {console.log('ORG ID: ',  organization)}

        await createThread({
            text: values.thread,
            author: userId,
            communityId: organization ? organization.id : null,
            path: pathname
        });
        
        router.push("/home");
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="mt-10 flex flex-col justify-start gap-10"
            >
                <FormField
                    control={form.control}
                    name="thread"
                    render={({ field }) => (
                    <FormItem className="flex flex-col w-full gap-3">
                        <FormLabel className='text-base-semibold dark:text-light-2 text-dark-2'>
                            Content
                        </FormLabel>
                        <FormControl className='no-focus border border-dark-4 dark:bg-dark-3 bg-light-1 dark:text-light-1 text-dark-1'>
                            <Textarea 
                                rows={15}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" className='bg-primary-500'>Post Thread</Button>
            </form>
        </Form>
    )
}

export default PostThread;