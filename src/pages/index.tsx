import React, { Props } from "react"
import { PageProps, Link } from "gatsby"
import Layout from "../components/Layout"

interface IFooProps extends React.ClassAttributes<BlogIndex> {
    bar: string;
}

// export default function IndexRoute(props: PageProps) {
const BlogIndex: React.FC<Props> = ({ location, data }) => {
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

export default BlogIndex