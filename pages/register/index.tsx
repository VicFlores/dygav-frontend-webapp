import { Layout, Register, UtilHead } from "@/components";
import { useSession } from "next-auth/react";

export default function RegisterPage() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Register' content='' />

      <div
        className={
          "w-full bg-brandContent bg-center bg-cover bg-no-repeat h-[calc(100vh+320px)] md:h-auto"
        }
      >
        <Layout>
          <Register />
        </Layout>
      </div>
    </section>
  );
}
