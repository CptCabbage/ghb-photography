import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react';
import ReactDOM from 'react-dom';
var listOfImages =[];
import background from "./public/images/Lightning.jpg";

export default function Home({ allPostsData }) {
  return (
    importAll(r) {
        return r.keys().map(r);
    }
        <div style={{ backgroundImage: `url(${background})` }}>

    
    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(
          <div>
              {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info"></img>
                    )
              }
          </div>
        )
    }
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          'Very capable, friendly individual. Have been off work due to illness
          and have recently got back into the workforce and am now looking for
          something more challenging which would enable me to support a family.
          I have great skills and knowledge in the hospitality sector and am
          also very technologically minded. I have experience with HTML, CSS,
          JAVA, & other languages. I feel capable of learning any programming
          language. I would like the opportunity to develop my skills and a
          career in the technology sector.'
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
