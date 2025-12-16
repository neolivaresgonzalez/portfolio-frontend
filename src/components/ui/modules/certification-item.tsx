import type { Certification } from "@/types/certification"
import { SkillItem } from "@/components/ui/modules/skill-item"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn-ui/card"
import { Button } from "@/components/ui/shadcn-ui/button"

export function CertificationItem(props: Certification) {
    return (
        <Card className="snap-center w-full max-w-md shrink-0 justify-center">
            <CardHeader>
                <div className="flex justify-center">
                    <img
                        className="w-1/2 h-1/2 object-cover"
                        src={props.image} alt={props.title} />
                </div>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>
                    <p className="text-justify">{props.description}</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-left">
                    <div>
                        <p className="font-bold">Issued by:</p> <p>{props.issuer}</p>
                    </div>
                    <div>
                        <p className="font-bold">Issued on:</p> <p>{props.issuedOn}</p>
                    </div>
                </div>
            </CardContent>
            {
                props.skills && (
                    <div className="px-6 pb-4">
                        <h3 className="font-bold mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {props.skills.map((skill, index) => (
                                <SkillItem key={index} title={skill} />
                            ))}
                        </div>
                    </div>
                )
            }
            <CardFooter>
                <Button onClick={() => window.open(props.url, "_blank")}>View Certificate</Button>
            </CardFooter>
        </Card >
    )
}