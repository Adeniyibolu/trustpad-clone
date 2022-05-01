import React, { useState } from "react";
import "./homepage.css";
import "./mobile.css";
export const Homepage = () => {
  const [state, setState] = useState({
    isJoined: false,
    balance: 0,
    address: "hjsdsah",
    image: "",
  });
  return (
    <section className="homepage">
      <header>
        <div className="left">
          <img
            src="https://trustpad-defi.org/img/tpad-logo-img.5eaa1084.9890389c.svg"
            alt="trust-pad-logo"
          />
          <div className="logo-words">
            <h1>TRUSTPAD-DEFI</h1>
            <p>The #1 Multi-Chain Launchpad.</p>
          </div>
        </div>

        <div className="right">
          {state.isJoined ? (
            <div className="is-joined-payload">
              <p>{state.balance} BNB</p>
              <p className="addr">{state.address}</p>
              <img src="" height={10} />
            </div>
          ) : (
            <p className="con">Connect Wallet</p>
          )}

          <h5>{new Date().toDateString()}</h5>
        </div>
      </header>

      <section className="middle">
        <div className="left">
          <div className="storm-header">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/2297.png"
              alt="storm-logo"
            />
            <div className="storm-write">
              <h1>STORMX</h1>
              <h5>
                <i className="fa fa-unlock-alt"></i>Opening
              </h5>
            </div>
          </div>

          <div className="connect">
            {!state.isJoined ? (
              <>
                <h5>Connect your wallet to get started.</h5>
                <p>Connect Wallet</p>
              </>
            ) : (
              <p>Join Airdrop</p>
            )}

            {/* <p>Join Airdrop</p> */}
          </div>

          <h3>Claim $500 in STMX</h3>

          <label>Total Claimed</label>
          <br></br>
          <progress min="0" value="91.62" max="100">
            91.62
          </progress>
          <p className="total">Total airdrop pool: $250000 STMX</p>
        </div>

        <div className="right">
          <div className="header">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/2297.png"
              alt="storm-logo"
            />
            <h1>STORMX</h1>
          </div>

          <p className="storm-writeup">
            Founded in 2015, StormX is one of the first global
            cryptocurrency-based solutions to reach worldwide markets. As a
            mobile app and browser extension, StormX aims to bring users
            cashback in crypto for most of their online purchases. With
            enterprise partners like Samsung, Nike and Lego. StormX also allows
            users to stake the native STMX token to boost their rewards.
          </p>

          <img
            className="banner"
            src="https://i.imgur.com/VEdzwGa.jpg"
            alt="storm-image"
          />

          <div className="links">
            <i className="fab fa-telegram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-firefox"></i>
          </div>

          <h2>TOKEN</h2>
          {/* <ul> */}
          <li>
            Token: <span>StormX</span>
          </li>
          <li>Type: ERC-20</li>
          <li>Total Supply: 10,000,000,000 STMX</li>
          <li>
            Market Cap: <span>$210,617,832</span>
          </li>
          {/* </ul> */}

          <h2>Distribution</h2>
          {/* <ul> */}
          <li>Distribution: Claimed via Airdrop</li>
          {/* </ul> */}
        </div>
      </section>

      <section className="footer">
        <p>
          Participants/Citizens from the following countries are strictly
          excluded/not allowed to participate in the IDOs: Bolivia, Cambodia,
          Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea. ©
          Copyright LaunchPad 2022. All rights reserved.
        </p>
      </section>
    </section>
  );
};
