// src/app/api/test/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const datos = await prisma.usuarios.findMany({ take: 5 });
    return NextResponse.json(datos);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
