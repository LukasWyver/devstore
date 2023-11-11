import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
  afterAuth(auth, req, _evt) {
    // valida se o usuário está logado e se a rota é privada, neste exemplo se ele não tiver logado ele retorna para o SignIn
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    // Se tiver tudo certo ele da andamento na requisição
    return NextResponse.next()
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
