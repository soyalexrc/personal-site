import sampleImage from '../../../public/lan-en.png';
import {Tooltip} from "@nextui-org/react";
import Image from "next/image";
import js from '../../../public/logos/languages/js.png';
import ts from '../../../public/logos/languages/ts.png';
import dart from '../../../public/logos/languages/dart.png';
import html from '../../../public/logos/languages/html.png';
import node from '../../../public/logos/languages/node.png';
import sql from '../../../public/logos/languages/sql.png';

import docker from '../../../public/logos/tools-plattforms/docker.png';
import figma from '../../../public/logos/tools-plattforms/figma.webp';
import firebase from '../../../public/logos/tools-plattforms/firebase.png';
import github from '../../../public/logos/tools-plattforms/github.png';
import gitlab from '../../../public/logos/tools-plattforms/gitlab.png';
import vercel from '../../../public/logos/tools-plattforms/vercel.png';
import netlify from '../../../public/logos/tools-plattforms/netlify.png';
import railway from '../../../public/logos/tools-plattforms/railway.png';
import jira from '../../../public/logos/tools-plattforms/jira.png';

import angular from '../../../public/logos/libraries-frameworks/angular.png';
import expo from '../../../public/logos/libraries-frameworks/expo.webp';
import ionic from '../../../public/logos/libraries-frameworks/ionic.svg';
import astro from '../../../public/logos/libraries-frameworks/astro.png';
import mongo from '../../../public/logos/libraries-frameworks/mongo.png';
import next from '../../../public/logos/libraries-frameworks/next.png';
import nest from '../../../public/logos/libraries-frameworks/nest.png';
import flutter from '../../../public/logos/libraries-frameworks/flutter.svg';
import react from '../../../public/logos/libraries-frameworks/react.png';
import postgres from '../../../public/logos/libraries-frameworks/posgresql.png';
import {Chip} from "@nextui-org/chip";


const skillsData = {
    languages: [
        {name: 'Javascript (ES6+)', src: js},
        {name: 'Typescript', src: ts},
        {name: 'Dart', src: dart},
        {name: 'Html', src: html},
        {name: 'Sql', src: sql},
        {name: 'Node js', src: node},
    ],
    tools: [
        {name: 'Docker', src: docker},
        {name: 'Figma', src: figma},
        {name: 'Firebase', src: firebase},
        {name: 'Github', src: github},
        {name: 'Gitlab', src: gitlab},
        {name: 'Jira', src: jira},
        {name: 'Netlify', src: netlify},
        {name: 'Railway', src: railway},
        {name: 'Vercel', src: vercel},
    ],
    libraries: [
        {name: 'Angular', src: angular},
        {name: 'Astro Js', src: astro},
        {name: 'Expo', src: expo},
        {name: 'Flutter', src: flutter},
        {name: 'Ionic', src: ionic},
        {name: 'Mongo DB', src: mongo},
        {name: 'Nest Js', src: nest},
        {name: 'Next Js', src: next},
        {name: 'Postgresql', src: postgres},
        {name: 'React Js', src: react},
    ]
}

interface Props {
    title: string;
    languages: string;
    tools: string;
    libraries: string;
    logoAlt: string
}

export function SkillsAndExperience({libraries, tools, languages, title, logoAlt}: Props) {
    return (
        <section className='flex flex-col justify-center min-h-[75vh]'>
            <h2 className="mt-3 text-center mb-10 text-2xl font-medium tracking-tight text-slate-200 sm:text-4xl">{title}</h2>

                <div className='grid grid-cols-12'>
                <div className='col-span-6'></div>
                <div className='col-span-6'>
                    <div className='grid grid-cols-12'>
                        <p className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3'>2018 - Present</p>
                        <div className='col-span-9'>
                            <h4 className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#0070F0] focus-visible:[#0070F0]  group/link text-base'>Lead
                                engineer at sample</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <p className='mt-2 text-sm font-thin leading-normal'>Deliver high-quality, robust production code for
                                a diverse array of projects for clients
                                including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala
                                Health, Vanderbilt University, The 19th News, and more. Provide leadership within
                                engineering department through close collaboration, knowledge shares, and
                                mentorship.</p>

                            <div className='flex flex-wrap gap-2'>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>React</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>Angular</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>Node</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>Nest</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>Sql Server</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>React</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>React</Chip>
                                    <Chip color='primary' variant='flat' className='font-medium leading-5'>React</Chip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 mb-8'>
                <h4 className='col-span-3'>{languages}</h4>
                <div className='col-span-9'>
                    <div className='grid grid-cols-12 gap-3'>
                        {
                            skillsData.languages.map((element) => (
                                <Tooltip key={element.name} content={element.name}>
                                    <Image src={element.src} width={40} height={40} alt={`${logoAlt} ${element.name}`}/>
                                </Tooltip>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-12 mb-8'>
                <h4 className='col-span-3'>{libraries}</h4>
                <div className='col-span-9'>
                    <div className='grid grid-cols-12 gap-3'>
                        {
                            skillsData.libraries.map((element) => (
                                <Tooltip key={element.name} content={element.name}>
                                    <Image src={element.src} width={40} height={40} alt={`${logoAlt} ${element.name}`}/>
                                </Tooltip>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 mb-8'>
                <h4 className='col-span-3'>{tools}</h4>
                <div className='col-span-9'>
                    <div className='grid grid-cols-12 gap-3'>
                        {
                            skillsData.tools.map((element) => (
                                <Tooltip key={element.name} content={element.name}>
                                    <Image src={element.src} width={40} height={40} alt={`${logoAlt} ${element.name}`}/>
                                </Tooltip>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
