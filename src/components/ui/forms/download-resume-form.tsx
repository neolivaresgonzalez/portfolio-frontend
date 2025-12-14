import { Form } from "@/components/ui/shadcn-ui/form";
import { Button } from "@/components/ui/shadcn-ui/button";
import { FormField, FormItem, FormLabel, FormDescription, FormControl, FormMessage } from "@/components/ui/shadcn-ui/form";
import { Input } from "@/components/ui/shadcn-ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FIRST_NAME_MIN_LENGTH = 2
const FIRST_NAME_MAX_LENGTH = 50
const LAST_NAME_MIN_LENGTH = 2
const LAST_NAME_MAX_LENGTH = 50

const formSchema = z.object({
    firstName: z
        .string()
        .min(FIRST_NAME_MIN_LENGTH, "First name must be at least " + FIRST_NAME_MIN_LENGTH + " characters.")
        .max(FIRST_NAME_MAX_LENGTH, "First name must be at most " + FIRST_NAME_MAX_LENGTH + " characters."),
    lastName: z
        .string()
        .min(LAST_NAME_MIN_LENGTH, "Last name must be at least " + LAST_NAME_MIN_LENGTH + " characters.")
        .max(LAST_NAME_MAX_LENGTH, "Last name must be at most " + LAST_NAME_MAX_LENGTH + " characters."),
    email: z
        .email("Invalid email address.")
})

export function DownloadResumeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
    })

    function onClear() {
        form.reset()

    }

    function onSubmit(data: z.infer<typeof formSchema>) {
        if (!form.formState.isValid) {
            console.error("Form is not valid")
        }
        // Do something with the form values.
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold text-left">Download Resume</p>
                </div>
                <div className="text-justify">
                    <p>
                        Please fill out the form below to download my resume.
                    </p>
                </div>
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                            <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                            <FormDescription className="text-left">
                                Please insert your first name.
                            </FormDescription>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                            <FormDescription className="text-left">
                                Please insert your last name.
                            </FormDescription>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                            <FormDescription className="text-left">
                                Please insert your email.
                            </FormDescription>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* </CardContent> */}
                {/* <CardFooter className="flex justify-between"> */}
                <div className="flex justify-between">
                    <Button type="submit">Download</Button>
                    <Button variant="outline" onClick={onClear}>Reset</Button>
                </div>
                {/* </CardFooter> */}
                {/* </Card> */}
            </form>
        </Form>
    )
}