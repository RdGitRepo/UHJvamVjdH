import "../css/NewsItem.css";

export default function NewsItem({imageurl, title, description, sourceurl}) {

  return (
    <div className="card my-3 mx-3">
      <div className="imagefornews">
        <img src={imageurl ? imageurl : "https://picsum.photos/100/100"} className="card-img-top" alt="banner" />
      </div>
      <div className="card-body cardbodyclass">
        <h5 className="card-title">{title ? title.slice(0,48) + "..." : "This is default title go to source to view articale"}</h5>
        <p className="card-text">
          {description ? description.slice(0,48) + "..." : "this is default description"}
        </p>
        <a href={sourceurl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
          Go To Original Source
        </a>
      </div>
    </div>
  );
}
