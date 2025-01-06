/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from '@/prisma/prisma-client'
import { authOptions } from '@/shared/constants/auth-options'
import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: any, res: any) {
  try {
    const user = await getServerSession(req, res, authOptions)

    if (!user) {
      return NextResponse.json(
        { message: 'Вы не авторизованы' },
        { status: 401 }
      )
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    })

    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: '[USER_GET] Server error' })
  }
}

/* eslint-enable @typescript-eslint/no-explicit-any */