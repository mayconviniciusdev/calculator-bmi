import { useState } from 'react';

import poweredImage from './assets/powered.png';
import leftArrow from './assets/leftarrow.png';

import styles from './App.module.css';
import { weights, calculateImc, Weight } from './helpers/imc';
import { Grid } from './components/grid-item/grid-item';

const App = () => 
{
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Weight | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) 
      {setShowItem(calculateImc(heightField, weightField));}
      else {alert('Preencha todos os campos!')} }

  const handleBackButton = () => {
    setHeightField(0);
    setWeightField(0);
    setShowItem(null); }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} className={styles.imageLogo}></img>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>CALCULE SEU IMC.</h1>
          <p>O IMC é um parâmetro utilizado para avaliar se seu peso está no valor ideal para a altura e seu cálculo não difere entre os sexos, pois o mesmo é calculado somente com peso e altura.</p>
          <p>Saber a classificação do seu IMC é um fator importante, pois assim é possível ver informações relevantes sobre o corpo que ajudam a identificar se há problemas de obesidade ou desnutrição em diferentes idades.</p>
          <p>O mesmo ajuda a indificar qual o intervalo de peso ideal que devemos ter para garantir uma melhor qualidade de vida. Afinal, estar no peso ideal ajuda a evitar o aparecimento de doenças crônicas.</p>
          <span>Digite suas informações abaixo:</span>

          <input 
          type="number"
          placeholder='Qual sua altura em metros? (Ex: 1.68)'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={showItem ? true : false}/>

          <input 
          type="number"
          placeholder='Qual seu peso em kg? (Ex: 68.2)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={showItem ? true : false}/>

          <button 
          onClick={handleCalculateButton} 
          disabled={showItem ? true : false}>
            Calcular IMC
          </button>
        </div>

        <div className={styles.rightSide}>
          {! showItem && 
            <div className={styles.grid}>
              {weights.map((item, key) => (<Grid key={key} item={item}></Grid>))}
            </div>
          }

          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} className={styles.leftArrowImg}/>
              </div>
              <Grid item={showItem}/>
            </div>
          }
        </div>
      </div>

      <div className={styles.table}>
        <h2>COMO INTERPRETAR O RESULTADO DO IMC?</h2>
        <p>É interessante que o resultado do IMC juntamente com outros fatores seja interpretado por um nutricionista, que poderá indicar uma dieta de acordo com seus objetivos e histórico de saúde. Classificação do IMC segundo a OMS:</p>

          <table>
              <thead>
                  <tr>
                      <th>ÍNDICE MASSA CORPORAL (kg/m<sup>2</sup>)</th>
                      <th>CLASSIFICAÇÃO</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td>MENOR QUE 16</td>
                      <td>MAGREZA GRAU III</td>
                  </tr>

                  <tr>
                      <td>ENTRE 16 - 16,9</td>
                      <td>MAGREZA GRAU II</td>
                  </tr>

                  <tr>
                      <td>ENTRE 17 - 18,4</td>
                      <td>MAGREZA GRAU I</td>
                  </tr>

                  <tr>
                      <td>ENTRE 18,5 - 24,9</td>
                      <td>ADEQUADO</td>
                  </tr>

                  <tr>
                      <td>ENTRE 25 - 29,9</td>
                      <td>PRÉ-OBESO</td>
                  </tr>

                  <tr>
                      <td>ENTRE 30 - 34,9</td>
                      <td>OBESIDADE GRAU I</td>
                  </tr>

                  <tr>
                      <td>ENTRE 35 - 39,9</td>
                      <td>OBESIDADE GRAU II</td>
                  </tr>

                  <tr>
                      <td>MAIOR QUE 40</td>
                      <td>OBESIDADE GRAU III</td> 
                  </tr>
              </tbody>
          </table>
      </div>

      <footer>
        <p>DESENVOLVIDO POR: <a href="https://mayconviniciusdev.com">MAYCON VINÍCIUS</a><br/><span>contato@mayconviniciusdev.com</span></p>
      </footer>
    </div>
  );
}

export default App;