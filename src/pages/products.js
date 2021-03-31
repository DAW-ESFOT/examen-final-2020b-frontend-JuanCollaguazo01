import React from 'react'
import Table from "../components/Table"
import withAuth from "@/hocs/withAuth";
import {useAuth} from "@/lib/auth";

const Products = () => {
    const {user} = useAuth();

    return (
        <>
            <div>
                <h1>
                    PRODUCTOS
                </h1>
                <h1>
                    Usuario: {user.user.name}
                </h1>
            </div>
            <div>
                <h2>
                    <Table/>
                </h2>
            </div>
        </>
    )
}
export default withAuth(Products);