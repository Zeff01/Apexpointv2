import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '../service/mailService';

export async function POST(req: NextRequest) {
	const { name, phone, email, message } = await req.json();
	const response = await sendMail({
		subject: 'From Portfolio Website',
		name,
		phone,
		fromEmail: email,
		message,
	});
	return NextResponse.json({ message: response });
}
