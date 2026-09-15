import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import logoImg from "../assets/logo.jpeg";

/* =========================================================
   BRICK
========================================================= */

function Brick({
  progress,
  index,
  total,
}) {
  const start = 0.03 + (index / total) * 0.90;
  const end = start + 0.06;

  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [0.6, 1]
  );

  const y = useTransform(
    progress,
    [start, end],
    [10, 0]
  );

  return (
    <motion.span
      className="construction-brick"
      style={{
        opacity,
        scale,
        y,
      }}
    />
  );
}


/* =========================================================
   CONSTRUCTION FLOOR
========================================================= */

function ConstructionFloor({
  index,
  totalFloors,
  scrollProgress,
}) {
  /*
   * 0% - 70% = BUILDING CONSTRUCTION
   *
   * 6 floors are constructed one after another.
   */

  const constructionEnd = 0.70;

  const floorDuration =
    constructionEnd / totalFloors;

  const floorStart = index * floorDuration;
  const floorEnd = floorStart + floorDuration;

  /*
   * Progress of this individual floor.
   */

  const floorProgress = useTransform(
    scrollProgress,
    [floorStart, floorEnd],
    [0, 1],
    {
      clamp: true,
    }
  );

  /*
   * Floor is invisible before construction starts.
   */

  const floorOpacity = useTransform(
    floorProgress,
    [0, 0.02, 0.10, 1],
    [0, 0, 1, 1]
  );

  /*
   * Floor enters from below.
   */

  const floorY = useTransform(
    floorProgress,
    [0, 0.08, 0.18],
    [45, 15, 0]
  );

  /*
   * Concrete slab.
   */

  const slabScale = useTransform(
    floorProgress,
    [0, 0.08, 0.18, 1],
    [0, 0.7, 1, 1]
  );

  /*
   * Windows appear after the wall is mostly complete.
   */

  const windowOpacity = useTransform(
    floorProgress,
    [0.72, 0.90],
    [0, 1]
  );

  const windowScale = useTransform(
    floorProgress,
    [0.72, 0.92],
    [0.75, 1]
  );

  /*
   * Floor number.
   */

  const numberOpacity = useTransform(
    floorProgress,
    [0.80, 0.95],
    [0, 1]
  );

  const bricks = Array.from({
    length: 40,
  });

  return (
    <motion.div
      className="construction-floor"
      style={{
        /*
         * Floor 1 = bottom
         * Floor 6 = top
         */

        bottom: `${(index / totalFloors) * 100}%`,

        opacity: floorOpacity,
        y: floorY,
      }}
    >

      {/* =================================================
          CONCRETE SLAB
      ================================================= */}

      <motion.div
        className="floor-slab"
        style={{
          scaleX: slabScale,
        }}
      />


      {/* =================================================
          BRICK WALL
      ================================================= */}

      <div className="brick-wall">
        {bricks.map((_, brickIndex) => (
          <Brick
            key={brickIndex}
            progress={floorProgress}
            index={brickIndex}
            total={bricks.length}
          />
        ))}
      </div>


      {/* =================================================
          WINDOWS
      ================================================= */}

      <motion.div
        className="floor-windows"
        style={{
          opacity: windowOpacity,
          scale: windowScale,
        }}
      >
        <span />
        <span />
        <span />
      </motion.div>


      {/* =================================================
          FLOOR NUMBER
      ================================================= */}

      <motion.span
        className="floor-number"
        style={{
          opacity: numberOpacity,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

    </motion.div>
  );
}


/* =========================================================
   MAIN SCROLL CRANE
========================================================= */

export default function ScrollCrane() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalFloors = 6;


  /* =======================================================
     CRANE TROLLEY
  ======================================================= */

  const trolleyX = useTransform(
    scrollYProgress,
    [
      0,
      0.12,
      0.24,
      0.36,
      0.48,
      0.60,
      0.70,
      1,
    ],
    [
      "14%",
      "28%",
      "42%",
      "55%",
      "68%",
      "78%",
      "84%",
      "62%",
    ]
  );


  /* =======================================================
     CRANE CABLE
  ======================================================= */

  const cableHeight = useTransform(
    scrollYProgress,
    [
      0,
      0.12,
      0.24,
      0.36,
      0.48,
      0.60,
      0.70,
      0.82,
      1,
    ],
    [
      90,
      105,
      120,
      140,
      160,
      180,
      195,
      30,
      30,
    ]
  );


  /* =======================================================
     CRANE LOAD
  ======================================================= */

  const loadY = useTransform(
    scrollYProgress,
    [
      0,
      0.12,
      0.24,
      0.36,
      0.48,
      0.60,
      0.70,
      1,
    ],
    [
      0,
      -5,
      10,
      25,
      40,
      60,
      80,
      20,
    ]
  );


  /* =======================================================
     HOOK ROTATION
  ======================================================= */

  const hookRotate = useTransform(
    scrollYProgress,
    [
      0,
      0.20,
      0.40,
      0.60,
      0.80,
      1,
    ],
    [
      -5,
      4,
      -3,
      4,
      -2,
      1,
    ]
  );


  /* =======================================================
     CONSTRUCTION LIFT
  ======================================================= */

  const liftY = useTransform(
    scrollYProgress,
    [
      0,
      0.116,
      0.233,
      0.35,
      0.466,
      0.583,
      0.70,
    ],
    [
      "76%",
      "62%",
      "48%",
      "34%",
      "21%",
      "10%",
      "3%",
    ]
  );


  /* =======================================================
     PROGRESS BAR
  ======================================================= */

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    ["8%", "100%"]
  );


  /* =======================================================
     CRANE RIG OPACITY & RETRACTING CABLE
  ======================================================= */

  const craneOpacity = useTransform(
    scrollYProgress,
    [0.65, 0.80],
    [1, 0.4]
  );

  /* =======================================================
     BUILDING SIDE WALL (3D Structure)
  ======================================================= */

  const sideOpacity = useTransform(
    scrollYProgress,
    [0, 0.30, 0.70],
    [0.65, 0.85, 1]
  );

  /* =======================================================
     FINISHED BUILDING
     
     45% → 70%
     Building finishes and stays 100% visible through 100% scroll.
  ======================================================= */

  const finishedFaceOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.70],
    [0, 1]
  );


  /* =======================================================
     ECO TS LOGO
     
     40% → 70%
     Logo fades in and glides to exact dead-center of the building.
     
     70% → 100%
     Logo stays 100% visible and centered.
  ======================================================= */

  const logoOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.70],
    [0, 1]
  );

  const logoScale = useTransform(
    scrollYProgress,
    [0.40, 0.70, 1],
    [0.75, 1, 1]
  );

  const logoY = useTransform(
    scrollYProgress,
    [0.40, 0.70, 1],
    ["-35%", "-50%", "-50%"]
  );


  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      className="crane-scroll-section"
      aria-label="EcoTS construction progress"
    >

      <div className="crane-sticky-stage">

        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div className="crane-scene-glow" />
        <div className="crane-grid" />


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="crane-copy">

          <p className="crane-eyebrow">
            Built with intention
          </p>

          <h2>
            Watch our vision
            <br />
            take shape.
          </h2>

          <p className="crane-description">
            Scroll through the construction sequence as
            the crane lifts materials and the EcoTS
            residence rises floor by floor.
          </p>

          <div
            className="crane-progress"
            aria-hidden="true"
          >

            <span>
              Construction progress
            </span>

            <div>
              <motion.i
                style={{
                  width: progress,
                }}
              />
            </div>

          </div>

        </div>


        {/* =================================================
            SCROLL CUE
        ================================================= */}

        <div
          className="crane-scroll-cue"
          aria-hidden="true"
        >

          <span>
            Scroll to operate
          </span>

          <ArrowDown size={15} />

        </div>


        {/* =================================================
            CONSTRUCTION WORLD
        ================================================= */}

        <div
          className="crane-world"
          aria-hidden="true"
        >

          <div className="crane-ground" />

          <div className="site-mark site-mark-one" />
          <div className="site-mark site-mark-two" />


          {/* =================================================
              BUILDING
          ================================================= */}

          <div className="building-shell">


            {/* =================================================
                ROOF
            ================================================= */}

            <div className="building-roof">
              <i />
            </div>


            {/* =================================================
                FLOOR CONSTRUCTION
            ================================================= */}

            <div className="construction-floors">

              {Array.from({
                length: totalFloors,
              }).map((_, index) => (

                <ConstructionFloor
                  key={index}
                  index={index}
                  totalFloors={totalFloors}
                  scrollProgress={scrollYProgress}
                />

              ))}

            </div>


            {/* =================================================
                FINISHED FRONT BUILDING
                
                70% → 82% fade in
                82% → 100% stays visible
            ================================================= */}

            <motion.div
              className="building-face building-front"
              style={{
                opacity: finishedFaceOpacity,
              }}
            >

              {Array.from({
                length: 18,
              }).map((_, index) => (
                <span key={index} />
              ))}

            </motion.div>


            {/* =================================================
                FINISHED SIDE
                
                70% → 82% fade in
                82% → 100% stays visible
            ================================================= */}

            <motion.div
              className="building-side"
              style={{
                opacity: sideOpacity,
              }}
            />


            {/* =================================================
                ECOTS LOGO
                
                82% → 96% fade in
                96% → 100% stays visible
            ================================================= */}

            <motion.div
              className="building-brand"
              style={{
                x: "-50%",
                y: logoY,
                opacity: logoOpacity,
                scale: logoScale,
              }}
            >

              <img
                src={logoImg}
                alt="EcoTS"
              />

              <b>
                EcoTS
              </b>

              <small>
                RESIDENCIES
              </small>

            </motion.div>


            {/* =================================================
                CONSTRUCTION LIFT
            ================================================= */}

            <motion.div
              className="construction-lift"
              style={{
                bottom: liftY,
              }}
            >

              <i />
              <span />

            </motion.div>

          </div>


          {/* =================================================
              CRANE
          ================================================= */}

          <motion.div
            className="crane-rig"
            style={{
              opacity: craneOpacity,
            }}
          >


            {/* =================================================
                CRANE BASE
            ================================================= */}

            <div className="crane-base">
              <i />
            </div>


            {/* =================================================
                VERTICAL MAST
            ================================================= */}

            <div className="crane-mast">
              <i />
            </div>


            {/* =================================================
                TURNTABLE
            ================================================= */}

            <div className="crane-turntable" />


            {/* =================================================
                CABIN
            ================================================= */}

            <div className="crane-cab">
              <span />
            </div>


            {/* =================================================
                MAIN JIB
            ================================================= */}

            <div className="crane-jib">

              <i />
              <i />
              <i />
              <i />

            </div>


            {/* =================================================
                A-FRAME
            ================================================= */}

            <div className="crane-a-frame" />


            {/* =================================================
                COUNTER JIB
            ================================================= */}

            <div className="crane-counter-jib">

              <i />
              <b />
              <b />

            </div>


            {/* =================================================
                TROLLEY
            ================================================= */}

            <motion.div
              className="crane-trolley"
              style={{
                left: trolleyX,
              }}
            >

              <i />


              {/* =================================================
                  CABLE
              ================================================= */}

              <motion.div
                className="crane-cable"
                style={{
                  height: cableHeight,
                }}
              >


                {/* =================================================
                    HOOK
                ================================================= */}

                <motion.div
                  className="crane-hook"
                  style={{
                    y: loadY,
                    rotate: hookRotate,
                  }}
                >

                  <i />


                  {/* =================================================
                      LOAD
                  ================================================= */}

                  <div className="crane-load">

                    <span />
                    <span />
                    <span />

                  </div>

                </motion.div>

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}