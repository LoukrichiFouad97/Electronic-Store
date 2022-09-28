import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

function Sitemap() {
  const sitemapData = [
    {
      title: "Make money with us",
      links: [
        "sitemap 1",
        "sitemap 2",
        "sitemap 3",
        "sitemap 4",
        "sitemap 5",
        "sitemap 6",
      ],
    },
    {
      title: "Product categories",
      links: [
        "sitemap 1",
        "sitemap 2",
        "sitemap 3",
        "sitemap 4",
        "sitemap 5",
        "sitemap 6",
      ],
    },
    {
      title: "Let Us help you",
      links: [
        "sitemap 1",
        "sitemap 2",
        "sitemap 3",
        "sitemap 4",
        "sitemap 5",
        "sitemap 6",
      ],
    },
    {
      title: "Get to know us",
      links: [
        "sitemap 1",
        "sitemap 2",
        "sitemap 3",
        "sitemap 4",
        "sitemap 5",
        "sitemap 6",
      ],
    },
  ];

  const renderSitemap = sitemapData.map((col, index) => (
    <Col className="sitemap-col" key={index} sx="12" sm="3">
      <h4 className="sitemap-col-title">{col.title}</h4>
      <div className="sitemap-col-content">
        <ul>
          {col.links.map((link, index) => (
            <li key={index}>
              <Link to="" className="sitemap-content-link">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  ));
  return <Row className="sitemap">{renderSitemap}</Row>;
}

export default Sitemap;
