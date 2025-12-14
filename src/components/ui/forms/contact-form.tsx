"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/shadcn-ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/shadcn-ui/form"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/shadcn-ui/select"
import { Textarea } from "@/components/ui/shadcn-ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn-ui/card"

const NOTES_MAX_LENGTH = 500
const NOTES_MIN_LENGTH = 20
const FIRST_NAME_MAX_LENGTH = 100
const FIRST_NAME_MIN_LENGTH = 2
const LAST_NAME_MAX_LENGTH = 100
const LAST_NAME_MIN_LENGTH = 2
const LIST_OF_WHO_ARE_YOU = ["Recruiter", "Hiring Manager", "Volunteer Opportunity", "Let's collaborate"]

const formSchema = z.object({
    salutation: z
        .enum(["Mr", "Mrs", "Ms", "Dr", "Prof"])
        .optional(),
    firstName: z
        .string()
        .min(FIRST_NAME_MIN_LENGTH, "First name must be at least " + FIRST_NAME_MIN_LENGTH + " characters.")
        .max(FIRST_NAME_MAX_LENGTH, "First name must be at most " + FIRST_NAME_MAX_LENGTH + " characters."),
    lastName: z
        .string()
        .min(LAST_NAME_MIN_LENGTH, "Last name must be at least " + LAST_NAME_MIN_LENGTH + " characters.")
        .max(LAST_NAME_MAX_LENGTH, "Last name must be at most " + LAST_NAME_MAX_LENGTH + " characters."),
    email: z
        .email("Invalid email address."),
    phone: z
        .string()
        .optional(),
    whoAreYou: z
        .enum(LIST_OF_WHO_ARE_YOU),
    other: z
        .string()
        .optional(),
    notes: z
        .string()
        .min(NOTES_MIN_LENGTH, "Notes must be at least " + NOTES_MIN_LENGTH + " characters.")
        .max(NOTES_MAX_LENGTH, "Notes must be at most " + NOTES_MAX_LENGTH + " characters."),
    optIn: z
        .boolean()
        .optional(),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            salutation: "Mr",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            whoAreYou: LIST_OF_WHO_ARE_YOU[0],
            other: "",
            notes: "",
            optIn: false,
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Card className="w-full mx-auto align-center justify-center">
                    <CardHeader>
                        <CardTitle className="text-3xl text-left">Contact Form</CardTitle>
                        <CardDescription className="text-justify">
                            Do you need help with a project? Are you a recruiter looking for a skilled professional? Do you need a professional consultant?
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
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
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormDescription className="text-left">
                                        Please insert your phone.
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
                            name="whoAreYou"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Who are you? <span className="text-red-500">*</span></FormLabel>
                                    <FormDescription className="text-left">
                                        This will help me to understand who you are.
                                    </FormDescription>
                                    <FormControl>
                                        {/* <Input placeholder="Please insert your who are you" {...field} /> */}
                                        <Select onValueChange={field.onChange} defaultValue={LIST_OF_WHO_ARE_YOU[3]}>
                                            <SelectTrigger>
                                                <SelectValue >
                                                    {field.value}
                                                </SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    LIST_OF_WHO_ARE_YOU.map((whoAreYou, index) => (
                                                        <div key={index}>
                                                            <SelectItem value={whoAreYou}>{whoAreYou}</SelectItem>
                                                        </div>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-row md:flex-col gap-8 flex-wrap">
                            <FormField
                                control={form.control}
                                name="notes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Notes <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormDescription className="text-left">
                                            This will help me to understand your needs.
                                        </FormDescription>
                                        <FormControl>
                                            <Textarea placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" onClick={onClear}>Reset</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>

    )
}