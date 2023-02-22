import { Levels } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
  item: Levels;
};
export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.iconGrid}>
        <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc &&
      <div className={styles.yourImc}>Seu IMC é de {item.yourImc}.</div>
      }
      <div className={styles.infoGrid}>
         <>
         
         IMC está entre {item.imc[0]} e {item.imc[1]}
         </>
      </div>
    </div>
  );
};
