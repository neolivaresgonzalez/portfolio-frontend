import type { Certification } from "@/types/certification"
import { CertificationItem } from "@/components/ui/modules/certification-item"


const CERTIFICATIONS: Certification[] = [
    {
        title: "Curso de Python para el Manejo de Datos: Nivel Intermedio",
        description: "",
        // description: "Este programa consistió en extraer y limpiar granes volúmenes de datos, para esto, se entregan técnicas y herramientas avanzadas de procesamiento de datos mediante el uso de funciones de la “Librería Pandas”.  Estas técnicas permiten obtener información muy valiosa y resolver problemas a partir de grandes volúmenes de datos.  Al término del programa, el estudiante está en condiciones de aplicar estas herramientas avanzadas de manejo de datos en su ámbito laboral, para facilitar la ejecución de sus tareas, abrir nuevas posibilidades de análisis y ser capaces de resolver problemas.",
        issuer: "Pontifical Catholic University of Chile",
        issuedOn: "October 14, 2025",
        image: "https://kit-digital-uc-prod.s3.amazonaws.com/assets/escudos/logo-uc-01.svg",
        url: "https://www.credential.net/f4683b3a-16cd-448b-b317-1a9b99f40458#acc.mVaYpxCh",
        skills: ["Programación avanzada en Python", "Librería Pandas", "DataFrame", "Data frames y strings"],
    },
    {
        title: "Curso Herramientas de Programación en Python para Procesamiento de Datos",
        description: "",
        // description: "Este programa consistió en enseñar al participante conceptos y herramientas básicas de programación con Python, enfocadas en optimizar el procesamiento de datos.  Se abordó la identificación y aplicación de nociones básicas de programación orientada a objetos, como variables, funciones, operadores lógicos, y control de flujo, además de manejar archivos y datos.  Al término del programa el estudiante está en condiciones de mejorar la eficiencia en la gestión de información, facilitando sus tareas laborales y abriendo nuevas oportunidades de trabajo, esencial para la adaptación a entornos de datos dinámicos.",
        issuer: "Pontifical Catholic University of Chile",
        issuedOn: "September 8, 2025",
        image: "https://kit-digital-uc-prod.s3.amazonaws.com/assets/escudos/logo-uc-01.svg",
        url: "https://www.credential.net/68696a4e-e715-470a-8970-367683b2ffb4#acc.iDCbtQyH",
        skills: ["Programación en Python", "Procesamiento de datos", "Conceptos básicos de programación y control de Flujo"],
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals",
        description: "",
        // description: "Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
        issuer: "Microsoft",
        issuedOn: "July 15, 2024",
        image: "https://images.credly.com/size/680x680/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
        url: "https://www.credly.com/badges/870cefb2-4374-4bcf-9807-8594e4a0dd6a",
        skills: ["Azure Bot Services", "Azure Machine Learning", "Cognitive Services"],
    }
]

export function Certifications() {

    return (
        <div id="certifications" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {CERTIFICATIONS.map((certification, index) => (
                <CertificationItem key={index} {...certification} />
            ))}
        </div>
    )
}