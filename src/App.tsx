import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

interface State {
  type: 'data' | 'stop' | 'span' | 'start' | '',
  timestamp: number,
  begin?: number,
  end?: number,
}

const App: React.FC = () => {
  /*state é o nome da sua variável, pode ser qualquer um, é uma variável qualquer
  setState é a função que vai trocar os valores da sua variável, recomendo
  ler sobre imutabilidade no React case queira entender mais
  (PS: a função setState também pode ter qualquer nome, mas em geral
    usa-se set{nome da variável que você declarou antes}
  )
  Se você usar state = valor do input não funciona.
  Mas você pode usar qualquer operação possível do Javascript em cima
  de state, como split(), replace() e substring()
  */
  const [state, setState] = useState<string>("");

  return (
    <div>
      <input type="json" onChange={(e) => {
        setState(e.target.value);
      }}></input>
      <button onClick={() => {
        console.log(state);
      }}></button>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}

export default App;