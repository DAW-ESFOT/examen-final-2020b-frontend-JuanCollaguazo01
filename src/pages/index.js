import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";
import {Button, Grid, Link as MuiLink} from "@material-ui/core";
import Routes from "../constants/routes";
import Link from 'next/link';
import React from "react";

export default function Home() {
    const {login, user} = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>Examen Final</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <Button color="secondary" variant="contained">
                    Hello World
                </Button>
                <Link href={Routes.PRODUCTS} passHref>
                    <MuiLink>Product</MuiLink>
                </Link>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />

                </a>
                <h1>Juan Collaguazo</h1>
            </footer>

        </div>
    )
}