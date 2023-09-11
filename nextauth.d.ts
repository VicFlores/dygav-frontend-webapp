export enum Role {
  tourist = 'tourist',
  owner = 'owner',
}

declare module 'next-auth' {
  interface User {
    role: Role;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role;
  }
}
