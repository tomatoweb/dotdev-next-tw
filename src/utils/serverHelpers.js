import 'server-only'
import { headers, cookies } from 'next/headers'

export const getUserAcceptCookie = async () => {
	
	const cookieStore = await cookies()

	return cookieStore.get('accept-cookie')
}

export const getUserAgent = async () => {

	const headersList = await headers()

	return headersList.get('user-agent')
}

export const getSettingsFromCookie = async () => {
	
	const cookieStore = cookies()

	return cookieStore.get('colorPref')?.value || "light"
}