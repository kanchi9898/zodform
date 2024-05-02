import { z } from 'zod';

export const Form_req = [
    {
        "title": "Institution Name",
        "name": "Institution_Name",
        "required": true
    },
    {
        "title": "Type",
        "name": "type",
        "required": true
    },
    {
        "title": "Address",
        "name": "address",
        "required": true
    },
    {
        "title": "City",
        "name": "city",
        "required": true
    },
    {
        "title": "State",
        "name": "state",
        "required": true
    },
    {
        "title": "Country",
        "name": "country",
        "required": true
    },
    {
        "title": "Zip / Postal Code",
        "name": "zipcode",
        "required": true
    },
    {
        "title": "Time Zone",
        "name": "timezone",
        "required": true
    },
    {
        "title": "Year of Establishment",
        "name": "estyear",
        "required": true
    },
    {
        "title": "Funding Type",
        "name": "fund",
        "required": true
    },
    {
        "title": "Your Name",
        "name": "name",
        "required": true
    },
    {
        "title": "Your Designation in the Institution",
        "name": "designation",
        "required": true
    },
    {
        "title": "Your Official Email ID / (User ID)",
        "name": "email",
        "required": true
    },

    {
        "title": "Create password",
        "name": "password",
        "required": true
    },
    {
        "title": "Alternate Email ID",
        "name": "altemail",
        "required": false
    },
    {
        "title": "Your Skype ID",
        "name": "skype",
        "required": false
    },
    {
        "title": "Direct Phone Number",
        "name": "phone",
        "required": true
    },
    {
        "title": "Mobile Number",
        "name": "mobile",
        "required": false
    },
    {
        "title": "Institution Website",
        "name": "website",
        "required": true
    },
    {
        "title": "Your LinkedIn Profile URL",
        "name": "linkedin",
        "required": false
    },
    {
        "title": "Captcha",
        "name": "captcha",
        "required": false
    },
]

export const TYPES = ["High school", "IB School", "University", "Language School", "HE Institution / collage"] as const
export const COUNTRY = ["Japan", "China", "India", "United Kingdom", "USA"] as const
export const FUND = ["Private", "Public"] as const
export const TIMEZONE = ["Uk time zone", "USA time zone", "India time zone"] as const

export const Obj = {
    Institution_Name: z.string().min(3, "Institution Name must be at least 3 characters"),
    type: z.enum(TYPES),
    address: z.string().min(3, "Address must be at least 3 characters"),
    city: z.string().min(2, "City name must be at least 2 characters"),
    state: z.string().min(2, "State name must be at least 2 characters"),
    country: z.enum(COUNTRY),
    zipcode: z.string().min(3, "Zip / Postal Cose must be at least 3 characters"),
    timezone: z.enum(TIMEZONE),
    estyear: z.string().min(4, "Establish Year must be at least 4 digits"),
    fund: z.enum(FUND),
    name: z.string().min(3, "Name must be at least 3 characters").max(30, "Name must be 30 characters max"),
    designation: z.string().min(3, "Designation must be at least 3 characters"),
    email: z.string().email('Invalid email address').min(3, 'Email must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    altemail: z.string().email('Invalid email address'),
    skype: z.string().refine((val) => {
        const skypeRegex = /^[a-zA-Z0-9_-]+$/;
        return skypeRegex.test(val);
    }, {
        message: 'Invalid Skype ID',
    }),
    phone: z.string().refine((val) => String(val).length === 10, 'Phone number must be 10 digits long'),
    mobile: z.string().refine((val) => String(val).length === 10, 'Phone number must be 10 digits long'),
    website: z.string().refine((val) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(val);
    }, {
        message: 'Invalid website URL',
    }),
    linkedin: z.string().refine((val) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(val);
    }, {
        message: 'Invalid Linkedin URL',
    }),
    captcha: z.string()
}