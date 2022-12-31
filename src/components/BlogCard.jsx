export default function BlogCard(props) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={props.featuredImg} alt={props.featuredImgAlt}/></figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.excerpt}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><a href={`/blog/${props.slug}`}>Read More</a></button>

        </div>
      </div>
    </div>
  )
}
