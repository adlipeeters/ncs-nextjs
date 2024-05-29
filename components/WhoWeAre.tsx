import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";

const WhoWeAre = () => {
    return (
        <div className='flex flex-col'>
            <div className="container flex flex-col items-start">
                <div className=''>
                    <h5 className="text-2xl font-bold">Cine suntem</h5>
                    <Image
                        className="object-contain h-auto max-h-[10px]"
                        width={200}
                        height={30}
                        // loading="eager"
                        alt="underline"
                        src={'/section-title-icon.png'}
                    />
                    <p className='mt-2 font-medium'>
                        Cine Suntem? Suntem visători, inovatori, și mai presus de toate, suntem facilitatori. Echipa noastră, alcătuită din specialiști pasionați de tehnologie și eficiență în afaceri, a dezvoltat Leelo - asistentul tău de business în călătoria antreprenorială. <br /> <br />
                        La <Link target='_blank' className="text-[#7367f0]" href="https://necsys.ro">NecSys</Link>, suntem mai mult decât o echipă! Cu peste 10 ani de experiență în dezvoltarea de software, am devenit un nume de încredere în industrie, lucrând cu unele dintre cele mai respectabile companii, atât la nivel național, cât și internațional. Experiența noastră vastă în crearea de soluții software personalizate pentru companii ne-a permis să acumulăm un bagaj solid de cunoștințe și competențe.<br /> <br />
                        <Link target='_blank' className="text-[#7367f0]" href="https://necsys.ro">NecSys</Link> stă la baza creării Leelo, o manifestare a pasiunii și dedicației noastre pentru excelență și inovație. Am dezvoltat Leelo - asistentul tău de business - pentru a facilita și a eficientiza călătoria antreprenorială, purtând amprenta expertizei și calității care ne definesc.<br /> <br />
                        Leelo este rodul experienței noastre acumulate, o platformă menită să răspundă nevoilor reale ale antreprenorilor moderni. Este construită pe fundamente solide: înțelegerea profundă a nevoilor de afaceri și capacitatea de a livra soluții care transformă provocările în oportunități.<br /> <br />
                        Misiunea noastră este de a simplifica complexitatea administrativă - o misiune ce decurge dintr-o tradiție a excelenței.<br /> <br />
                        În calitate de client NecSys, vei beneficia nu doar de un produs robust și versatil, ci și de un parteneriat solid și de lungă durată. Viziunea, dedicația și expertiza noastră sunt acum la dispoziția ta prin Leelo, pentru a-ți transforma afacerea și pentru a-ți oferi libertatea de a te concentra pe ceea ce contează cu adevărat.
                    </p>
                    <h5 className="text-2xl font-bold mt-6">Viziunea noastră</h5>
                    <Image
                        className="object-contain h-auto max-h-[10px]"
                        width={200}
                        height={30}
                        // loading="eager"
                        alt="underline"
                        src={'/section-title-icon.png'}
                    />
                    <p className='mt-2 font-medium'>
                        Ne imaginăm o lume în care antreprenorii se pot focusa pe ceea ce iubesc cel mai mult - construirea și creșterea afacerii lor, fără stresul administrativ cotidian. Vrem să redăm proprietarilor de afaceri ceea ce valorează cel mai mult: timpul lor, permițându-le să inoveze, să creeze și să inspire.
                    </p>
                    <h5 className="text-2xl font-bold mt-6">Misiunea noastră</h5>
                    <Image
                        className="object-contain h-auto max-h-[10px]"
                        width={200}
                        height={30}
                        // loading="eager"
                        alt="underline"
                        src={'/section-title-icon.png'}
                    />
                    <p className='mt-2 font-medium'>
                        Misiunea noastră este simplă și, totuși, profundă: să transformăm modul în care afacerile se desfășoară, integrând tehnologia inteligentă și intuitivă în fiecare aspect al activității antreprenoriale. Prin Leelo, ne angajăm să oferim o soluție centralizată care integrează Facturare și Ofertare, CRM, HR, Contracte și Registratură, Managementul Proiectelor, și Task-uri - toate sub o singură umbrelă accesibilă tuturor fiind in același timp și ușor de folosit.
                    </p>
                    <h5 className="text-2xl font-bold mt-6">Valorile Noastre</h5>
                    <Image
                        className="object-contain h-auto max-h-[10px]"
                        width={200}
                        height={30}
                        // loading="eager"
                        alt="underline"
                        src={'/section-title-icon.png'}
                    />
                    <div className='flex gap-4 mt-2'>
                        <LuBadgeCheck className='w-8 h-8 text-[#7367f0] bg-[#7267f03a' />
                        <p>
                        <span className='underline font-bold texxt-lg'>Inovație:</span>  Ne străduim să fim în fruntea inovației, aducând caracteristici și funcționalități noi care să te ajute să rămâi competitiv.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre