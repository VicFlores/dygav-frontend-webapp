export enum Role {
  tourist = 'tourist',
  owner = 'owner',
  admin = 'admin',
}

declare module 'next-auth' {
  interface User {
    role: Role;
    _id?: string;
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
