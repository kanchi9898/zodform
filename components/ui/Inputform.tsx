import { Asterisk } from 'lucide-react'
import { Input } from "@/components/ui/input"
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { SignUpSchemaType } from '@/app/page'
import { COUNTRY, FUND, TIMEZONE, TYPES } from '@/app/Data/Data'
import { Label } from '@radix-ui/react-label'

type Iformx = {
  title: string
  name: string
  required: boolean
}

interface Iform {
  item: Iformx
  index: number
  register: UseFormRegister<SignUpSchemaType>;
  errors: any
}
const Inputform: React.FC<Iform> = ({ item, index, register, errors }) => {
  type FieldName = keyof SignUpSchemaType;
const fieldname = item?.name as FieldName
  
  return (
    <div key={index} className='flex gap-2 flex-col'>
      <Label htmlFor={fieldname} className='flex gap-1'>
        <h1 className='font-medium'>{item?.title}</h1>
        {item?.required && <span><Asterisk size={15} className='text-red-500' /></span>}
      </Label>
      {
        (fieldname == "type" || fieldname == "country" || fieldname == "fund" || fieldname == "timezone") ?
          <select {...register(fieldname)} className='w-full rounded p-2 bg-white border-2'>
            <option disabled selected>Select an option</option>

            {
              fieldname == "type" &&
              <>
                {
                  TYPES?.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                }
              </>
            }
            {
              fieldname == "country" &&
              <>
                {
                  COUNTRY?.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                }
              </>
            }
            {
              fieldname == "timezone" &&
              <>
                {
                  TIMEZONE?.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                }
              </>
            }
            {
              fieldname == "fund" &&
              <>
                {
                  FUND?.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))
                }
              </>
            }
          </select>
          :
          <>
           <Input type="text"  {...register(fieldname)} className='outline-none border-2' />
            {errors[item.name] && <span className="text-red-500">{errors[item.name].message}</span>}
          </>

      }
    </div>
  )
}

export default Inputform