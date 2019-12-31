import ReactPanel from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactBlank from '@feizheng/react-blank';
import ReactBorderCollapse from '@feizheng/react-border-collapse';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactPanel header={<strong>少年的爱情</strong>}>
          <p>少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。</p>
          <p>
            青年时，想碰到一个白素贞，家大业大，要啥有啥，吃完软饭一抹嘴，还有人负责把她关进雷峰塔。
          </p>
          <p>
            中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。
          </p>
        </ReactPanel>
        <ReactBlank value={10} />
        <ReactPanel
          header={
            <React.Fragment>
              <strong>Tao</strong>
              <span>Chapter 1</span>
            </React.Fragment>
          }>
          <p>道可道，非常道；名可名，非常名。</p>
          <p>无名，天地之始，有名，万物之母。</p>
          <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
          <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
        </ReactPanel>
        <ReactBlank value={20} />
        <h4>PanelGroup</h4>
        <ReactBlank value={10} />
        <ReactBorderCollapse>
          <ReactPanel
            className="webkit-sassui-border-collapse__cell"
            header={<strong>少年的爱情</strong>}>
            <p>少年时，想碰到一个聂小倩，拼了性命爱一场，天亮前带着她的魂魄远走他乡。</p>
          </ReactPanel>
          <ReactPanel
            className="webkit-sassui-border-collapse__cell"
            header={<strong>少年的爱情</strong>}>
            <p>
              中年时，想要一个田螺姑娘，温婉可人，红袖添香，半夜写累了，让她变回原形，加干辣椒、花椒、姜、蒜片爆炒，淋入香油，起锅装盘。
            </p>
          </ReactPanel>
        </ReactBorderCollapse>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
