import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import logoImg from '../assets/logo.jpeg';

export default function ScrollCrane() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const craneRotate = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [-10, -2, 10, 4]);
  const trolleyX = useTransform(scrollYProgress, [0, 0.25, 0.62, 1], ['14%', '42%', '76%', '55%']);
  const cableHeight = useTransform(scrollYProgress, [0, 0.25, 0.62, 1], [94, 76, 196, 118]);
  const loadY = useTransform(scrollYProgress, [0, 0.25, 0.62, 1], [0, -20, 88, 18]);
  const hookRotate = useTransform(scrollYProgress, [0, 0.3, 0.62, 1], [-8, 7, -6, 2]);
  const liftY = useTransform(scrollYProgress, [0, 0.55, 1], ['74%', '23%', '12%']);
  const buildingHeight = useTransform(scrollYProgress, [0, 1], ['37%', '82%']);
  const progress = useTransform(scrollYProgress, [0, 1], ['08%', '82%']);

  return <section ref={sectionRef} className="crane-scroll-section" aria-label="EcoTS construction progress">
    <div className="crane-sticky-stage"><div className="crane-scene-glow" /><div className="crane-grid" />
      <div className="crane-copy"><p className="crane-eyebrow">Built with intention</p><h2>Watch our vision<br />take shape.</h2><p className="crane-description">Scroll through the construction sequence as the crane hoists materials and the EcoTS residence rises floor by floor.</p><div className="crane-progress" aria-hidden="true"><span>Construction progress</span><div><motion.i style={{ width: progress }} /></div></div></div>
      <div className="crane-scroll-cue" aria-hidden="true"><span>Scroll to operate</span><ArrowDown size={15} /></div>
      <div className="crane-world" aria-hidden="true"><div className="crane-ground" /><div className="site-mark site-mark-one" /><div className="site-mark site-mark-two" />
        <motion.div className="building-shell" style={{ height: buildingHeight }}><div className="building-roof"><i /></div><div className="building-face building-front">{Array.from({ length: 20 }).map((_, index) => <span key={index} />)}</div><div className="building-brand"><img src={logoImg} alt="" /><b>EcoTS</b><small>RESIDENCIES</small></div><div className="building-side" /><motion.div className="construction-lift" style={{ bottom: liftY }}><i /><span /></motion.div></motion.div>
        <motion.div className="crane-rig" style={{ rotate: craneRotate }}><div className="crane-base"><i /></div><div className="crane-mast"><i /></div><div className="crane-turntable" /><div className="crane-cab"><span /></div><div className="crane-jib"><i /><i /><i /><i /></div><div className="crane-a-frame" /><div className="crane-counter-jib"><i /><b /><b /></div><motion.div className="crane-trolley" style={{ left: trolleyX }}><i /><motion.div className="crane-cable" style={{ height: cableHeight }}><motion.div className="crane-hook" style={{ y: loadY, rotate: hookRotate }}><i /><div className="crane-load"><span /><span /><span /></div></motion.div></motion.div></motion.div></motion.div>
      </div>
    </div>
  </section>;
}