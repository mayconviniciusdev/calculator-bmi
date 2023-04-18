import { Weight } from '../../helpers/imc';
import styles from './grid-item.module.css';

import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {item: Weight}

export const Grid = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}><img src={item.icon === 'up' ? upImage : downImage}/></div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc && <div className={styles.yourImc}>Seu IMC é {item.yourImc} kg/m²</div>}
            <div className={styles.gridInfo}>
                <>Seu IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
            </div>
        </div>
        
    )
}