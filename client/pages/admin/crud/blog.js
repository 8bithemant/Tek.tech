import Layout from '../../../components/Layout'
import Link from 'next/link'
import Admin from '../../../components/auth/Admin'
import BlogRead from '../../../components/crud/BlogCreate'

const Blog=()=>{
    return(
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5" style={{textAlign:"center"}}>
                            <h2>
                                Category A New Blog
                            </h2>
                        </div>
                        <div className="col-md-12">
                            <h3 style={{textAlign:"center"}}>Blog</h3>
                           <BlogRead />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Blog