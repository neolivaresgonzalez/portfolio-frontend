import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {
    Input
} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod/v4"

const formSchema = z.object({
    salutation: z
        .enum(["Mr", "Mrs", "Ms", "Dr", "Prof"])
        .optional(),
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters.")
        .max(100, "First name must be at most 100 characters."),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters.")
        .max(100, "Last name must be at most 100 characters."),
    email: z
        .email("Invalid email address."),
    phone: z
        .string()
        .optional(),
    whoAreYou: z
        .enum(["Recruiter", "I need help with a project", "Volunteer", "Other"]),
    other: z
        .string()
        .optional(),
    notes: z
        .string()
        .min(20, "Notes must be at least 20 characters.")
        .max(1000, "Notes must be at most 1000 characters."),
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
            whoAreYou: "Other",
            other: "",
            notes: "",
            optIn: false,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <Card className="w-1/2">
            <CardHeader>
                <CardTitle className="text-3xl text-left">Contact</CardTitle>
                <CardDescription className="text-left">
                    Do you need help with a project? Are you a recruiter looking for a skilled professional? Do you need a professional consultant?
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="salutation"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-salutation">
                                        Salutation
                                    </FieldLabel>
                                    <Select
                                        {...field}
                                        defaultValue=""
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectTrigger id="form-salutation">
                                            <SelectValue placeholder="Select a salutation" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Mr">Mr</SelectItem>
                                            <SelectItem value="Mrs">Mrs</SelectItem>
                                            <SelectItem value="Ms">Ms</SelectItem>
                                            <SelectItem value="Dr">Dr</SelectItem>
                                            <SelectItem value="Prof">Prof</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-2 gap-4">
                        <Controller
                            name="firstName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-first-name">
                                        First Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-last-name">
                                        Last Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-last-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-2 gap-4">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-phone">
                                        Phone
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-phone"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <FieldGroup>
                        <Controller
                            name="other"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-other">
                                        Other
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-other"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="If you selected 'Other', please specify"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="whoAreYou"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-whoareyou">
                                        Who are you?
                                    </FieldLabel>
                                    <RadioGroup
                                        {...field}
                                        id="form-whoareyou"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <RadioGroupItem value="0" id="form-rhf-demo-title-0">Recruiter</RadioGroupItem>
                                        <RadioGroupItem value="1" id="form-rhf-demo-title-1">I need help with a project</RadioGroupItem>
                                        <RadioGroupItem value="2" id="form-rhf-demo-title-2">Volunteer</RadioGroupItem>
                                        <RadioGroupItem value="3" id="form-rhf-demo-title-3">Other</RadioGroupItem>
                                    </RadioGroup>

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="other"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-other">
                                        Other
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-other"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="If you selected 'Other', please specify"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="notes"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Notes
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        {/* <Controller
                            name="optIn"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Opt In
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Login button not working on mobile"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        /> */}
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit" variant="default">Send</Button>
            </CardFooter>
        </Card>
    )
}