import { NextResponse } from "next/server"

export async function GET() {

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: []
    })
}


export async function POST(req: Request) {

    const body = await req.json()

    const date = new Date();

    let visitDate = date.getDate() + '-' + (date.getMonth() + 1 ) + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()

    let data = visitDate + " - " + body.ip + " - " + body.country + " - " + body.city + " - " + body.postal + " - " + body.region + " - " + body.hostname + "\n";

    const fs = require('fs');

    await fs.appendFileSync("programming.txt", data);

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: []
    })
}