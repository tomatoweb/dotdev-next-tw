import React from 'react'
import { promises as fs } from 'fs';

export default async function Visitors() {
    const file = await fs.readFile(process.cwd() + '/programming.txt', 'utf8');
    const lines = file.split('\n')
    //const data = JSON.parse(file);
    return (
        <div>
            {lines.map((line) => (
                <p className='text-md'>{line}</p>
            ))}
          
        </div>
      );
  }