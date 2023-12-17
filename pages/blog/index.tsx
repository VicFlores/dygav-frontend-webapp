import { Hero, HeroLicense, Layout, MainHero, UtilHead } from "@/components";
import { useSession } from "next-auth/react";


export default function BlogPage() {
    const { data: session } = useSession();
    return (
        <>
            <UtilHead title='Dygav Blog' content='Ahora el descubre el nuevo blog de Dygav' />
            <MainHero> 
                <Layout session={session}>
                <HeroLicense
                    title='Dygav Blog'
                    subtitle='Ahora el descubre el nuevo blog de Dygav'
                />
                </Layout>
            </MainHero>


        </>
    );
}