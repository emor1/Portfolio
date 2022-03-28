import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "../../masato_portfolio/css/style.css"

const work = [
  {
    title: "アニマトロニクスヘッド",
    info: "Hardware/ Software",
    description: "大学での研究活動として開発している頭部のアニマトロニクス。作成したアプリケーションにより、ユーザの顎の開閉や瞬き、視線などを模倣することができる。大学の研究助成金である教育奨励金「学習・教育奨励金」の支援を受け開発を行っている。",
    link: "https://twitter.com/i/events/1490555237538889731",
    link_description: "Twittrモーメント",
    src_type: "video",
    src: "https://www.youtube.com/embed/BVfg5XKLUKk"
  },
  {
    title:"バーチャルθ館",
    info: "Modeling/ World Making",
    description: "コロナウイルスの影響により大学が閉鎖され、キャンパスに入れない学生のために大学の講堂の1つであるθ館をモデリングし、Clusterのワールド(のちリンク埋め込み)を製作した。製作したワールドはサークルの新歓の会場として、大学祭の1つである七夕祭の講演会の会場として、そして大学のオープンキャンパスとして使用された",
    link: "https://www.sfc.keio.ac.jp/news/014792.html",
    link_description: "SFCオンライン七夕祭開催",
    src_type: "video",
    src: "https://www.youtube.com/embed/4roCFFl12UE"
  }
];

function Works(props){
  return (
    <div className="works">
      {props.works.map((work, i)=>(
        <p className='works-name'>
          {work.title} <br></br>
          {work.info}  <br></br>
          {work.description}
        </p>
      ))}
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Works works={work} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
