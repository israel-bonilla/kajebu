import PipelineCard from "./PipelineCard";
import styles from '../../styles/Marketing/PipelinesScreen.module.scss';

const PipelinesScreen = () => {
  return (
    <div className={styles.container}>
      <h1>Pipelines</h1>
      <div className={styles.cards}>
        <PipelineCard name="Sales Page" visitors={57} image="http://links.israelb.xyz/kajebu/pipeline-images/sales-page.webp" pages={2} />
        <PipelineCard name="Webinar 1" visitors={48} image="http://links.israelb.xyz/kajebu/pipeline-images/webinar-1.webp" pages={4} />
      </div>
    </div>
  )
}

export default PipelinesScreen
