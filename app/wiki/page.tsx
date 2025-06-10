import Head from "next/head"

export default function wikiPage() {
    return (
        <div className="min-h-screen theme-transition">
            {/* Header */}
            <Head>
                <title>EmberForge Wiki</title>
                <meta name="description" content="All Wikis for the content developed by EmberForge Development"/>
            </Head>
            <body>
                <p className="text-primary">Wiki Page</p>
            </body>
        </div>
    )
}
