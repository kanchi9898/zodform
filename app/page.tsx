
"use client"
import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Inputform from '@/components/ui/Inputform';
import { COUNTRY, FUND, Form_req, Obj, TIMEZONE, TYPES } from './Data/Data';

type Iform = {
  title: string
  name: string
  required: boolean
}

const SignUpSchema = z.object(Obj);

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function Home() {  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <main className="relative px-5 sm:px-[2rem] md:px-[3rem] xl:px-[7rem] py-5 lg:md:py-10 flex flex-col lg:gap-5 xl:gap-10">

      <div className="flex-1">
        <div className="flex flex-row gap-1 lg:gap-1 items-center md:items-start">
          <span className="text-[10vw] sm:text-[6vw] md:text-[3vw] font-semibold mb-5 rounded-lg text-zinc-500">Registration</span>
          <span className="text-[10vw] sm:text-[6vw] md:text-[3vw] font-semibold mb-5 bg-black rounded-lg w-max text-white">Form</span>
        </div>
        <section className="mb-5 flex flex-col gap-2">
          <strong className="lg:text-[1.3vw] text-zinc-500">Important Instructions</strong>
          <ul className="list-disc pl-3">
            <li>Must be filled by the person Responsible for overall International Student Recruitments for the Institution.</li>
            <li>Must use official Institution Email ID.</li>
            <li>Must provide Direct Fixed Line Number at the Institution for Telephonic Verification.</li>
          </ul>
        </section>
      </div>

      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
              Form_req?.map((item: Iform, index: number) => {
                return (
                  <>
                    <Inputform key={index} item={item} index={index} register={register} errors={errors} />
                  </>

                );
              })
            }
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max">Submit</button>
        </form>
      </div>
    </main>


  );
}
