// 'use client';
import {Input, Textarea} from "@nextui-org/input";
// import {Select, SelectItem} from "@nextui-org/react";
//
// const data = [
//     {label: 'Web Page', value: 'Web Page', description: 'Web Page'},
//     {label: 'Web App', value: 'Web App', description: 'Web App'},
//     {label: 'Mobile App', value: 'Mobile App', description: 'Mobile App'},
// ]

interface Props {
    name: string;
    title: string;
    email: string;
    additionalDetails: string;
}

export function ContactForm({additionalDetails, name, title, email}: Props) {
    return (
        <section className='min-h-[75vh]'>
            <h2 className="mt-3 text-center mb-10 text-2xl font-medium tracking-tight text-slate-200 sm:text-4xl">{title}</h2>
            <div className='grid grid-cols-12 gap-5'>
                <Input className='col-span-6' type="text" label={name} />
                <Input className='col-span-6' type="email" label={email} />
                {/*<Select*/}
                {/*    label="Type of project"*/}
                {/*    className='col-span-6'*/}
                {/*>*/}
                {/*    {data.map((element) => (*/}
                {/*        <SelectItem key={element.value} value={element.value}>*/}
                {/*            {element.label}*/}
                {/*        </SelectItem>*/}
                {/*    ))}*/}
                {/*</Select>*/}
                <Textarea
                    minRows={5}
                    label={additionalDetails}
                    className="col-span-12"
                />

            </div>
        </section>

    )
}
