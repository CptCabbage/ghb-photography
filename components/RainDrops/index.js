import styles from './RainDrops.module.css'

const Drop = () => {
  const style = {
    '--x': Math.floor(Math.random() * 100),
    '--y': Math.floor(Math.random() * 100),
    '--o': Math.random(),
    '--a': Math.random() + 0.5,
    '--d': Math.random() * 2 - 1,
    '--s': Math.random(),
  }

  return (
    <svg
      className={styles.raindrop}
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 5 50"
      style={style}
    >
      <path
        className={styles.path}
        stroke="none"
        d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
      />
    </svg>
  )
}

const RainDrops = () => Array(250).fill().map(Drop)

export default RainDrops
