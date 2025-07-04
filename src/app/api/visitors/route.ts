import { promises as fs } from 'fs';
import { NextResponse } from "next/server"

export async function GET() {

    const file = await fs.readFile(process.cwd() + '/programming.txt', 'utf8');
    const lines = file.split('\n')

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: lines
    })
}