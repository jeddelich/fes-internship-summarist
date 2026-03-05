export default async function BookPage({ params }: { params: { id: string } }) {
    const { id } = await params
    return <div>Book ID: {id}</div>;
}