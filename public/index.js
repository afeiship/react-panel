import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPanel from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-panel">
        <ReactPanel className="mb-5" header="I am panel title">
          <p>道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。</p>
          <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </ReactPanel>

        <ReactPanel
          className="mb-5"
          header={
            <h1>
              <span>
                我是<strong>定制化</strong>的标题
              </span>
            </h1>
          }>
          <p>天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。</p>
          <p>故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。</p>
          <p>是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。</p>
          <p>夫惟弗居，是以不去。</p>
        </ReactPanel>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
