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
          <h1>Welcome to our streaming <br/>platform, built on the XRP Ledger</h1>
          <button>Enter XNet</button>
        </div>
      </div>
      <div className="section">
        <img className="curved-bg" src="/curved-bg.png"></img>
        <div className="section-image">
          <img src="/xnet-streaming.png"></img>
        </div>
        <div className="section-content">
          <img src="/xnet-logo.png"></img>
          <h2>Decentralized payments for Adult Content</h2>
          <p>Through uisng the XRPL, our platform ensures that all transactions are tamper-proof, transparent and secure. Join us in shaping the future of streaming on the XRPL and take back control of your content.</p>
          <h2>XSPUNK NFT Membership</h2>
          <p>Join the XSPUNK community as an NFT member and enjoy exclusive access to a range of benefits. With NFT membership, you'll be able to enter content creator streams without the subscription fee.</p>
        </div>
      </div>
      <div className="creators">
        <div className="info">
          <h1>Creators</h1>
          <p>Join XNET and tap into a massive audience, including the dedicated XSPUNK NFT community. As a content creator, you'll have the opportunity to connect with fans, build your following, and earn instant payments. </p>
          <h3>How it works</h3>
        </div>
        <img src="/how-it-works.png"></img>
      </div>
      <div className="callout">
        <p>To find out more contact us or click below</p>
        <button>Enter</button>
      </div>
      <div className="nfts">
        <div className="info">
          <h1>XSPUNK NFT</h1>
          <p>Unlock exclusive access to creator streams with no subscription fees by owning XSPUNK NFTs. Our unique NFTs offer a one-of-a-kind utility, linking ownership to a connected wallet address. Join a thriving community of NSFW NFT enthusiasts and web3 pioneers driven by a shared passion for exceptional content.</p>
          <h3>How it works</h3>
        </div>
        <img src="/xspunk-nfts.png"></img>
      </div>
    </>
  )
}
