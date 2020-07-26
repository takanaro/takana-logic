import React from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/layout"

export default function IndexRoute(props: PageProps) {

  const slug = 'aaa'
  return (
    <Layout location = {location}>
      <div>Hello World!</div>
      <Link to={slug}>
        aaa
      </Link>

    </Layout>
  )
}
