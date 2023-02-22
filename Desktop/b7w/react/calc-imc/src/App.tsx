import { useState } from 'react';
import styles from './App.module.css'
import imc from './assets/imc.jpeg'
import {levels, calculateImc, Levels} from './helpers/imc'
import {GridItem} from './components/GridItem'
import leftArrowImage from './assets/leftarrow.png'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Levels | null>(null);

  const handleClick = () => {
    if(heightField && weightField){
      setShowItem(calculateImc(heightField, weightField))
    } else{
      alert("Preencha os dados corretamente.")
    }
  }
  const handleBackButton = () => {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={imc} alt="" width={90} />
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        <p>O índice é calculado da seguinte maneira: divide-se o peso pela altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
        <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices. Importante: siga os exemplos e use pontos como separadores.</p>

      <input 
       type="number"
       placeholder='Digite sua altura. Ex: 1.65 (em metros)'
       value={heightField > 0 ? heightField : ''}
       onChange={e => setHeightField(parseFloat(e.target.value))} 
       disabled ={showItem ? true : false}
       />
       

      <input
       type="number" 
       placeholder='Digite seu peso. Ex: 65 (em kg)' 
       value={weightField > 0 ? weightField : ''} 
       onChange={e => setWeightField(parseFloat(e.target.value))}
       disabled ={showItem ? true : false}
       />

       <button onClick={handleClick}   disabled ={showItem ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!showItem &&
        <div className={styles.grid}>
         {levels.map((item, key)=> ( 
             <GridItem key={key} item={item} />
             )
             )}
            </div>}
            {showItem &&
            <div className={styles.iconBig}>
            <div className={styles.arrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="" width={25}/>
            </div>
            <GridItem item={showItem}/>
            </div>
            }
      </div>
      </div>
    </div>
  );
}

export default App;
