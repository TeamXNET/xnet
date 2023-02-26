import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React,{useEffect} from "react";
import { useSpring, animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Modal from 'react-modal';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';

const customStyles = {
  content: {
    top: '50%',
    zIndex: '1000 !important',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100vw',
    height: '100vh',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black',
  },
};



Modal.setAppElement('#__next');

export default function Home() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const leftsprings = useSpring({
    from: { x: -50 },
    to: { x: 0 },
  });

  const leftmoresprings = useSpring({
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 100 },
  });

  const rightsprings = useSpring({
    from: { x: 50 },
    to: { x: 0 },
  });

  const upsprings = useSpring({
    from: { y: -400,
    opacity: 0 },
    to: { y: -500,
    opacity: 100 },
  });

  return (
    <Parallax pages={4.25}> 
    <>
    
      <div className="main" offset={0} speed={2.5}>
        <div
          
          className="navbar"
        >
          <animated.div 
            style={{
              ...leftsprings,
            }} 
            className="logo"
          >
            <Image src="/xnet-logo.png" width="100" height="0" alt="" />
          </animated.div>
          <animated.div style={{
              ...rightsprings,
            }} className="links">
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Creators</Link>
              </li>
              <li>
                <Link href="/">XSPUNK NFT</Link>
              </li>
              <li>
                <Link href="/">Whitepaper</Link>
              </li>
            </ul>
          </animated.div>
        </div>
        <ParallaxLayer className="hero" offset={0} speed={2.5}>
          
          <animated.div style={{
              position: 'absolute',
              right: 0,
              ...upsprings,
              
            }}>
            <Image width="0" height="0" alt="" className="hero-bg" src="/xnet-bubble.png"/>
          </animated.div>
          
          <animated.div>
          <animated.h1 style={{
              ...leftmoresprings,
            }}>Welcome to our streaming <br/>platform, built on the XRP Ledger</animated.h1>
          <button onClick={openModal}>Enter <Image width="0" height="0" alt="" src="/xnet-logo-white.png"/></button>
          </animated.div>
         
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-popup">I am a modal</div>
            <button onClick={closeModal}>close</button>
          </Modal>
        </ParallaxLayer>
      </div>
         
      <div className="section"  speed={2.5}>
        <ParallaxLayer style={{ zIndex: '-100' }} offset={1} speed={2.5}>
          <Image width="0" height="0" alt="" className="curved-bg" src="/curved-bg.png"></Image>
        </ParallaxLayer>
        
        <div className="section-image">
          <Image width="0" height="0" alt="" src="/xnet-streaming.png"></Image>
        </div>

        <div className="section-content">
        <Image width="0" height="0" alt="" src="/xnet-logo.png" width="0"></Image>
        <animated.h2 style={{
            ...rightsprings,
          }}>Decentralized payments for Adult Content</animated.h2>
        <p>Through uisng the XRPL, our platform ensures that all transactions are tamper-proof, transparent and secure. Join us in shaping the future of streaming on the XRPL and take back control of your content.</p>
        <h2>XSPUNK NFT Membership</h2>
        <p>Join the XSPUNK community as an NFT member and enjoy exclusive access to a range of benefits. With NFT membership, youll be able to enter content creator streams without the subscription fee.</p>
      </div>
      </div>
      
      <div className="creators" offset={1.1} speed={2.5}>
        <div className="info">
          <h1>Creators</h1>
          <p>Join XNET and tap into a massive audience, including the dedicated XSPUNK NFT community. As a content creator, youll have the opportunity to connect with fans, build your following, and earn instant payments. </p>
          <h3>How it works</h3>
        </div>
        <Image width="0" height="0" alt="" src="/how-it-works.png"></Image>
      </div>  
      
      <div className="callout" offset={4} speed={2.5}>
        <p>To find out more contact us or click below</p>
        <button>Enter</button>
      </div> 
      
      <div className="nfts" offset={5} speed={2.5}>
          <Image width="0" height="0" alt="" className="blob-bg-1" src="/blob-bg-1.png"/>
        <ParallaxLayer style={{ zIndex: '-100' }}offset={3} speed={1.5}>
        <Image width="0" height="0" alt="" className="blob-bg-2" src="/blob-bg-2.png"/>
        </ParallaxLayer>
        <div className="info">
          <h1>XSPUNK NFT</h1>
          <p>Unlock exclusive access to creator streams with no subscription fees by owning XSPUNK NFTs. Our unique NFTs offer a one-of-a-kind utility, linking ownership to a connected wallet address. Join a thriving community of NSFW NFT enthusiasts and web3 pioneers driven by a shared passion for exceptional content.</p>
          <h3>How it works</h3>
        </div>
        <Image width="0" height="0" alt="" src="/xspunk-nfts.png"></Image>
        <div className="gallery">
          <Image width="0" height="0" alt="" src="/nft-1.png"/>
          <Image width="0" height="0" alt="" src="/nft-2.png"/>
          <Image width="0" height="0" alt="" src="/nft-3.png"/>
          <Image width="0" height="0" alt="" src="/nft-4.png"/>
        </div>
        <div className="external">
          <p>Like what you see? View our NFTs below</p>
          <div className="external-wrapper">
            <div className="external-adult">
              <Image width="0" height="0" alt="" src="/lolipop-mouth.png"></Image>
              <p>Remember to enable<br/>explicit content</p>
            </div>
            <div className="external-buttons">
              <button>Sologenic store</button>
              <button>XSPUNK Site</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer" offset={6} speed={2.5}>
        <Link href="/">
          <Image width="0" height="0" alt="" src="/twitter.png"></Image>
        </Link>
        <Link href="/">
          <Image width="0" height="0" alt="" src="/telegram.png"></Image>
        </Link>
        <Link href="/">
          <Image width="0" height="0" alt="" src="/instagram.png"></Image>
        </Link>
        <Link href="/">
          <Image width="0" height="0" alt="" src="/email.png"></Image>
        </Link >
      </div>
      
   
    </>
    </Parallax>
  )
}
