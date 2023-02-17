import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="logo">
            <img src="/xnet-logo.png" alt="" />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Creators</a>
              </li>
              <li>
                <a href="/">XSPUNK NFT</a>
              </li>
              <li>
                <a href="/">Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero">
          <img className="hero-bg" src="/xnet-bubble.png">

          </img>
          <h1>Welcome to our decentralized streaming platform, built on the XRP Ledger</h1>
          <button>Enter the XNET Dex</button>
        </div>
      </div>
    </>
  )
}
