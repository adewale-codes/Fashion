import Head from 'next/head';
import Nav from './components/Nav'

export default function PublicPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <title>Shopping official website</title>
                <meta property="og:title" content="Shopping official website" key="title" />
            </Head>
            <Nav />
            <main>{children}</main>
        </>
    );
}