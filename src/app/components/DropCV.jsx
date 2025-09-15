'use client'
import { MenuItem, Select } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const DropCV = () => {

	const [open, setOpen] = useState(false);

	return (
		<>
			<Link className="-mt-6 mr-2 -ml-6" href="/">
				<Image onClick={setOpen(!open)} alt="" src="/mathias.png" width={100} height={100} />
			</Link>
			{ open && (
				<MenuItem value={10}>Ten</MenuItem>
			)}
		</>
	)
}

export default DropCV