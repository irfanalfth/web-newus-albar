import Details from './Details';
import Content from './Content';

import news from '@data/SinglePost/all-news.json';
import newsRTL from '@data/SinglePost/all-news-rtl.json';

const AllNews = ({ isWide, leftSidebar, style = "4", rtl }) => {
  const data = rtl ? newsRTL : news;

  return (
    <section className="all-news section-padding pt-50 blog bg-transparent style-3">
      <div className="container">
        <Details details={{ title: data.title, time: data.time, type: data.type }} style={style} rtl={rtl} />
        <div className="row gx-4 gx-lg-5">
          
            <div className="blog-content-info">
              <Content style={style} rtl={rtl} />
            </div>
          </div>

      </div>
    </section>
  )
}

export default AllNews