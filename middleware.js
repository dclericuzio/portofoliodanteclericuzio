import { NextResponse } from 'next/server'

export function middleware(request) {
    const expectedUser = process.env.INVOICE_USER || 'admin'
    const expectedPass = process.env.INVOICE_PASSWORD

    // If no password is configured, keep the page locked rather than open.
    if (!expectedPass) {
        return new NextResponse('Invoice generator is not configured.', { status: 503 })
    }

    const auth = request.headers.get('authorization')

    if (auth) {
        const [scheme, encoded] = auth.split(' ')
        if (scheme === 'Basic' && encoded) {
            const decoded = atob(encoded)
            const sep = decoded.indexOf(':')
            const user = decoded.slice(0, sep)
            const pass = decoded.slice(sep + 1)
            if (user === expectedUser && pass === expectedPass) {
                return NextResponse.next()
            }
        }
    }

    return new NextResponse('Authentication required.', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Invoice Generator", charset="UTF-8"',
        },
    })
}

export const config = {
    matcher: ['/invoice-generator', '/invoice-generator/:path*'],
}
