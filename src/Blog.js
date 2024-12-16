function BlogContent({title, dated, detail, data}) {
  return (
    <div class="blogSec">
      <div class="topBlog">
        <p class="topicBlog">{title}</p>
      </div>
      <div class="bottomBlog">
        <p class="dateBlog">{dated}</p>
        <p class="headBlog">{detail}</p>
        <p class="paraBlog">{data}</p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div class="blogs">
      <div class="upperBlog">
        <p class="smallSec">BLOG</p>
        <h1 class="headingSec">Blog Posts</h1>
        <p class="paraSec">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old
        </p>
      </div>
      <div class="lowerBlog">
        <BlogContent
          title="Web Design"
          dated="01 DEC 2022"
          detail="Web Design Trends in 2022"
          data="Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old"
        />
        <BlogContent
          title="Programming"
          dated="01 DEC 2022"
          detail="Web Design Trends in 2022"
          data="Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old"
        />
        <BlogContent
          title="Marketing"
          dated="01 DEC 2022"
          detail="Web Design Trends in 2022"
          data="Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old"
        />
      </div>
    </div>
  );
}

export default Blog;
