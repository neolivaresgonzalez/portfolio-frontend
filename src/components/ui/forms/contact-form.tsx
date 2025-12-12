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
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import {
    Input
} from "@/components/ui/input"
import {
    Textarea
} from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod/v4"

const NOTES_MAX_LENGTH = 500
const NOTES_MIN_LENGTH = 20
const FIRST_NAME_MAX_LENGTH = 100
const FIRST_NAME_MIN_LENGTH = 2
const LAST_NAME_MAX_LENGTH = 100
const LAST_NAME_MIN_LENGTH = 2
const LIST_OF_WHO_ARE_YOU = ["Recruiter", "Looking for a professional", "Volunteer"]

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
        <Card className="w-full max-w-2xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                    <CardTitle className="text-3xl text-left">Contact</CardTitle>
                    <CardDescription className="text-left">
                        Do you need help with a project? Are you a recruiter looking for a skilled professional? Do you need a professional consultant?
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                    <FieldGroup className="grid grid-cols-2 gap-4 pt-2">
                        <Controller
                            name="firstName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-first-name">
                                        First Name <p className="text-xs text-red-500">*</p>
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Please insert your first name"
                                        autoComplete="off"
                                    />
                                    <FieldError
                                        errors={[fieldState.error]}
                                        className="text-sm text-left text-red-500"
                                    />
                                </Field>
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-last-name">
                                        Last Name <p className="text-xs text-red-500">*</p>
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-last-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Please insert your last name"
                                        autoComplete="off"
                                    />
                                    <FieldError
                                        errors={[fieldState.error]}
                                        className="text-sm text-left text-red-500"
                                    />
                                </Field>
                            )}
                        />
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-2 gap-4 pt-2">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-email">
                                        Email <p className="text-xs text-red-500">*</p>
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Please insert your email"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                            className="text-sm text-left text-red-500"
                                        />
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
                                        placeholder="Please insert your phone number"
                                        autoComplete="off"
                                    />
                                    <FieldError
                                        errors={[fieldState.error]}
                                        className="text-sm text-left text-red-500"
                                    />
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <Controller
                            name="whoAreYou"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <RadioGroup
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <FieldTitle className="text-md">
                                        Who are you?
                                    </FieldTitle>
                                    <FieldDescription className="text-sm text-gray-500 text-left">
                                        Select the option that best describes your needs.
                                    </FieldDescription>
                                    <Field className="flex flex-row items-center justify-center gap-4">
                                        {
                                            LIST_OF_WHO_ARE_YOU.map((whoAreYou, index) => (
                                                <div key={index} className="flex flex-row items-center justify-center gap-2">
                                                    <RadioGroupItem value={whoAreYou} id={`form-whoareyou-${index}`} />
                                                    <FieldLabel htmlFor={`form-whoareyou-${index}`} >{whoAreYou}</FieldLabel>
                                                </div>
                                            ))
                                        }
                                        <FieldError
                                            errors={[fieldState.error]}
                                            className="text-sm text-left text-red-500"
                                        />
                                    </Field>
                                </RadioGroup>
                            )}
                        />
                    </FieldGroup>
                    <FieldSet>
                        <FieldGroup>
                            <Controller
                                name="notes"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-notes">
                                            Notes <p className="text-xs text-red-500">*</p>
                                        </FieldLabel>
                                        <Textarea
                                            {...field}
                                            id="form-notes"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Write your message here..."
                                            autoComplete="off"
                                        />
                                        <FieldDescription className={`text-xs text-end ${field.value.length > NOTES_MAX_LENGTH ? 'text-red-500' : 'text-gray-500'}`}>
                                            {field.value.length + "/" + NOTES_MAX_LENGTH}
                                        </FieldDescription>
                                        <FieldError
                                            errors={[fieldState.error]}
                                            className="text-sm text-left text-red-500"
                                        />
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <FieldGroup>
                            <Controller
                                name="optIn"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid} orientation="horizontal">
                                        <Checkbox
                                            id="form-opt-in"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            onBlur={field.onBlur}
                                            name={field.name}
                                            ref={field.ref}
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <FieldLabel htmlFor="form-opt-in">
                                            Would you like to be contacted by me?
                                        </FieldLabel>
                                        <FieldError
                                            errors={[fieldState.error]}
                                            className="text-sm text-left text-red-500"
                                        />
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </FieldSet>
                </CardContent>
                <CardFooter className="flex align-start pt-4 gap-4">
                    <Button type="submit">Send</Button>
                    <Button variant="outline" onClick={onClear}>Clear</Button>
                </CardFooter>
            </form>
        </Card >
    )
}