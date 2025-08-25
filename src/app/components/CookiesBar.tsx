'use client'
import Cookies from '@/app/svg/Cookies'
import { useState } from 'react';
import HighlightOff from '@mui/icons-material/HighlightOff';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { setCookie } from '@/actions/actions';

const CookiesBar = (props: any) => {

	const { cookies } = props
	const [cookiesShow, setCookiesShow] = useState(!cookies);
	const [settingsOpened, setSettingsOpened] = useState(false);
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	// modal settings options click handlers
	const handleClick = () => {
		setOpen(!open);
	};
	const handleClick2 = () => {
		setOpen2(!open2);
	};
	const saveSettings = () => {
		setCookiesShow(!cookiesShow); 
		setSettingsOpened(!settingsOpened)
	};
	const accepted = () => {
		setCookiesShow(!cookiesShow);
	};
	return (
		<>
			{/* Cookies settings options Modal */}
			{settingsOpened && (
				<div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[51] flex items-center justify-center transition-all duration-300}`}>
					<div className='bg-white rounded-3xl shadow-lg max-w-md w-full relative'>
						<h2 className='text-xl font-bold bg-gray-200 rounded-t-3xl p-4' style={{ boxShadow: "inset 0 -1px 0 0 #c9c7c7" }}>
							Cookies Settings
						</h2>
						<button className='flex justify-center items-center  text-slate-500 cursor-pointer rounded-full absolute right-4 top-3 w-7 h-7 text-center hover:bg-slate-400'>
							<HighlightOff onClick={() => setSettingsOpened(!settingsOpened)} fontSize="large" />
						</button>
						<ListItemButton sx={{ backgroundColor: '#ededed' }} onClick={handleClick}>
							<ListItemIcon>
							</ListItemIcon>
							<ListItemText primary="Essential cookies" />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItemButton sx={{ pl: 4 }}>
									<ListItemText primary="These cookies are necessary for the proper functioning of our website and cannot be disabled in our system" />
								</ListItemButton>
							</List>
						</Collapse>
						<ListItemButton sx={{ backgroundColor: '#ededed' }} onClick={handleClick2}>
							<ListItemIcon>
							</ListItemIcon>
							<ListItemText primary="Optional cookies" />
							{open2 ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={open2} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItemButton sx={{ pl: 4 }}>
									<div className='flex flex-col gap-2 px-4'>
										<p className='p-4'>Choose which cookies you want to allow</p>
										<label className='flex items-center'>
											<input type='checkbox' className='mr-2' />
											Functional Cookies
										</label>
										<label className='flex items-center'>
											<input type='checkbox' className='mr-2' />
											Analytical Cookies
										</label>
										<label className='flex items-center'>
											<input type='checkbox' className='mr-2' />
											Marketing Cookies
										</label>
									</div>

								</ListItemButton>
							</List>
						</Collapse>
						<form	
							action={async () => {
								await setCookie({ name: 'accept-cookie', value: "true" })
							}}
							onSubmit={saveSettings}
						>
							<button className="m-6 bg-black text-white tracking-tighter font-bold pb-3 pt-2 px-4 rounded-full">
								Save Settings
							</button>
						</form>
					</div>
				</div>
			)}
			{/* Cookies Bar */}
			<div className={`${cookiesShow ? 'bottom-20' : '-bottom-[19rem]'} bg-gray-100 fixed left-5 h-auto z-50 items-center rounded-2xl flex flex-col justify-center text-2xl font-bold cursor-pointer transition-all delay-75 duration-1000 shadow-[rgba(0,0,15,0.5)_0px_0px_14px_14px]`}>
				<div
					className='h-[80px] w-[300px] bg-cover bg-center bg-no-repeat rounded-t-2xl '
					style={{ backgroundImage: `url(/cookies.jpg)` }}
				>
				</div>
				<div className='w-[16rem] flex flex-wrap justify-between max-w-screen-2xl m-0 p-2'>
					<div className='text-left'>
						<div className='text-[1.2rem] tracking-tight'>
							This website uses cookies
						</div>
						<div className='text-xs font-thin tracking-tight text-wrap'>
							Nous utilisons des cookies afin de vous offrir une expérience utilisateur optimale.
						</div>
						<div className='text-xs font-thin tracking-tight text-wrap'>
							Vous pouvez choisir les cookies que vous souhaitez autoriser et revenir sur vos choix à tout moment.
						</div>
						<div className='flex justify-left gap-4 my-4 text-sm '>
							<form
								action={async () => {
									await setCookie({ name: 'accept-cookie', value: "true" })
								}}
								onSubmit={accepted}
							>
								<button className="bg-black text-white tracking-tighter font-bold pb-3 pt-2 px-4 rounded-full">
									Accept
								</button>
							</form>
							<button onClick={() => setSettingsOpened(!settingsOpened)} className='tracking-tighter underline p-1'>
								Settings
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Cookies Persistent Icon */}
			<div className='fixed bottom-3 left-3 z-50'>
				<button onClick={() => setCookiesShow(!cookiesShow)} className="bg-black text-white p-1 rounded-full">
					<Cookies />
				</button>
			</div>
		</>
	)
}

export default CookiesBar