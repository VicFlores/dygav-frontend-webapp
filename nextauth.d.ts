export enum Role {
  tourist = 'tourist',
  owner = 'owner',
  admin = 'admin',
}

declare module 'next-auth' {
  interface User {
    role: Role;
    fullname: string;
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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'calendar-range': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          firstDayOfWeek?: number;
          locale?: string;
          value?: string;
        },
        HTMLElement
      >;
      'calendar-month': React.DetailedHTMLProps<
        React.HTMLAttributes<
          HTMLElement & {
            offset?: string;
          }
        >,
        HTMLElement
      >;
      // Add other Atomico components as needed
    }
  }
}
