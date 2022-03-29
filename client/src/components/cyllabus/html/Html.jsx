import CollapseFooter from "../../parts/collapseFooter/CollapseFooter";
import Topbar from "../../parts/topbar/Topbar";
import "./html.css";

export default function Html() {
  return (
    <div className="html">
      <Topbar />
      <h1 className="htmlTitle">HTML</h1>
      <section className="content">
        <article>
          <p>
            HTML (HyperText Markup Language) is the most basic building block of
            the Web. It defines the meaning and structure of web content. Other
            technologies besides HTML are generally used to describe a web
            page's appearance/presentation (CSS) or functionality/behavior
            (JavaScript).
          </p>
          <p>
            "Hypertext" refers to links that connect web pages to one another,
            either within a single website or between websites. Links are a
            fundamental aspect of the Web. By uploading content to the Internet
            and linking it to pages created by other people, you become an
            active participant in the World Wide Web.
          </p>
          <p>
            HTML uses "markup" to annotate text, images, and other content for
            display in a Web browser. HTML markup includes special "elements"
            such as head, title, body, header, footer, article, section, p, div,
            span, img, aside, audio, canvas, datalist, details, embed, nav,
            output, progress, video, ul, ol, li and many others.
          </p>
          <p>
            An HTML element is set off from other text in a document by "tags",
            which consist of the element name surrounded by and . The name of an
            element inside a tag is case insensitive. That is, it can be written
            in uppercase, lowercase, or a mixture. For example, the title tag
            can be written as Title, TITLE, or in any other way.
          </p>
        </article>
      </section>
      <hr className="hr"/>
      <section className="secondContent">
      <div className="containImg">
        <img className="htmlImg" src="https://henryegloff.com/media/How-to-Develop-a-Basic-Webpage-Using-HTML-and-CSS-Tutorial-2.jpg" alt="" />
        <img className="htmlImg" src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/html.png" alt="" />
        <img className="htmlImg" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203170945/HTML-Tutorials.png" alt="" />
        <img className="htmlImg" src="http://w3programmers.com/bangla/wp-content/uploads/2018/12/html-tutorial.png" alt="" />
        <img className="htmlImg" src="data:image/jpeg;base64,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" alt="" />
        <img className="htmlImg" src="https://www.juanmacivico87.com/wp-content/uploads/buenas-practicas-html.png" alt="" />

      </div>
      <span className="htmlVideo">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </span>
      <br />
      <br />
      </section>
      <CollapseFooter />
    </div>
  );
}
