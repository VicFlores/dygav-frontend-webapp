import {
  Contact,
  ContactYouLicense,
  Footer,
  GetLicense,
  HeroLicense,
  Layout,
  LicenseTourist,
  MainHero,
} from "@/components";
import { useSession } from "next-auth/react";

export default function License() {
  const { data: session } = useSession();

  return (
    <section>
      <MainHero>
        <Layout title="Dygav Licenses" session={session}>
          <HeroLicense
            title="Licencias Turísticas"
            subtitle="Tú Licencia Turística Más Cerca de lo que Crees"
          />
        </Layout>
      </MainHero>

      <GetLicense />

      <LicenseTourist />

      <Contact />

      <ContactYouLicense />

      <Footer />
    </section>
  );
}
