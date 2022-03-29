import React from 'react';


function Works(props){
    return (
    <section className="works section">
        {props.works.map((work, i)=>(
        <React.Fragment>
            <label key={i} className="works-item" for={i}>
            {work.img_src && <p className="works-img"><img src={work.img_src} /></p>}
            <p className='works-name'>{work.title}</p>
            <p>{work.info}, {i}</p>
            </label>
            <div className='pop-up-title'>{work.title}</div>
            <p className="pop-up-description">{work.description}<br></br>
            {
                // 外部リンクがあれば表示
            work.link && <a href={work.link}>{work.link_description}</a>
            }
            {
                // 動画があれば表示
            work.src_video && 
                <div id="wrapper">
                    <iframe id="yvideo" src={work.src_video} 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
            }
            {
                // ポップアップの中に表示する画像があれば表示
            work.src_img && <p  className="works-img"><img src={work.src_img} /></p>
            }
            </p>
        </React.Fragment>
        ))}
    </section>
    );
}

export default Works;