import Head from "next/head";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    title: string;
}

const Page: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="This was a sample app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    );
};

export default Page;
