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

    let messageDate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()

    let data = messageDate + " - " + body.email + " - " + body.subject + " - " + body.message + "\n";

    const fs = require('fs');

    await fs.appendFileSync("messaging.txt", data);

    return NextResponse.json({
        message: 'ok',
        status: 200,
        data: []
    })
}