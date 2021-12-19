import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Panorama home visite</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*header*/}
            <Header/>
            {/*header*/}
            {/*body*/}
            <div>body</div>
            {/*body*/}
            {/*footer*/}
            <div>footer</div>
            {/*footer*/}
        </div>
    )
}
