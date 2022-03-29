import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './compornents/Profile';
import Works from './compornents/Works';
import reportWebVitals from './reportWebVitals';

const header_items = [
  "PROFILE","WORKS","SKILL", "BLOG", "CONTACT"
];

const split_imgs = [
  "me2.png"
]

const work = [
  {
    title: "アニマトロニクスヘッド",
    info: "Hardware/ Software",
    description: "大学での研究活動として開発している頭部のアニマトロニクス。作成したアプリケーションにより、ユーザの顎の開閉や瞬き、視線などを模倣することができる。大学の研究助成金である教育奨励金「学習・教育奨励金」の支援を受け開発を行っている。",
    img_src: "img/animatronic_face.jpg",
    link: "https://twitter.com/i/events/1490555237538889731",
    link_description: "Twittrモーメント",
    src_video: "https://www.youtube.com/embed/BVfg5XKLUKk"
  },
  {
    title:"バーチャルθ館",
    info: "Modeling/ World Making",
    description: "コロナウイルスの影響により大学が閉鎖され、キャンパスに入れない学生のために大学の講堂の1つであるθ館をモデリングし、Clusterのワールド(のちリンク埋め込み)を製作した。製作したワールドはサークルの新歓の会場として、大学祭の1つである七夕祭の講演会の会場として、そして大学のオープンキャンパスとして使用された",
    img_src: "img/theta4_3.jpg",
    link: "https://www.sfc.keio.ac.jp/news/014792.html",
    link_description: "SFCオンライン七夕祭開催",
    src_video: "https://www.youtube.com/embed/4roCFFl12UE"
  },
  {
    title:"コミュニケーションロボット・OBAKE",
    info: "Hardware/ Software",
    description: "趣味で開発しているコミュニケーションロボット。",
    img_src: "img/obake.jpg",
    src_type: "image",
    src_img: "img/obake.jpg"
  }
];



function Header(props){
  return(
    <header className='header'>
      <div className='header-inner'>
        <h1 className='header-logo'>
          MASATO IIMORI
        </h1>
        <nav className='header-nav'>
          <ul className='header-nav-list'>
            {
                props.items.map((item, i)=>(
                  <React.Fragment>
                    <li key={i} className='header-nav-item'><a href="#">{item}</a></li>
                  </React.Fragment>
                ))
              }
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Split(props){
  return(
    <div className='profile section'>
      <div className='split-body'>
        <p className='split-title'>いーもり /Emori</p>
        <p className="split-text">
            くすっと笑顔になるようなものづくり、<br></br>
            見た人を圧倒させるモデリング、<br></br>
            誰かを幸せにするものづくりを得意とします
          </p>
          <div className='split-img'>
            {
              props.imgs.map((item, i)=>(
                <img src={"img/"+item} />
              ))
            }
          </div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
      <Header items = {header_items} />
      <main className='content'>
        <Split imgs = {split_imgs} />
        <Profile />
        <Works works={work} />
      </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
