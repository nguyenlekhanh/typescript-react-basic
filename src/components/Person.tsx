import React, { ChangeEvent, FC, useState } from 'react';
import { HairColor } from '../Enum'
import { Props } from '../interfaces'

export const Person: FC<Props> = ({name, age, email, hairColor}) => {

    const [country, setCountry] = useState<string | null>(null);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }


  return (
    <div>
        <h1>{name}</h1> 
        <h1>{email}</h1> 
        <h1>{age}</h1> 
        <input type="text" 
            placeholder="Write down your country..." 
            onChange={handleChange}/>

        {country}
        {hairColor }
    </div>
  );
}
