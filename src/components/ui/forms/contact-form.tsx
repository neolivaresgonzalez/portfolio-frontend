"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { toast } from "sonner"

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
import { useCallback } from "react"
import {
    NOTES_MAX_LENGTH,
    NOTES_MIN_LENGTH,
    FIRST_NAME_MAX_LENGTH,
    FIRST_NAME_MIN_LENGTH,
    LAST_NAME_MAX_LENGTH,
    LAST_NAME_MIN_LENGTH,
    WHO_ARE_YOU_VALUES
} from "@/components/ui/forms/forms"


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
        .enum(WHO_ARE_YOU_VALUES.map((whoAreYou) => whoAreYou.value)),
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
    age: z
        .string()
        .optional(),
})

export function ContactForm() {
    const { executeRecaptcha } = useGoogleReCaptcha()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            salutation: "Mr",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            whoAreYou: WHO_ARE_YOU_VALUES[0].value,
            other: "",
            notes: "",
            optIn: false,
            age: "",
        },
    })

    function checkHoneypot() {
        return form.getValues("age") !== ""
    }

    function onClear() {
        form.reset()


    }

    const onSubmit = useCallback(async (data: z.infer<typeof formSchema>) => {
        if (checkHoneypot()) {
            console.log("Honeypot detected")
            return
        }

        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available")
            return
        }

        if (!form.formState.isValid) {
            console.error("Form is not valid")
            return
        }

        try {
            const token = await executeRecaptcha("contact_form")
            console.log("ReCaptcha Token:", token)

            const apiUrl = import.meta.env.VITE_FORM_API_URL
            if (!apiUrl) {
                console.error("VITE_FORM_API_URL is not set")
                return
            }

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    formData: data,
                    formType: "contact"
                }),
            })

            const result = await response.json()
            if (response.ok) {
                console.log("Form submitted successfully:", result)
                toast.success("Message sent successfully!")
                onClear()
            } else {
                console.error("Form submission failed:", result)
                toast.error("Failed to send message. Please try again.")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            toast.error("An error occurred. Please try again later.")
        }
    }, [executeRecaptcha, form.formState.isValid])


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-auto">
                <Card className="">
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
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue >
                                                    {WHO_ARE_YOU_VALUES.find((whoAreYou) => whoAreYou.value === field.value)?.label}
                                                </SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    WHO_ARE_YOU_VALUES.map((whoAreYou) => (
                                                        <div key={whoAreYou.value}>
                                                            <SelectItem value={whoAreYou.value}>{whoAreYou.label}</SelectItem>
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
                            <div hidden>
                                <FormField
                                    control={form.control}
                                    name="age"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Age</FormLabel>
                                            <FormDescription>
                                                This will help me to understand your needs.
                                            </FormDescription>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                            Submit
                        </Button>
                        <Button variant="outline" onClick={onClear}>Reset</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>

    )
}