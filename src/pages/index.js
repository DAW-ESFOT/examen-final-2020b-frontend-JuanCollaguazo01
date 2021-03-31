import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";
import {Button, Grid, Link as MuiLink} from "@material-ui/core";
import Routes from "../constants/routes";
import Link from 'next/link';
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Home() {
    const {login, user} = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>Examen Final</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1>FINAL EXAM</h1>
                <Link href='/products' passHref>
                    <Button color="secondary" variant="contained">
                        PRODUCTS
                    </Button>
                </Link>



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
                <h2>Juan Collaguazo</h2>
            </footer>

        </div>
    )
}