import React from "react";
import { countUp } from "./countUp";

const App: React.FC = () => {
  const count = countUp(147, 3000); // Pass in target and duration

  return (
    <div className="flex justify-content-center align-items-center py-3 page-wrapper">
      {/*Header*/}
      <div className="d-flex justify-content-between px-5">
        <img
          src="/src/assets/logo.png"
          className="video-fluid logo-img"
          alt="logo"
        />
        <img
          src="/src/assets/name-logo.png"
          className="video-fluid name-logo-img"
          alt="logo"
        />
      </div>

      {/*1st Section*/}
      <div className="p-5">
        <div className="row">
          <div className="col-md-7">
            <div className="d-flex flex-column justify-content-end">
              <div className="d-flex align-items-end">
                <div className="big-count">{count}</div>
                <h1
                  className="text-6xl fw-bold"
                  style={{ marginBottom: "2rem" }}
                >
                  M+
                </h1>
              </div>
              <h1 className="text-6xl pb-5 fw-bold">
                Learners. One Platform. Endless Possibilities.
              </h1>
              <div className="description">
                NovaLearn is where curiosity meets opportunity. Join millions of
                learners, professionals, and dreamers who are building brighter
                futures — one course at a time.
              </div>
              <div>
                <button className="mt-4 px-6 py-2 rounded">
                  Start Learning Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="image-section">
              <div className="position-relative">
                <div className="asset-img-wrapper">
                  <img
                    src="/src/assets/asset1.png"
                    className="video-fluid"
                    style={{ height: "400px", objectFit: "contain" }}
                    alt="logo"
                  />
                </div>
                <div className="asset-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*2nd Section*/}
      <div className="text-center" style={{ padding: "80px 3rem 80px 3rem" }}>
        <h1>Join the Movement</h1>
        <h4 className="py-3" style={{ color: "var(--primary-color)" }}>
          <i>“Learning is the only superpower that compounds over time.”</i>
        </h4>
      </div>

      {/*3rd Section*/}
      <div style={{ padding: "3rem 7rem 3rem 7rem" }}>
        <div
          style={{
            borderRadius: "30px",
            background:
              "linear-gradient(75deg, var(--accent-color), var(--secondary-color))",
          }}
        >
          <div className="row p-5">
            <div className="col-md-4">
              <h1>What Makes NovaLearn Different?</h1>
              <button className="mt-4 px-6 py-2 rounded">Learn More</button>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <img src="/src/assets/mdi_world.svg" alt="logo" />
                    </div>
                    <h4 className="pt-2 fw-bold">World-Class Courses</h4>
                    <div>
                      Taught by expert instructors from top institutions
                      worldwide.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src="/src/assets/mingcute_time-line.svg"
                        alt="logo"
                      />
                    </div>
                    <h4 className="pt-2 fw-bold">Learn Anytime</h4>
                    <div>Flexible schedules for busy students, or parents.</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <img src="/src/assets/community.svg" alt="logo" />
                    </div>
                    <h4 className="pt-2 fw-bold">Global Community</h4>
                    <div>
                      Connect, collaborate, and grow with peers in over 190
                      countries.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-5">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src="/src/assets/game-icons_progression.svg"
                        alt="logo"
                      />
                    </div>
                    <h4 className="pt-2 fw-bold">Real Progress</h4>
                    <div>
                      Certificates, skill, and career-ready tracks to fuel
                      ambitions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*4th Section*/}
      <div className="py-5">
        <div
          className="position-relative"
          style={{
            padding: "3rem 7rem 3rem 7rem",
            background: "#F4F4FA",
          }}
        >
          <img
            src="/src/assets/asset3.png"
            className="position-absolute"
            style={{
              right: "5%",
              top: "-70px",
              height: "200px",
              objectFit: "contain",
            }}
            alt="logo"
          />

          <h1 style={{ padding: "3rem 0rem 3rem 0rem" }}>What You Will Get</h1>
          <div className="row py-4">
            <div className="d-flex col-md-4">
              <div className="d-flex justify-content-center w-100">
                <h3 style={{ width: "70px", color: "var(--accent-color)" }}>
                  01.
                </h3>
                <div>
                  Certificates, skill, and career-ready tracks to fuel
                  ambitions.
                </div>
              </div>
            </div>
            <div className="d-flex col-md-4">
              <div className="d-flex justify-content-center w-100">
                <h3 style={{ width: "60px", color: "var(--accent-color)" }}>
                  02.
                </h3>
                <div>Mobile & desktop learning</div>
              </div>
            </div>
            <div className="d-flex col-md-4">
              <div className="d-flex justify-content-center w-100">
                <h3 style={{ width: "60px", color: "var(--accent-color)" }}>
                  03.
                </h3>
                <div>Downloadable resources</div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="d-flex col-md-6">
              <div className="d-flex justify-content-center w-100">
                <h3 style={{ width: "70px", color: "var(--accent-color)" }}>
                  04.
                </h3>
                <div>Discussion boards & peer collaboration</div>
              </div>
            </div>
            <div className="d-flex col-md-6">
              <div className="d-flex justify-content-center w-100">
                <h3 style={{ width: "60px", color: "var(--accent-color)" }}>
                  05.
                </h3>
                <div>Certificates of completion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*5th Section*/}
      <div
        className="position-relative"
        style={{ padding: "3rem 7rem 3rem 7rem" }}
      >
        <div
          className="p-5"
          style={{
            borderRadius: "30px",
            background: "rgba(236, 118, 152, 0.4)",
          }}
        >
          <div className="row">
            <div className="col-md-5">
              <img
                src="/src/assets/asset2.png"
                // className="video-fluid"
                style={{ height: "400px", width: "100%", objectFit: "contain" }}
                alt="logo"
              />
            </div>
            <div className="col-md-7">
              <h1 className="py-4">
                Limited-Time Offer! Unlock Your Learning Journey Today
              </h1>
              <h5 className="fw-light">
                🔓 Get Access to All Courses — Only $1 for the First Month
              </h5>
              <h5 className="fw-light">
                🎁 Bonus: Free Certificate Included for Every Course
              </h5>
              <h5 className="fw-light">
                🔥 30% Off Your First Subscription — This Week Only
              </h5>
              <h5 className="fw-light">
                👥 Invite Friends, Get Rewards — Start Building Together
              </h5>
              <div>
                <button className="mt-4 px-6 py-2 rounded">Claim Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*6th Section*/}
      <div className="text-center" style={{ padding: "80px 40px 80px 40px" }}>
        <h1>Don’t wait — your future starts now.</h1>
        <div className="py-3 fw-light">
          <div>
            NovaLearn helps you turn curiosity into real-world skills — anytime,
            anywhere.
          </div>
          <div>Start today and be part of a global learning movement.</div>
        </div>

        <div>
          <button className="mt-4 px-6 py-2 rounded">Learning Now</button>
        </div>
      </div>
      {/*Line Section*/}
      <hr
        style={{
          height: "2px",
          backgroundColor: "grey",
          border: "none",
          margin: "0 1.25rem", // equivalent to px-5
        }}
      />

      {/*Footer Section*/}
      <div className="d-flex justify-content-between align-items-center py-3 px-5">
        <img
          src="/src/assets/logo.png"
          className="video-fluid logo-img"
          alt="logo"
        />
        <div>2025</div>
      </div>
    </div>
  );
};

export default App;
