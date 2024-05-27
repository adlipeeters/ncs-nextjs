import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const FrequentQuestions = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="container flex flex-col">
                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl font-medium text-center">Întrebări <span className="font-bold">frecvente</span></h1>
                    <h1 className="text-3xl font-medium text-center">Răspunsurile la întrebările dumneavoastră.</h1>
                    <Image
                        className="w-full object-contain h-auto max-w-[400px]"
                        width={100}
                        height={50}
                        // loading="eager"
                        alt="logo"
                        src={'/section-title-icon.png'}
                    />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <Image
                        className="w-full object-contain h-auto max-w-[500px] max-h-[200px] lg:max-h-[400px]"
                        width={100}
                        height={50}
                        // loading="eager"
                        alt="logo"
                        src={'/frequent-questions.svg'}
                    />
                    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
                        <AccordionItem value="item-1" className="border-gray-300 dark:border-gray-700 rounded-md px-4 no-underline bg-[var(--blue-secondary)]">
                            <AccordionTrigger className="hover:no-underline">Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-300 dark:border-gray-700 rounded-md px-4 no-underline bg-[var(--blue-secondary)]">
                            <AccordionTrigger className="hover:no-underline">Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-gray-300 dark:border-gray-700 rounded-md px-4 no-underline bg-[var(--blue-secondary)]">
                            <AccordionTrigger className="hover:no-underline">Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FrequentQuestions