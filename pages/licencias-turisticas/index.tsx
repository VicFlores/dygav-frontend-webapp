import {
  Contact,
  ContactYouLicense,
  Footer,
  GetLicense,
  HeroLicense,
  Layout,
  LicenseAditionalInfo,
  LicenseTourist,
  MainHero,
  UtilHead,
} from "@/components";
import { useSession } from "next-auth/react";

export default function License() {
  const { data: session } = useSession();

  return (
    <section>
      <UtilHead title='Dygav Licenses' content='' />

      <MainHero>
        <Layout session={session}>
          <HeroLicense
            title='Licencias Turísticas'
            subtitle='Tú Licencia Turística Más Cerca de lo que Crees'
          />
        </Layout>
      </MainHero>

      <LicenseAditionalInfo />

      <GetLicense />

      <LicenseTourist />

      <Contact />

      <ContactYouLicense />

      <Footer />
    </section>
  );
}
