import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import React from 'react';
import ReactDOM from 'react-dom';
//var listOfImages =[];
import background from "../public/images/Lightning.jpg";

export default function Home({ allPostsData }) {
  return (
    //importAll(r) {
    //    return r.keys().map(r);
    //}
        //<div style={{ backgroundImage: `url(${background})` }}></div>
        <img src="/images/Lightning.jpg" />
    
    // componentWillMount() {
    //    listOfImages = this.importAll(require.context('/images/', false, /\.(png|jpe?g|svg)$/));
    //}
    //render(){
    //    return(
    //      <div>
    //          {
    //                listOfImages.map(
    //                  (image, index) =>    <img key={index} src={image} alt="info"></img>
    //                )
    //          }
    //      </div>
    //    )
    //}
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
