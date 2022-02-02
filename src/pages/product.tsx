import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ProductOne from "../components/product1";
import ProductTwo from "../components/product2";
import Main from "../components/main";


export default function product() {
    return <Layout>
        <div>
            <Link to="/product/page1">Product1</Link>
            <br />
            <Link to="/product/page2">Product2</Link>
        </div>
        <Router basepath="/product">
            <ProductOne path="/page1" />
            <ProductTwo path="/page2" />
            <Main path="/" />
        </Router>
    </Layout >;
}
