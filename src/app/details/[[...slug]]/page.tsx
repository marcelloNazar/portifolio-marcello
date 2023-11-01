export default async function Project({ params }: { params: { slug: any } }) {
  console.log(params.slug);
  const title = params.slug[0];
  const desc = params.slug[1];
  const img = params.slug[2];
  const tec = params.slug[3];
  const link = params.slug[4];
  return <div>
    <div>{title}</div>
    <div>{desc}</div>
    <div>{img}</div>
    <div>{tec}</div>
    <div>{link}</div>
  </div>;
}
